const header = `
		<div class="title">
			<a style="all:unset; width:100%; display:flex; justify-content:center; margin:auto; align-items:center; height:100%; cursor:pointer;"href="./index.html">
			<img src="./assets/img/LOGO.png" alt="LogoTBP" class="mainlogo">
			<h1>THE BIRD LOG</h1>
			</a>
		</div>
		<nav class="navigation">
			<ul class="nav-container">
				<div class="nav-sub" id="left">
					<a href="./birds.html" class="page-button">
						<li class="nav-element">AVISTAMIENTOS</li>
					</a>
		
					<a href="./stats.html" class="page-button">
						<li class="nav-element">MÉTRICAS</li>
					</a>
		
				</div>
				
				<div class="nav-sub" id="right">
					<a href="./login.html" class="page-button">
						<li class="nav-element">INICIAR SESIÓN</li>
					</a>
				</div>

			</ul>
		</nav>
`

const footer = `
        <div class="RRSS">
            <h3>Somos una organizacion que se dedica a almacenar avistamientos de aves en todo Chile para análisis de datos</h3>
            <hr>
            <p>Nuestras redes sociales:</p>
            <a href="https://facebook.com" target="_blank"><img src="./assets/img/facebook.png" alt="" ></a>
            <a href="https://instagram.com" target="_blank"><img src="./assets/img/instagram.png" alt="" ></a>
            <a href="https://twitter.com" target="_blank"><img src="./assets/img/twitter.png" alt="" ></a>
            <a href="https://youtube.com" target="_blank"><img src="./assets/img/youtube.png" alt="" ></a>
            <p> 2026 The Bird Log™ </p>
        </div>
        <div class="contact">
            <p>Autor: Matías Cisterna Rocco</p>
            <p>Contacto: matias.cisterna.r@ug.uchile.cl</p>
            <p>FCFM, Universidad de Chile</p>

        </div>

`
document.addEventListener("DOMContentLoaded", () => {
    const hder = document.querySelector("header");
    hder.innerHTML = header;
    const fter = document.querySelector("footer")
    fter.innerHTML = footer;
    fter.classList.add("footer")
});

