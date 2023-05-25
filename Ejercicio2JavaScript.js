const nacimiento = new Date(1992, 5, 26).toLocaleDateString();
const desarrollador = true;
const miLibro = {
    titulo: "El pianista",
    author: "Wladyllaw Szpilman",
    anio: "1946",
    url: "https://es.wikipedia.org/wiki/El_pianista"
}

const arrayDatos = ["Cristina", 30, desarrollador, nacimiento, miLibro.titulo];


console.log(arrayDatos);