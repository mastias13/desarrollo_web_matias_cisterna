function cargarGraficoLineas() {

    let xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "/api/avistamientos-por-dia",
        true
    );

    xhr.onload = function() {

        let respuesta =
            JSON.parse(xhr.responseText);

        let dias = [];
        let cantidades = [];

        for (let fila of respuesta) {
            dias.push(fila.dia);
            cantidades.push(fila.cantidad);
        }

        Highcharts.chart(
            'grafico-lineas',
            {
                title: {
                    text: 'Cantidad de avistamientos por día'
                },

                xAxis: {
                    categories: dias,
                    title: {
                        text: 'Día'
                    }
                },

                yAxis: {
                    title: {
                        text: 'Cantidad de avistamientos'
                    }
                },

                series: [{
                    name: 'Avistamientos',
                    data: cantidades
                }]
            }
        );
    };

    xhr.send();
}
function cargarGraficoTorta() {

    let xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "/api/avistamientos-por-tipo",
        true
    );

    xhr.onload = function() {

        let respuesta =
            JSON.parse(xhr.responseText);

        let datos = [];

        for (let fila of respuesta) {

            datos.push({
                name: fila.label,
                y: fila.data
            });
        }

        Highcharts.chart(
            'grafico-torta',
            {
                chart: {
                    type: 'pie'
                },

                title: {
                    text: 'Total de avistamientos por tipo de ave'
                },

                series: [{
                    name: 'Avistamientos',
                    data: datos
                }]
            }
        );
    };

    xhr.send();
}
function cargarGraficoBarras() {

    let xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "/api/voluntarios-por-comuna",
        true
    );

    xhr.onload = function() {

        let respuesta =
            JSON.parse(xhr.responseText);

        let comunas = [];
        let cantidades = [];

        for (let fila of respuesta) {

            comunas.push(
                fila.comuna
            );

            cantidades.push(
                fila.cantidad
            );
        }

        Highcharts.chart(
            'grafico-barras',
            {
                chart: {
                    type: 'column'
                },

                title: {
                    text: 'Voluntarios registrados por comuna'
                },

                xAxis: {
                    categories: comunas,
                    title: {
                        text: 'Comuna'
                    }
                },

                yAxis: {
                    title: {
                        text: 'Cantidad de voluntarios'
                    }
                },

                series: [{
                    name: 'Voluntarios',
                    data: cantidades
                }]
            }
        );
    };

    xhr.send();
}

document.addEventListener(
    "DOMContentLoaded",
    function() {

        cargarGraficoLineas();
        cargarGraficoTorta();
        cargarGraficoBarras();

    }
);
