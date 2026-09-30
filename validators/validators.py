import re
from werkzeug.security import check_password_hash
from datetime import datetime, timedelta

from PIL import Image
import magic

def validateRegex(str, regex, id, msg, error):
    if not re.match(regex, str):
        error[id] = msg
        return

def validateLength(str, minchars, maxchars, minwords, maxwords, id, error):
    if (len(str) < minchars or len(str) > maxchars):
        error[id] = f"Debe tener entre {minchars} y {maxchars} caracteres"
        return
    elif(len(str.strip().split())<minwords or len(str.strip().split())>maxwords):
        error[id] = f"Debe tener entre {minwords} y {maxwords} palabras"
        return

def validateSelection(sel, Model, id, error):
    if(sel == ""):
        error[id] = f"Selecciona un elemento válido de la lista"
        return
    if(Model.query.get(int(sel)) is None):
        error[id] = f"Selecciona un elemento válido de la lista"
        return

def unique(str, Field, Model, id, label, error):
    if (Model.query.filter(Field==str).first() is not None):
        error[id] = f"El {label} ya existe"
        return

def validateLogin(user, password, Model, Field, id, error):
    usr = Model.query.filter(
        Field == user
    ).first()
    if usr is None:
        error[id] = "Ingresa voluntario válido"
        return
    if not check_password_hash(usr.password, password):
        error[id] = "Nombre de usuario o contraseña incorrectos"
        return

def validateDateTime(date, time, dias, id1, id2, error):
    ahora = datetime.now()
    
    if (date==""):
        error[id1] = "Ingresa una fecha"
        return
    if (time == ""):
        error[id2] = "Ingresa una hora"
        return 
        
    
    fecha_hora = datetime.strptime(
        f"{date} {time}",
        "%Y-%m-%d %H:%M"
    )
    if fecha_hora > ahora:
        error[id1] = "La fecha y hora no pueden ser futuras"
        error[id2] = "La fecha y hora no pueden ser futuras"
        return
    if fecha_hora < ahora - timedelta(days=dias):
        error[id1] = "La fecha y hora deben estar dentro de los últimos 14 días"
        error[id2] = "La fecha y hora deben estar dentro de los últimos 14 días"
        return

def validateImage(img):
    try:
        Image.open(img).verify()
        
        img.seek(0)
        return True
    except:
        return False


def validateFiles(filelist, min, max, id, error):
    filecount = 0
    for file in filelist:
        if file.filename != "":
            filecount+=1
    if filecount < min or filecount>max:
        error[id] = f"Sube entre {min} y {max} archivos"
        return

    image = False
    for file in filelist:
        ALLOWED_TYPES = {
            "image/png",
            "image/jpeg",
            "video/mp4",
            "video/quicktime", # .mov
            "video/x-msvideo", # .avi
            "video/x-matroska" # .mkv
        }
        
        # Primera pasada
        if (not file.filename.lower().endswith((".mkv", ".png", ".jpg", ".mp4", ".mov", ".avi", ".jpeg"))):
            error[id] = f"Archivos permitidos: .mkv, .png, .jpg, .mp4, .mov, .avi, .jpeg"
            return
        elif (file.filename.endswith((".png", ".jpg", ".jpeg"))):
            # Pasada extra imagenes
            if(not validateImage(file)):
                error[id] = f"Imagen corrupta"
                return
            image = True
        
        mime = magic.from_buffer(
            file.read(2080),
            mime=True
        )
        file.seek(0)
        
        print(mime)
        # Segunda pasada
        if mime not in ALLOWED_TYPES:
            error[id] = f"Archivos permitidos: .mkv, .png, .jpg, .mp4, .mov, .avi, .jpeg"
            return

        

     
    if image == False:
        error[id] = f"Debe haber al menos una imagen"
        return

