// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}

/*areaalturatriangulo 
function areaalturatriangulo (lado1,lado2,base)
{
  console.log ("Altura:  hipotenusa = raiz(lado1 al cuadrado mas lado2 al cuadrado)")
  if (lado1 != lado2){ return 0}
  else {
    const h = Math.sqrt(lado1**2 - lado2**2);
    return h;  
  }
}*/
function areaalturatriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      return 0;
  } else {
      const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
      const trianguloPequenoLadoBase = trianguloGrandeLadoA;

      const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
      const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

      const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

      const trianguloGrandeAltura = trianguloPequenoLadoA;
      return trianguloGrandeAltura;
  }
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// ); 

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  lado1 = parseInt(lado1);
  lado2 = parseInt(lado2);
  base= parseInt(base);


    return  lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
//Cuadradao
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


//Triangulo
function calcularPerimetroTriangulo(){
  var lad1;
  var lad2;
  const input = document.getElementById("InputTrianguloL1");
  lad1 = input.value;
  const input2 = document.getElementById("InputTrianguloL2");
  lad2 = input2.value;
  const input3 = document.getElementById("InputTrianguloB");
  const base = input3.value;
  const perimetroT = perimetroTriangulo(lad1,lad2,base);
  alert (perimetroT);
}

function calcularAreaTriangulo() {
  var lad1;
  var lad2;
  const input = document.getElementById("InputTrianguloL1");
  lad1 = input.value;
  const input2 = document.getElementById("InputTrianguloL2");
  lad2 = input2.value;
  const input3 = document.getElementById("InputTrianguloB");
  const base = input3.value;
  

  const altura = areaalturatriangulo (lad1,lad2,base);
  if (altura == 0 ) { alert ("Loa lados deben ser iguales")}
  else{
  const area = areaTriangulo(base ,altura);
  alert(area);}
}


//Circulo

