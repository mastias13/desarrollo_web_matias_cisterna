export default function setComunas(regionId){
    const comunaSelect = document.getElementById("comuna");
    comunaSelect.replaceChildren();
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Selecciona una comuna";
    comunaSelect.appendChild(option);
    const aidi = Number(regionId);
    const region = regiones.find(
        r => r.id === aidi
    );
    if (!region) {
        return;
    }
    for (const comuna of region.comunas) {
        const option = document.createElement("option");
        option.value = comuna.id;
        option.textContent = comuna.nombre;
        comunaSelect.appendChild(option);
    }
}
