
let cambiarimg=document.getElementById("Imagenes");
let imagenchange = document.querySelector("#cambiar");
let nombrechange = document.querySelector("#nombre");
let descripcionchange = document.querySelector("#descripcion");
let volver = document.querySelector("#btn_volver");
let enviar = document.querySelector("#enviar");
import {descripcionArray} from "./descripcion.js";




let imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src ="/Imagenes/bruja.png";
imgArray[1] = new Image();
imgArray[1].src ="/Imagenes/arquero.png";
imgArray[2] = new Image();
imgArray[2].src ="/Imagenes/los-pillos.png";
imgArray[3] = new Image();
imgArray[3].src ="/Imagenes/principe.png";
imgArray[4] = new Image();
imgArray[4].src ="/Imagenes/goblin.webp";
imgArray[5] = new Image();
imgArray[5].src ="/Imagenes/montaPuercos.webp";
imgArray[6] = new Image();
imgArray[6].src ="/Imagenes/Pekka.webp";
imgArray[7] = new Image();
imgArray[7].src ="/Imagenes/Miner_info.webp";
imgArray[8] = new Image();
imgArray[8].src ="/Imagenes/caballero.png";
imgArray[9] = new Image();
imgArray[9].src ="/Imagenes/golem.png";




let nombreper = JSON.parse(localStorage.Nombres);


let contador=0;


let btnnext=document.querySelector("#next");

btnnext.addEventListener("click", function(e){
    let cambiarimg=document.getElementById("Imagenes");
    btnprev.style.backgroundColor="rgba(18, 46, 205, 0.83)";
    btnprev.style.cursor="pointer"
    contador++;
    if(contador<10){

        cambiarimg.setAttribute("src",imgArray[contador].src);
        enviar.setAttribute("value", nombreper[contador]);
        
        nombrechange.textContent=descripcionArray[contador].nombre;
        descripcionchange.textContent = descripcionArray[contador].descripcion;
        imagenchange.setAttribute("src", descripcionArray[contador].imagen);
    }else{
        contador=9;
        btnnext.style.cursor="default"
        btnnext.style.backgroundColor="black";
    }

});
let btnprev=document.querySelector("#prev");

btnprev.addEventListener("click", function(e){
    let cambiarimg=document.getElementById("Imagenes");
    btnnext.style.backgroundColor="rgba(18, 46, 205, 0.83)";
    btnnext.style.cursor="pointer"
    contador--;
    if(contador>0){
        
        cambiarimg.setAttribute("src",imgArray[contador-1].src);
        enviar.setAttribute("value", nombreper[contador-1]);
        
        nombrechange.textContent=descripcionArray[contador-1].nombre;
        descripcionchange.textContent = descripcionArray[contador-1].descripcion;
        imagenchange.setAttribute("src", descripcionArray[contador-1].imagen);

    }else{
        contador=0;
        btnprev.style.cursor="default"
        btnprev.style.backgroundColor="black";
    }

});





volver.addEventListener("click", function(){
    let pagin1 = document.getElementById("container_p");
    let pagin2 = document.getElementById("container_2");

    pagin2.style.visibility="hidden";
    pagin1.style.visibility="visible";

    
});
enviar.addEventListener("click", function(){
    let pagin1 = document.getElementById("container_p");
    let pagin2 = document.getElementById("container_2");

    pagin1.style.visibility="hidden";
    pagin2.style.visibility="visible";
      
});





