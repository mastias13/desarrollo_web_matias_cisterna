from db import db

class Avistamiento(db.Model):
    __tablename__ = "avistamiento"
    
    id = db.Column(db.Integer, primary_key=True)
    voluntario_id = db.Column(
        db.Integer,
        db.ForeignKey("voluntario.id")
    )
    ave_id = db.Column(
        db.Integer,
        db.ForeignKey("ave.id")
    )
    fecha_hora = db.Column(
        db.DateTime
    )
    descripcion = db.Column(
        db.Text
    )
    comuna_id = db.Column(
        db.INTEGER,
        db.ForeignKey("comuna.id")
    )
    ave = db.relationship("Ave")
    voluntario = db.relationship("Voluntario")
    registro = db.relationship(
            "Registro",
            backref="avistamiento"
        )
    
    comuna = db.relationship("Comuna")
    
    @classmethod
    def getAvistamientos(cls):
        return cls.query.all()
    
    @classmethod
    def getLast(cls, amount):
        return (
            cls.query
            .order_by(cls.fecha_hora.desc())
            .limit(amount)
            .all()
        )
    @property
    def preview_image(self):
        for reg in self.registro:
            if reg.ruta_archivo.lower().endswith((".png", ".jpg", ".jpeg")):
                return reg.ruta_archivo
        return None

    @classmethod
    def getId(cls, id):
        if id==None: return None
        return  (
            cls.query
            .get(id)
        )
    
    @classmethod
    def get_filtered(cls, species, region, comuna):
        query = cls.query
        if species:
            query=query.filter(
                cls.ave_id == species
            )
        if comuna:
            query=query.filter(
                cls.comuna_id == comuna
            )
            return query
        if region:
            query=query.filter(
                cls.comuna.has(
                    region_id=region
                )
            )
        return query