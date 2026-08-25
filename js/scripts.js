const site = window.location.pathname;

// -INDEX-
if (site.endsWith("index.html")){

    pic_displayer = document.getElementById("pic-displayer")

    pic_title = document.getElementById("pic-title")

    pic_desc = document.getElementById("pic-desc")

    const images = [
        ["./assets/img/image1.jpg", "Imagen 1", "Desc img 4"],
        ["./assets/img/image2.jpg", "Imagen 2", "Desc img 4"],
        ["./assets/img/image3.jpg", "Imagen 3", "Desc img 4"],
        ["./assets/img/image4.jpg", "Imagen 4", "Desc img 4"],
    ];

    let index = 0;

    setInterval(() => {
        index = (index+1)%images.length;
        pic_displayer.src = images[index][0]
        pic_displayer.alt = images[index][1]
        pic_title.textContent = images[index][1]
        pic_desc.textContent = images[index][2]
    }, 4000)


} 