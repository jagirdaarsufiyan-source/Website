from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Career, ContactMessage, Project, Service, Testimonial
from ..schemas import CareerOut, ContactMessageIn, ContactMessageOut, ProjectOut, ServiceOut, TestimonialOut


router = APIRouter(tags=["Public"])


@router.get("/services", response_model=list[ServiceOut])
def list_services(db: Session = Depends(get_db)):
    return db.query(Service).order_by(Service.created_at.desc()).all()


@router.get("/projects", response_model=list[ProjectOut])
def list_projects(db: Session = Depends(get_db)):
    return db.query(Project).order_by(Project.created_at.desc()).all()


@router.get("/careers", response_model=list[CareerOut])
def list_careers(db: Session = Depends(get_db)):
    return db.query(Career).filter(Career.is_open == True).order_by(Career.created_at.desc()).all()


@router.get("/testimonials", response_model=list[TestimonialOut])
def list_testimonials(db: Session = Depends(get_db)):
    return db.query(Testimonial).filter(Testimonial.is_published == True).order_by(Testimonial.created_at.desc()).all()


@router.post("/contacts", response_model=ContactMessageOut, status_code=status.HTTP_201_CREATED)
def submit_contact(payload: ContactMessageIn, db: Session = Depends(get_db)):
    message = ContactMessage(**payload.model_dump())
    db.add(message)
    db.commit()
    db.refresh(message)
    return message
