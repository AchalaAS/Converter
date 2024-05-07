// Temprature converter
// Fahrenheit to other
function fun1(value) {
  document.getElementById("id1").innerHTML =(value-32)/1.8;
}
function fun2(value) {
  document.getElementById("id2").innerHTML = ((value-32)/1.8)+273.15;
}

// Celsius to other
function fun3(value) {
  document.getElementById("id3").innerHTML = (value*1.8)+32;
}
function fun4(value) {
  document.getElementById("id4").innerHTML = value+273.15;
}

// Kelvin to other
function fun5(value) {
  document.getElementById("id5").innerHTML =((value-273.15)*1.8)+32;
}
function fun6(value) {
  document.getElementById("id6").innerHTML = value-273.15;
}
