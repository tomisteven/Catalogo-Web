import {
    ajax
} from './Ajax.js';

let $search = document.getElementById("search")

let $btn_buscar = document.getElementById("btn-buscar")

const $section = document.getElementById("searchs")
const $template = document.getElementById("template-search").content
const $fragment = document.createDocumentFragment()
const $btn_cerrar = document.getElementById("btn-cerrar")
const $btn_descripcion = document.getElementById("btn_descripcion")

//descripcion
const $template_descripcion = document.getElementById("template-descripcion").content
const $section_descripcion = document.getElementById("descripcion")

ajax({
    url: "./json/1.json",

    success: function (data) {
       
        console.log(data);
        //console.log(localStorage.getItem("wpFormSearch"));

        //guarda las coincidencias de los selectores y categorias


        let Catseleccionada = data.CategoriaUno.filter(item => item.nombre.toLowerCase().includes(localStorage.getItem("wpFormSearch").toLowerCase()) || item.codigo.toLowerCase().includes(localStorage.getItem("wpFormSearch").toLowerCase()))

        console.log(Catseleccionada)

        let max = Catseleccionada.length

        for (let i = 0; i < max; i++) {
            $template.querySelector(".ver").setAttribute("data-articulo", Catseleccionada[i].nombre)

            $template.querySelector(".titulo").textContent = Catseleccionada[i].nombre
            $template.querySelector(".precio").textContent = Catseleccionada[i].precio
            $template.querySelector(".imagen").src = Catseleccionada[i].img

            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
        }

        $section.appendChild($fragment)

        $btn_cerrar.addEventListener("click", function () {
            window.close()
            localStorage.removeItem("wpFormSearch")
        })

        //descripcion
        document.addEventListener("click", function (e) {
            if (e.target.matches("#btn_descripcion")) {
                $section_descripcion.innerHTML = ""
                e.preventDefault()
                let descSeleccionada = data.CategoriaUno.filter(item => item.nombre.toLowerCase().includes(e.target.getAttribute("data-articulo").toLowerCase()))

                descSeleccionada.forEach(function (item) {
                    $template_descripcion.querySelector(".titulo").textContent = item.nombre
                    $template_descripcion.querySelector(".imagen").src = item.img

                    $template_descripcion.querySelector(".descripcion").textContent = ` ${item.descripcion}` 
                    $template_descripcion.querySelector(".precio").textContent = item.precio
                    let $clone = document.importNode($template_descripcion, true);
                    $fragment.appendChild($clone);

                })
                $section_descripcion.appendChild($fragment)

            }
        })



    }

})