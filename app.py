from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

from db import db
from datetime import date, datetime
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import os

from models.region import Region
from models.comuna import Comuna
from models.ave import Ave 
from models.voluntario import Voluntario
from models.avistamiento import Avistamiento
from models.registro import Registro

import validators.validators as validators

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = \
    "mysql+pymysql://cc5002:programacionweb@localhost/tarea2"

db.init_app(app)


@app.route("/")
def home():
    return render_template("index.html", birds=Avistamiento.getLast(2))


@app.route("/birds")
def birds():
    selected = request.args.get("selected")
    species = request.args.get("species")
    region = request.args.get("region")
    comuna = request.args.get("comuna")
    page = request.args.get("page", 1, type=int)
    
    query = Avistamiento.get_filtered(species, region, comuna)
    
    pagination = query.order_by(
        Avistamiento.fecha_hora.desc()
    ).paginate(
        page=page,
        per_page=10,
        error_out=False
    )
    
    
    return render_template("birds.html", species=species, region=region, comuna=comuna, selected=Avistamiento.getId(selected), pagination=pagination, reg=Region.getRegiones(), ave=Ave.getSpecies())

@app.route("/register", methods=["GET", "POST"])
def register():
    # Registro completado
    if request.method == "POST":
        errors = {}    
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        region = request.form["region"]
        comuna = request.form["comuna"]
        password = request.form["password"]

        validators.validateRegex(name, r"^[a-zA-Z0-9_-]+$", "name", "Utiliza caracteres válidos (a-zA-Z0-9_-)", errors)
        validators.validateLength(name, 3, 16, 1, 1, name, errors)
        validators.unique(name, Voluntario.nombre, Voluntario, "name", "nombre de usuario", errors)
        validators.validateRegex(email, r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", "email", "Usa un email válido", errors)
        validators.unique(email, Voluntario.email, Voluntario, "email", "correo electrónico", errors)
        validators.validateRegex(phone, r"^[0-9]{9}$", "phone", "Usa un número de teléfono válido", errors)
        validators.validateSelection(region, Region, "region", errors)
        validators.validateSelection(comuna, Comuna, "comuna", errors)
        validators.validateRegex(password, r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$", "password", "Ingresa una contraseña válida (8-15 caracteres, simbolos, mayusculas y minusculas)", errors)
    
        if errors == {}: 
            voluntario = Voluntario(
                nombre = name,
                email = email,
                telefono = phone,
                fecha_registro = date.today(),
                comuna_id = int(comuna),
                password = generate_password_hash(password)
            )
            db.session.add(voluntario)
            db.session.commit()
            
            return redirect(url_for("success", inf="Voluntario"))
        else: return render_template("register.html", regiones=Region.getRegiones(), errors=errors, form=request.form)
    
    return render_template("register.html", regiones=Region.getRegiones(), errors={}, form={})

@app.route("/newsight", methods=["GET", "POST"])
def newsight():
    
    if request.method == "POST":
        errors = {}
        
        voluntario = request.form["voluntario"]
        password = request.form["password"]
        
        species = request.form["species"]
        desc = request.form["desc"]
        region = request.form["region"]
        comuna = request.form["comuna"]
        date = request.form["date"]
        time = request.form["time"]
        img = request.files.getlist("img")
        
        validators.validateLogin(voluntario, password, Voluntario, Voluntario.nombre, "password", errors)
        validators.validateSelection(species, Ave, "species", errors)
        validators.validateRegex(desc, r"^[a-zA-Z0-9_-áéíóúÁÉÍÓÚÑñüÜ]+", "desc", "Utiliza caracteres válidos", errors)
        validators.validateLength(desc, 10, 500, 10, 100, "desc", errors)
        validators.validateSelection(region, Region, "region", errors)
        validators.validateSelection(comuna, Comuna, "comuna", errors)
        validators.validateDateTime(date, time, 14, "date", "time", errors)
        validators.validateFiles(img, 1, 3, "img", errors)
        
        
        

        if errors == {}:
            UPLOAD_FOLDER = "static/uploads"
            
            avistamiento = Avistamiento(
                voluntario_id = Voluntario.query.filter(Voluntario.nombre == voluntario).first().id,
                ave_id = int(species),
                fecha_hora = datetime.strptime(
                    f"{date} {time}",
                    "%Y-%m-%d %H:%M"
                ),
                descripcion = desc,
                comuna_id = int(comuna)
            )
            db.session.add(avistamiento)
            db.session.commit()
            for file in img:
                extension = file.filename.rsplit(".", 1)[1]
                nombre = f"{uuid.uuid4()}.{extension}"
                path = os.path.join(UPLOAD_FOLDER, nombre)
                file.save(path)
                registro = Registro(
                    ruta_archivo=path,
                    nombre_archivo=nombre,
                    avistamiento_id = avistamiento.id
                )
                db.session.add(registro)
            db.session.commit()
            return redirect(url_for("success", inf="Avistamiento"))
        else: return render_template("newsight.html", regiones=Region.getRegiones(), species=Ave.getSpecies(), errors=errors, form=request.form)
    
    return render_template("newsight.html", regiones=Region.getRegiones(), species=Ave.getSpecies(), errors={}, form={})

@app.route("/success")
def success():
    inf = request.args.get("inf")
    return render_template("success.html", inf=inf)

@app.route("/stats")
def stats():
    return render_template("stats.html")

if __name__ == "__main__":
    app.run(debug=True)
    
