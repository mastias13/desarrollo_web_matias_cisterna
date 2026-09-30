from db import db

class Ave(db.Model):
    __tablename__ = "ave"
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80))
    
    @classmethod
    def getSpecies(cls):
        return cls.query.all()
    