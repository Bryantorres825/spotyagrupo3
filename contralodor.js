//consumo del servicio de spotify para
//traer canciones de un artista

//1.definir la url del servicio
let url="https://api.spotify.com/v1/artists/53KTldaJ8tHSkYU3nigfwP/top-tracks?country=US";

//2. definir el token o permiso de acceso
let token="Bearer BQDJPzmQpTjfQ2RTFWRXYcRAoyVdphmm23yClHDQHi7f3fwDBhM_CcVdwNf3RmfgYSFNhhmukhjGmHavP2CKzpLUcHnpnErijBW2HiDT5DN3buxcxQyv1T9vefPL3hCMtlehzq-H8rySxQRX85mB47hRb7COX80";

//3. definir objeto AJAX
let objetoAJAX= new XMLHttpRequest();

//4. abrir la conexion 
objetoAJAX.open('GET',url,true);

//5. crear encabazado de conexion
objetoAJAX.setRequestHeader('Authorization',token);

//6. cargamos los datos del servio.
objetoAJAX.onload = function() {
    let respuesta=(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks);
}

//7. enviamos la peticion
objetoAJAX.send();