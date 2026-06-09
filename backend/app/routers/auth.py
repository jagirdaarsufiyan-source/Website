from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User
from ..schemas import LoginRequest, Token, UserCreate, UserOut
from ..security import create_access_token, get_current_admin, hash_password, verify_password


router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/bootstrap", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def bootstrap_admin(payload: UserCreate, db: Session = Depends(get_db)):
    existing_admin = db.query(User).filter(User.is_admin == True).first()
    if existing_admin:
        raise HTTPException(status_code=409, detail="Admin already exists")
    user = User(email=payload.email, full_name=payload.full_name, hashed_password=hash_password(payload.password))
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.post("/login", response_model=Token)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == payload.email, User.is_active == True).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return Token(access_token=create_access_token(user.email))


@router.get("/me", response_model=UserOut)
def me(current_user: User = Depends(get_current_admin)):
    return current_user
