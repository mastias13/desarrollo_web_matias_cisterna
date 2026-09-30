from db import db

class Region(db.Model):
    __tablename__ = "region"
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200))
    
    comunas = db.relationship(
        "Comuna",
        backref="region"
    )
    @classmethod
    def getRegiones(cls):
        return cls.query.all()