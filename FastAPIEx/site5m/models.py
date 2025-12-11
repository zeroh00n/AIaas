import datetime

from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.dialects.mysql import TEXT
from database import Base

class User(Base):
  __tablename__ = "user"
  id = Column(Integer, primary_key=True) # Auto_increment가 기본설정
  loginid = Column(String(24))
  password = Column(String(24))
  name = Column(String(48))
  gender = Column(String(6))
  mobile = Column(String(20))

class Board(Base):
  __tablename__ = "board"
  id = Column(Integer, primary_key=True, autoincrement=True)
  title = Column(String(256), nullable=False)
  content = Column(TEXT)
  writer = Column(String(20))
  hit = Column(Integer, default = 0)
  created = Column(DateTime, default=datetime.datetime.now)
  updated = Column(DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)
