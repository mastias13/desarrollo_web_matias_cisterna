import matplotlib.pyplot as plt
import numpy as np

meses = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
]

usuarios_activos = np.random.normal(250, 40, len(meses))
usuarios_activos = usuarios_activos.astype(int)

plt.figure(figsize=(10, 5))

plt.plot(meses, usuarios_activos, marker="o")

plt.xlabel("Mes")
plt.ylabel("Usuarios activos")
plt.title("Usuarios activos por mes")

plt.tight_layout()
plt.savefig("usuarios_activos.png", dpi=300)
plt.show()