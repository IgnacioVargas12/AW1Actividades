//Actividad 1: Condicionales
//Ejercicio A
const edad = 18

if(edad >= 18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}

//Ejercicio B
const numero = 7

if((numero % 2) == 0){
    console.log("El número " + numero + " es par")
} else{
    console.log("El número " + numero + " es impar")
}

//Ejercicio C
const nota = 8
if(nota >= 7){
    console.log("Excelente")
}else if (nota < 4){
    console.log("Aprobado")
}else{
    console.log("Regular")
}

//Actividad 2: Bucles
//Ejercicio A
for (let i = 1; i < 11; i++){
    console.log(i)
}

//Ejercicio B
for (let i = 11; i > 1; i = i-1){
    console.log(i)
}

//Ejercicio C y D
let numero2 = 1
for (let i = 0; i < 20; i++){
    if((numero2 % 2) == 0){
        console.log("El número " + numero2 + " es par")
    } else{
        console.log("El número " + numero2 + " es impar")
    }
    numero2++
}