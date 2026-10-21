from db import db

class Comentario(db.Model):
    __tablename__ = "comentario"

    id = db.Column(db.Integer, primary_key=True)

    nombre = db.Column(
            db.String(80)
            )
    texto = db.Column(
            db.String(300)
            )
    fecha = db.Column(
            db.DateTime
            )
    avistamiento_id = db.Column(
            db.Integer,
            db.ForeignKey("avistamiento.id")
            )
