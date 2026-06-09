from datetime import datetime
from pydantic import BaseModel, EmailStr, Field


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserCreate(LoginRequest):
    full_name: str = Field(min_length=2, max_length=160)


class UserOut(BaseModel):
    id: int
    email: EmailStr
    full_name: str
    is_admin: bool

    class Config:
        from_attributes = True


class ServiceIn(BaseModel):
    title: str
    slug: str
    description: str
    icon: str | None = None
    is_featured: bool = True


class ServiceOut(ServiceIn):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class ProjectIn(BaseModel):
    title: str
    category: str
    summary: str
    case_study: str | None = None
    image_url: str | None = None
    is_featured: bool = True


class ProjectOut(ProjectIn):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class CareerIn(BaseModel):
    title: str
    location: str
    skills: str
    description: str
    is_open: bool = True


class CareerOut(CareerIn):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class ContactMessageIn(BaseModel):
    name: str = Field(min_length=2, max_length=160)
    email: EmailStr
    phone: str | None = None
    subject: str = Field(min_length=2, max_length=220)
    message: str = Field(min_length=5)


class ContactMessageOut(ContactMessageIn):
    id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True


class TestimonialIn(BaseModel):
    client_name: str
    client_role: str | None = None
    quote: str
    rating: int = Field(default=5, ge=1, le=5)
    is_published: bool = True


class TestimonialOut(TestimonialIn):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
