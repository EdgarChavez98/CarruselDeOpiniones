const sujeto1 = new Sujeto(
    "https://karlacsphotography.com/wp-content/uploads/2020/03/MG_3442_2.jpg",
    "Martha",
    "Web Developer",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maiores, provident facere sint quae dolorum totam ex molestias nihil aliquid laborum accusantium nulla, blanditiis et vero! Necessitatibus quod aut sed"
);

const sujeto2 = new Sujeto(
    "https://i.pinimg.com/736x/74/f7/7c/74f77c0410f3aa6be79bda7976e0ed8e.jpg",
    "Richard",
    "Maestro",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maiores, provident facere sint quae dolorum totam ex molestias nihil aliquid laborum accusantium nulla, blanditiis et vero! Necessitatibus quod aut sed"
);

const sujeto3 = new Sujeto(
    "https://4.bp.blogspot.com/-uxFA04l-wDA/WQo3YQ-QAtI/AAAAAAAAAFw/FIKmdIaezB0CXjV1pXZd782fOXlLoK0KwCLcB/s1600/retrato1.jpg",
    "Arturo",
    "Basquetbolista",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maiores, provident facere sint quae dolorum totam ex molestias nihil aliquid laborum accusantium nulla, blanditiis et vero! Necessitatibus quod aut sed"
);

const sujeto4 = new Sujeto(
    "https://media.v2.siweb.es/uploaded_thumb_seo/75ced0231b30d5bbba39592fef39e64d/fotografia_curriculum_linkedin_corporativa_madrid_005.jpg",
    "Daniel",
    "Chef",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maiores, provident facere sint quae dolorum totam ex molestias nihil aliquid laborum accusantium nulla, blanditiis et vero! Necessitatibus quod aut sed"
);

const datos = [sujeto1, sujeto2, sujeto3, sujeto4];
let cont = 0;
const imagen = document.getElementById("imagen");
const nombreHtml = document.getElementById("nombre");
const profesionHtml = document.getElementById("profesion");
const opinionHtml = document.getElementById("opinion");

function cargarDatos(){
    imagen.src = sujeto1.foto;
    nombreHtml.innerHTML = sujeto1.nombre;
    profesionHtml.innerHTML = sujeto1.profesion;
    opinionHtml.innerHTML = sujeto1.opinion;
    console.log(datos.length);
}

function cargarAnterior(){
    cont --;
    if(cont < 0){
        cont = datos.length - 1;
        cargarContenido(cont);
    }
    cargarContenido(cont);
}

function cargarSiguiente(){
    cont ++;
    if(cont < datos.length){
        cargarContenido(cont);
    }else{
        cont = 0;
        cargarContenido(cont);
    }
}

function cargarContenido(i){
    imagen.src = datos[i].foto;
    nombreHtml.innerHTML = datos[i].nombre;
    profesionHtml.innerHTML = datos[i].profesion;
    opinionHtml.innerHTML = datos[i].opinion;
}

function aleatorio(){
    cont = Math.floor(Math.random() * (datos.length - 0));
    cargarContenido(cont);
}