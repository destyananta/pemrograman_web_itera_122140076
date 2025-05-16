from sqlalchemy import Column, Integer, String, SmallInteger
from .meta import Base

class Matakuliah(Base):
    __tablename__ = 'matakuliah'

    id = Column(Integer, primary_key=True)
    kode_mk = Column(String(10), unique=True, nullable=False)
    nama_mk = Column(String(100), nullable=False)
    sks = Column(SmallInteger, nullable=False)
    semester = Column(SmallInteger, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'kode_mk': self.kode_mk,
            'nama_mk': self.nama_mk,
            'sks': self.sks,
            'semester': self.semester
        }