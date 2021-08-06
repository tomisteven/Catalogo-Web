import {ajax} from './ajax.js';

let $search = document.getElementById("search")

let $btn_buscar = document.getElementById("btn-buscar")

ajax({
    url: "./json/1.json",
    
    success: function(data) {
            $btn_buscar.addEventListener("click", function() {
                localStorage.setItem("wpFormSearch", $search.value);
            })
        }
    })
