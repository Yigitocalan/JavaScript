// let kullanici="global scopes: emin";

// function isimYazdir(){ //fonksiyon  blogu icinde scope
//     var kullanici="function scope nur";
//     console.log(kullanici);
// }

// if(true){
// let kullanici="yasin";
// console.log(kullanici);
// }//if blogu icinde scope

// console.log(kullanici);
// isimYazdir()

//!Fonksiyonlar kendi scope alanlarini olusturur bu yuzden yazdirdigimiz zaman fonksiyon disindaki atadigimiz seyleri icine almaz ve degistirmez boylelikle yazdirma isleminde sorun olmaz.



//!Tekrar



var kullanici="global scope: emin";

function isim(){
    var kullanici="fonksiyon scope: nur"
    console.log(kullanici);
}

if(true){
    let kullanici="yasin";
    console.log(kullanici);
}
//! Var ile if blogu olusmaz cunku global olarak atadigimiz seyleri icindeki ile degistirir ve icindeki yazdigimiz seyleri atayarak cikartir.boylelikle diger atanani bozar.
//!let ve const ile block ici scope olusumu saglanabilir.

console.log(kullanici);
isim()