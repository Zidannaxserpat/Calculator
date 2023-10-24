// Masukin operatornya hehe....
let operator = prompt("Masukkan operator EX='+', '-', '', '/', '*', '%':");

// Memasukkan angka pertama
let angka1 = parseFloat(prompt("Masukkan angka pertama:"));
// Memasukkan angka ke 2
let angka2 = parseFloat(prompt("Masukkan angka kedua:"));


let hasil;

// Mulainya di dieu
if(operator == "+"){
    hasil = angka1 + angka2;
}else if(operator === "-"){
    hasil = angka1 - angka2;
}else if(operator === "*"){
    hasil = angka1 * angka2;
}else if(operator === "/"){
    if(angka1 === 0 ){
        hasil = "Tidak dapat membagi angka nol yaa gesss :)";
    }else if(angka2 === 0){
        hasil = "Tidak dapat membagi angka nol yaa gesss );";
    }else{
        hasil = angka1 / angka2;
    }
}else if(operator === "**"){
    hasil = angka1 ** angka2;
}else if(operator === "%"){
    hasil = angka1 % angka2;
}else{
    if(operator !== "+" || "-" || "*" || "/" || "**" || "%"){
        hasil = "Yang bener dong masukkin operatornya!!!";
    }
}

document.writeln(`hasil: ${hasil}`);