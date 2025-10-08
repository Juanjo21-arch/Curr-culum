function canviNom(){
    let nom = prompt("¿COMO QUIERES LLAMARTE?")
    document.getElementById("nom").innerHTML = "NOM: "+nom;
}

function canviFoto(){
    let foto = prompt("¿QUE QUIERES SER?")
    document.getElementById("foto").src = foto

}

function canviFons(){

if(document.getElementById("foto").hidden == true){
   document.getElementById("foto").hidden == false
}else{
    document.getElementById("foto").hidden == true
}

}

function tradueix(){
let body = document.getElementsByTagName("body")[0]
body.style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;"
}

function harryPotter(){
document.getElementById("foto").style = "display: none"
}

function mezi(){
let angulo = 0;
  const imagen = document.getElementById("foto");

  function girar() {
    angulo += 2; // velocidad de rotación
    imagen.style.transform = `rotate(${angulo}deg)`;
    requestAnimationFrame(girar);
  }

  girar();
}

function mostrarMessi() {
    document.body.style.backgroundImage = "url('mezi.jpg')";
    document.body.style.backgroundSize = "cover";         
    document.body.style.backgroundPosition = "center";     
    document.body.style.backgroundAttachment = "fixed";    
    document.body.style.color = "white";                 
}
