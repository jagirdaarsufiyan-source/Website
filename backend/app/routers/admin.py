from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Career, ContactMessage, Project, Service, Testimonial, User
from ..schemas import (
    CareerIn,
    CareerOut,
    ContactMessageOut,
    ProjectIn,
    ProjectOut,
    ServiceIn,
    ServiceOut,
    TestimonialIn,
    TestimonialOut
)
from ..security import get_current_admin


router = APIRouter(prefix="/admin", tags=["Admin"], dependencies=[Depends(get_current_admin)])


MODEL_CONFIG = {
    "services": (Service, ServiceIn, ServiceOut),
    "projects": (Project, ProjectIn, ProjectOut),
    "careers": (Career, CareerIn, CareerOut),
    "testimonials": (Testimonial, TestimonialIn, TestimonialOut)
}


def get_item_or_404(db: Session, model, item_id: int):
    item = db.get(model, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item


@router.get("/contacts", response_model=list[ContactMessageOut])
def contact_messages(db: Session = Depends(get_db)):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).all()


@router.patch("/contacts/{message_id}/status", response_model=ContactMessageOut)
def update_contact_status(message_id: int, status_value: str, db: Session = Depends(get_db)):
    message = get_item_or_404(db, ContactMessage, message_id)
    message.status = status_value
    db.commit()
    db.refresh(message)
    return message


@router.get("/{resource}")
def list_resource(resource: str, db: Session = Depends(get_db)):
    model = MODEL_CONFIG.get(resource, (None,))[0]
    if model is None:
        raise HTTPException(status_code=404, detail="Unknown resource")
    return db.query(model).order_by(model.created_at.desc()).all()


@router.post("/{resource}", status_code=status.HTTP_201_CREATED)
def create_resource(resource: str, payload: dict, db: Session = Depends(get_db), _: User = Depends(get_current_admin)):
    config = MODEL_CONFIG.get(resource)
    if not config:
        raise HTTPException(status_code=404, detail="Unknown resource")
    model, schema, _out = config
    data = schema(**payload)
    item = model(**data.model_dump())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item


@router.put("/{resource}/{item_id}")
def update_resource(resource: str, item_id: int, payload: dict, db: Session = Depends(get_db)):
    config = MODEL_CONFIG.get(resource)
    if not config:
        raise HTTPException(status_code=404, detail="Unknown resource")
    model, schema, _out = config
    item = get_item_or_404(db, model, item_id)
    data = schema(**payload)
    for key, value in data.model_dump().items():
        setattr(item, key, value)
    db.commit()
    db.refresh(item)
    return item


@router.delete("/{resource}/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_resource(resource: str, item_id: int, db: Session = Depends(get_db)):
    config = MODEL_CONFIG.get(resource)
    if not config:
        raise HTTPException(status_code=404, detail="Unknown resource")
    model = config[0]
    item = get_item_or_404(db, model, item_id)
    db.delete(item)
    db.commit()
    return None
