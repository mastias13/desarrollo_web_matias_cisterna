const header = `
		<a style="all:unset; width:100%; display:flex; justify-content:center; margin:auto; align-items:center; height:100%; cursor:pointer;"href="./index.html">
        <img src="./assets/img/LOGO.png" alt="LogoTBP" class="mainlogo">
		<h1>THE BIRD LOG</h1>
        </a>
        `

const nav = `
		<ul class="nav-container">
			<div class="nav-sub" id="left">
				<a href="./birds.html" class="page-button">
					<li class="nav-element">AVISTAMIENTOS</li>
				</a>
	
				<a href="./stats.html" class="page-button">
					<li class="nav-element">MÉTRICAS</li>
				</a>
	
				
				<a href="./about.html" class="page-button">
					<li class="nav-element">SOBRE NOSOTROS</li>
				</a>
			</div>
			
			<div class="nav-sub" id="right">
				<a href="./sight.html" class="page-button">
					<li class="nav-element">MIS AVISTAMIENTOS</li>
				</a>
				<a href="./login.html" class="page-button">
					<li class="nav-element">INICIAR SESIÓN</li>
				</a>
			</div>

		</ul>
`

const footer = `
		<h1>MYFOOTER</h1>
`
document.addEventListener("DOMContentLoaded", () => {
    const hder = document.querySelector("header");
    hder.innerHTML = header;
    hder.classList.add("title");
    const nv = document.querySelector("nav");
    nv.innerHTML = nav;
    nv.classList.add("navigation");
    const fter = document.querySelector("footer")
    fter.innerHTML = footer;
    fter.classList.add("footer")
});