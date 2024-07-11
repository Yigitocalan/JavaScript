
//!kolay fonks toplamasi
//  function sayitoplami(sayi1,sayi2){
//    let toplam=sayi1+sayi2;
//     console.log(toplam);
//  }

//  sayitoplami(10,20);
//  sayitoplami(40,60);
 //belirli bir islemi yapmak icin tasarlanmis kod blogudur.


 //!gelismis fonksiyon 
//  function SayiToplami(...sayilar){
//    let toplam=0;
//    for(let sayi of sayilar)
//    console.log(toplam+=sayi);
//  }
//  SayiToplami(10,20,30,50,90)


//!yas hesaplama

// function yasHesaplama(dogumyili){
//    let yil=new Date().getFullYear()
//    console.log(yil-dogumyili);
// }
// yasHesaplama(2001)
// yasHesaplama(1900)
// yasHesaplama(2010)
// yasHesaplama(2006)

//!return hesaplama

function yasHesaplama(dogumTarihi){

return new Date().getFullYear()
}
const hesapla=yasHesaplama(1990);
console.log(hesapla);

// son yazilani geriye donderme kavrami var bunu da return kavrami ile yapariz eger return yazmazsak undefined yazar returnun mantigi sadece terminalde sonuc olarak  bir tane sey gondermek istiyorsan gondermek istedigin seyin basina return yazacaksin