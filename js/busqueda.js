import {
    ajax
} from './ajax.js';

let $search = document.getElementById("search")

let $btn_buscar = document.getElementById("btn-buscar")
let $btn_verProducto = document.getElementById("btn-verProducto")
ajax({
    url: "./json/1.json",

    success: function (data) {
        $btn_buscar.addEventListener("click", function () {
            localStorage.setItem("wpFormSearch", $search.value);
        })

        document.addEventListener("click", function (e) {
            if (e.target.matches("#btn-verProducto")) {
                let producto = e.target.getAttribute("data-producto")
                let productSelec = data.CategoriaUno.filter(product => product.nombre.toLowerCase().includes(producto.toLowerCase()))

                //desabilitamos las categorias y los titulos
                const _sectionProductos1 = document.getElementById("section-productos").style.display = "none"
                const _sectionProductos2 = document.getElementById("section-productos-2").style.display = "none"
                const _tituloCategoria1 = document.getElementById("titulo-categoriaUno").style.display = "none"
                const _tituloCategoria2 = document.getElementById("titulo-categoriaDos").style.display = "none"

                const $desc = document.querySelector(".desc").innerHTML =
                    `
                    <section id="descripcion">
                    <a href="" class="Volverlistado"><i class="fas fa-backward"></i> Volver al listado </a>
                            <article id="article-descripcion" class="article-descripcion">
                                <div class="contenedor">
                                    <div class="imagen-descripcion">
                                        <img class="imagen" src="${productSelec[0].img}" alt="">
                                    </div>
                                    <div class="descripcion-articulos">
                                        <h1 class="titulo">${productSelec[0].nombre}</h1>
                                        <p class="descripcion">${productSelec[0].descripcion}</p>
                                        <h2 class="precio">${productSelec[0].precio}</h2>
                                    </div>
                                </div>
                            </article>
                        
                    </section>
                    
                    `

            }
        })



    }
})