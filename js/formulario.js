function validar(){
    if(document.formu.email1.value == document.formu.email2.value){
        almacenar();
    }
    else{
    alert("El email no es válido");
    return false;
    }
}
function almacenar(){
    localStorage.nombre=document.formu.nombre.value;
    localStorage.apellido=document.formu.apellidos.value;
    localStorage.email=document.formu.email1.value;
    localStorage.tipo="";
    var tipos=document.formu.tipo;
    for(i=0;i<tipos.length;i++){
        if(tipos[i].checked){
            localStorage.tipo+=tipos[i].value+",";
        }
    }
    
    return true;
}
if(typeof(Storage)!=="undefined"){
    alert("Nombre: "+localStorage.nombre+"\nApellido: "+localStorage.apellido+"\nEmail: "+localStorage.email+"\nOpciones: "+localStorage.tipo);
}