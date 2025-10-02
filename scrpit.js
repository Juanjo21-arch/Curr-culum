function canviNom(){
    let nom = prompt("¿COMO QUIERES LLAMARTE?")
    document.getElementById("nom").innerHTML = "NOM: "+nom;
}

function canviFoto(){
    let foto = prompt("¿QUE QUIERES SER?")
    document.getElementById("foto").src = foto

}

function harryPotter(){

if(document.getElementById("foto").hidden == true){
   document.getElementById("foto").hidden == false
}else{
    document.getElementById("foto").hidden == true
}


}