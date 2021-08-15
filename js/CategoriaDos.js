import { ajax } from "./Ajax.js";

//creamos fragmento 
const $fragment = document.createDocumentFragment();
//section
const $sectionProductos_2 = document.getElementById("section-productos-2");
//template
const $templateProducto_2 = document.getElementById("template-productos-2").content;



ajax({
    url: "./json/2.json",
    success: function (data) {
        //console.log(data);
        
        let maxLength = data.CategoriaDos.length
        

        for (let i = 0; i < maxLength; i++) {
            $templateProducto_2.querySelector(".titulo").textContent = data.CategoriaDos[i].nombre
            $templateProducto_2.querySelector(".imagen").src = data.CategoriaDos[i].img;
            

            let $clone = document.importNode($templateProducto_2, true);
            $fragment.appendChild($clone);
        }
        $sectionProductos_2.appendChild($fragment);


    }
})