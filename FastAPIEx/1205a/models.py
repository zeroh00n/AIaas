from sqlalchemy import Column, Integer, String, DateTime
from database import Base

class User(Base):
  __tablename__ = "user"
  id = Column(Integer, primary_key=True) # Auto_increment가 기본설정
  name = Column(String(48), nullable=False)
  gender = Column(String(6))
  mobile = Column(String(20))

