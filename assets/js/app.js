
const marca = document.getElementById('marca');
const year = document.getElementById('year');
const preciomin = document.getElementById('preciomin');
const preciomax = document.getElementById('preciomax');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');

const resultado = document.getElementById('resultado');


const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    modelo:'',
    year:'',
    preciomin:'',
    preciomax:'',
    puertas:'',
    color:'',
    transmision:''
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);
    llenarSelectYear();
});

marca.addEventListener('change', (e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', (e)=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
preciomin.addEventListener('change', (e)=>{
    datosBusqueda.preciomin = parseInt(e.target.value);
    filtrarAuto();
});
preciomax.addEventListener('change', (e)=>{
    datosBusqueda.preciomax = parseInt(e.target.value);
    filtrarAuto();
});
puertas.addEventListener('change', (e)=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change', (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


function mostrarAutos(autos){
    limpiarRenderResult();
    let content = "";
    autos.forEach(auto => {
        content += `<div>${auto.marca}-${auto.modelo}-${auto.year}-${auto.puertas}-${auto.transmision}-${auto.precio}-${auto.color}</div><hr>`;        
    });
    renderResult(content);
}

function limpiarRenderResult(){
    resultado.innerHTML="";
}

function renderResult(contenido){    
    resultado.innerHTML=contenido;
}

function llenarSelectYear(){
    for (let index = max; index >= min; index--) {
        const opcion = document.createElement('option');
        opcion.value = index;
        opcion.textContent = index;
        year.appendChild(opcion);
        
    }
}

function filtrarAuto(){
    const result = autos.filter(filtarMarca).filter(filtarYear).filter(filtarPrecioMinimo).filter(filtarPrecioMaximo).filter(filtarPuertas).filter(filtarTransmision).filter(filtarColor);
    if (result.length) {
        mostrarAutos(result);
    }else{
        resultado.innerHTML=noResultado('danger','No hay coincidencias');
    }
    
    console.log(result);
}

function noResultado(tipo,mensaje){
    return `<div class="alert alert-dismissible alert-${tipo}">
                ${mensaje}
            </div>`;
}

function filtarMarca(auto){
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtarYear(auto){
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}
function filtarPrecioMinimo(auto){
    if (datosBusqueda.preciomin) {
        return auto.precio >= datosBusqueda.preciomin;
    }
    return auto;
}
function filtarPrecioMaximo(auto){
    if (datosBusqueda.preciomax) {
        return auto.precio <= datosBusqueda.preciomax;
    }
    return auto;
}
function filtarPuertas(auto){
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtarTransmision(auto){
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtarColor(auto){
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}