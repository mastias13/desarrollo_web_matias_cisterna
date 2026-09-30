from db import db

class Registro(db.Model):
    __tablename__ = "registro"
    
    id =db.Column(db.Integer, primary_key=True)
    ruta_archivo = db.Column(
        db.String(300)
    )
    nombre_archivo = db.Column(
        db.String(300)
    )
    avistamiento_id = db.Column(
        db.Integer,
        db.ForeignKey("avistamiento.id")
    )