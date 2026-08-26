const site = window.location.pathname;

// -INDEX-
if (site.endsWith("index.html") || site.endsWith("")){

    pic_displayer = document.getElementById("pic-displayer")

    pic_title = document.getElementById("pic-title")

    pic_desc = document.getElementById("pic-desc")

    const images = [
        ["./assets/img/image1.jpg", "Gorrión Cantor", "Imagen de Gorrión cantor, Patio interior y Pájaro. De uso gratuito."],
        ["./assets/img/image2.jpg", "Cóndor", "Imagen de Cóndor, Al y Colcacanon. De uso gratuito."],
        ["./assets/img/image3.jpg", "Gorrión", "Imagen de Gorrión, Pájaro y Pretil. De uso gratuito."],
        ["./assets/img/image4.jpg", "Chingolo (Zonotrichia capensis)", "El chingolo o copetón ( Zonotrichia capensis) es una especie de ave paseriforme neotropical de la familia Emberizidae. Es la única de esta distribución entre los mal llamados \"gorriones americanos\" del género Zonotrichia."],
    ];

    let index = 0;
    pic_displayer.src = images[index][0]
    pic_displayer.alt = images[index][1]
    pic_title.textContent = images[index][1]
    pic_desc.textContent = images[index][2]
    

    setInterval(() => {
        index = (index+1)%images.length;
        pic_displayer.src = images[index][0]
        pic_displayer.alt = images[index][1]
        pic_title.textContent = images[index][1]
        pic_desc.textContent = images[index][2]
    }, 4000)

}