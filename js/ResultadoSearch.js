import {
    ajax
} from './Ajax.js';

let $search = document.getElementById("search")

let $btn_buscar = document.getElementById("btn-buscar")

const $section = document.getElementById("searchs")
const $template = document.getElementById("template-search").content
const $fragment = document.createDocumentFragment()

ajax({
    url: "./json/1.json",

    success: function (data) {
        console.log(data);
        console.log(localStorage.getItem("wpFormSearch"));

        function findCategorias(cat) {
            return cat.codigo == localStorage.getItem("wpFormSearch")
        }
        //guarda las coincidencias de los selectores y categorias
        let Catseleccionada = data.CategoriaUno.filter(findCategorias)

        console.log(Catseleccionada.length)
        let max = Catseleccionada.length

        for (let i = 0; i < max; i++) {

            $template.querySelector(".titulo").textContent = Catseleccionada[i].nombre
            $template.querySelector(".imagen").src = Catseleccionada[i].img
            $template.querySelector(".codigo").textContent = Catseleccionada[i].codigo
            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
        }

        $section.appendChild($fragment)




    }

})