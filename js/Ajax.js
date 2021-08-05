export const ajax = (options) => {
    let {
      url,
      method,
      success,
      error,
      data
    } = options;
  
    //creamos nueva peticion
    const xhr = new XMLHttpRequest();
  
    //verificamos si el status es correcto
    xhr.addEventListener("readystatechange", e => {
      if (xhr.readyState !== 4) return;
  
      if (xhr.status >= 200 && xhr.status < 300) {
        let json = JSON.parse(xhr.responseText);
        success(json);
      } else {
        //mensaje de error si encuentra uno
        let message = xhr.statusText || "Ocurrió un error";
        error(`Error ${xhr.status}: ${message}`);
      }
    });
  
    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8"); //cabecera 
    xhr.send(JSON.stringify(data));
  
  }