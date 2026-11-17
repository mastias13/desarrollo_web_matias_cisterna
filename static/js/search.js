function highlight(
    text,
    pattern
) {

    if (!pattern) {
        return text;
    }

    const regex =
        new RegExp(
            `(${pattern})`,
            "ig"
        );

    return text.replace(
        regex,
        "<mark>$1</mark>"
    );
}
function mostrarResultados(
    results,
    pattern
) {

    resultsContainer.innerHTML = "";

    if(results.length === 0) {

        resultsContainer.innerHTML =
            "<p>No se encontraron resultados</p>";

        return;
    }

    results.forEach(item => {

        let nota =
            item.nota === -1 ||
            item.nota === null
            ? "-"
            : item.nota;

        const div =
            document.createElement("div");

        div.classList.add("search-result");

        div.innerHTML = `
        <a class="search-item-element" href="http://localhost:5000/birds?selected=${item.id}">
            <h3>${highlight(item.ave, pattern)}</h3>

            <p>
                Voluntario:
                ${highlight(
                    item.voluntario,
                    pattern
                )}
            </p>

            <p>
                Comuna:
                ${highlight(
                    item.comuna,
                    pattern
                )}
            </p>

            <p>
                Fecha:
                ${item.fecha}
            </p>

            <p>
                Nota:
                ${nota}
            </p>
        </a>`;

        resultsContainer.appendChild(div);
    });

}
const searchInput =
    document.getElementById("search-input");

const resultsContainer =
    document.getElementById("search-results");

searchInput.addEventListener(
    "input",
    searchAvistamientos
);

function searchAvistamientos() {

    const text = searchInput.value;

    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        `http://localhost:8080/api/search?q=${encodeURIComponent(text)}`
    );

    xhr.onreadystatechange = function () {

        if (
            xhr.readyState === 4 &&
            xhr.status === 200
        ) {

            const results =
                JSON.parse(xhr.responseText);

            mostrarResultados(
                results,
                text
            );
        }

    };

    xhr.send();
}

