function calcularEdad(){
    let edad = parseInt(document.getElementById("edad").value); 
    let nombre = document.getElementById("nombre").value;

    if(Number.isInteger(edad)){
        if(edad >= 18) {
            document.getElementById("mensaje").innerHTML = nombre + " usted es mayor de edad";
        } else {
            document.getElementById("mensaje").innerHTML = nombre + " usted es menor de edad";
        }
    }else{
        console.log("La edad no es numerica");
    }
}

function calcularIVA(valor){
    let resultado;
    resultado = valor * 0.16;
    return resultado;
}
