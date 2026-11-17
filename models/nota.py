from db import db

class Nota(db.Model):
  __tablename__ = "nota"

  id = db.Column(db.Integer, primary_key=True)

  avistamiento_id = db.Column(
      db.Integer,
      db.ForeignKey("avistamiento.id")
      )

  nota = db.Column(db.Integer)
