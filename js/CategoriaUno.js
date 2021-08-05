import { ajax } from "./Ajax.js";

//creamos fragmento 
const $fragment = document.createDocumentFragment();
//section
const $sectionProductos = document.getElementById("section-productos");
const $sectionProductoSeleccionado = document.getElementById("section-producto-selecionado");
//template
const $templateProducto = document.getElementById("template-productos").content;


ajax({
    url: "./json/1.json",
    success: function (data) {
        //console.log(data);


        let maxLength = data.CategoriaUno.length
        

        for (let i = 0; i < maxLength; i++) {
            $templateProducto.querySelector(".titulo").textContent = data.CategoriaUno[i].nombre
            $templateProducto.querySelector(".imagen").src = data.CategoriaUno[i].img;
            $templateProducto.querySelector(".codigo").textContent = data.CategoriaUno[i].codigo;

            let $clone = document.importNode($templateProducto, true);
            $fragment.appendChild($clone);
        }
        $sectionProductos.appendChild($fragment);
        


    },
    error: (error) =>{
        console.log(error);
    }

    
})