import {ajax} from './ajax.js';

let $search = document.getElementById("search")

let $btn_buscar = document.getElementById("btn-buscar")

ajax({
    url: "./json/1.json",
    
    success: function(data) {
        console.log(data);

        
         

            $btn_buscar.addEventListener("click", function() {
    
                localStorage.setItem("wpFormSearch", $search.value);
    
                console.log(localStorage.getItem("wpFormSearch"));
    
                /* function findCategorias(cat) {
                    return cat.codigo == localStorage.getItem("wpFormSearch")
                  }
                  //guarda las coincidencias de los selectores y categorias
                  let Catseleccionada = data.CategoriaUno.filter(findCategorias)
                  console.log(Catseleccionada) */
    
                  
            })
        }
        

    })
