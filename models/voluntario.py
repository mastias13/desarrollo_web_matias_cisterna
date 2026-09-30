from db import db

class Voluntario(db.Model):
    __tablename__ = "voluntario"
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255))
    email = db.Column(db.String(80))
    telefono = db.Column(db.String(15))
    fecha_registro = db.Column(db.DateTime)
    comuna_id = db.Column(
        db.Integer,
        db.ForeignKey("comuna.id")
    )
    password = db.Column(
        db.String(255),
        nullable=False
    )