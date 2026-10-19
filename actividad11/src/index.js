//Actividad 1 Funciones de declaracion
//Ejercicio A
console.log("Ejercicio A")
function saludar(){
    console.log("Hola")
}

saludar()

//Ejercicio B
console.log("Ejercicio B")
function saludarPersona(nombre){
    console.log("Hola " + nombre + ", Bienvenido")
}

saludarPersona("Jorge")

//Ejercicio C
console.log("Ejercicio C")
function esMayorDeEdad(edad){
    if(edad >= 18){
        return true
    }else{
        return false
    }
}

const resultado = esMayorDeEdad(20)
console.log(resultado)

//Actividad 2
//Ejercicio A
console.log("Ejercicio A")
const resultado2 = (edad) =>{
    if(edad >= 18){
        return true
    }else{
        return false
    }
}

console.log(resultado2(15))

//Ejercicio B
console.log("Ejercicio B")
const compararNumeros = (b) =>{
    for(let i = 0; i < 3; i++){
        if (i > b){
            console.log(`El número ${i} es mayor que ${b}`)
        }else{
            if (i < b){
                console.log(`El número ${b} es mayor que ${i}`)
            }
            else{
                console.log(`El número ${i} es igual que ${b}`)
            }
        }
}
}

console.log(compararNumeros(2))

//Actividad 3
console.log("Ejercicio A")
const operaciones = (c,d,cd)=>{
    if (typeof c === "number" && typeof d === "number") {
        cd(c, d);
    } else {
        console.log("Error: Ambos parámetros deben ser números.");
    }
}

const suma = (c,d)=>{
    console.log("El resultado de la suma es " + (c + d) )
}

const resta = (c,d)=>{
    console.log("El resultado de la resta es " + (c - d))
}

operaciones(12,2,suma)
operaciones(12,2,resta)