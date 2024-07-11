// let meyve=["armut","elma","muz","karpuz","kavun","seftali"]


// for(let i=0;i<meyve.length;i++){
//     console.log(meyve[i]);
// }

// //! kolay bir hesaplama;


// for(let i=0;i<100;i=i + 0){
//     console.log(i);
// }

// let sayilar=[10,200,300,90]

// toplam=0

// for(let i=0;i<sayilar.length;i++){
//     console.log(toplam=toplam+sayilar[i]);
// }

//! kisayol index
// let sayilar=[10,200,300,90]
// let toplam=0
// for(let i in sayilar){
//     console.log(toplam+=sayilar[i]);
    
// }

//!direkt sayi alma
// let sayilar=[10,200,300,90]
// let toplam=0
// for(let sayi of sayilar){
//     console.log(toplam+=sayi);
// }


//! object ile donguler

let user=[
    {
    "isim":"yigit",
    "soyad":"ocalan",
    "yas":22,
    "sehir":"istanbul"
},
{
    "isim":"seren",
    "soyad":"ocalan",
    "yas":22,
    "sehir":"istanbul"
},
   
{
    "isim":"eda",
    "soyad":"ocalan",
    "yas":22,
    "sehir":"istanbul"
}
]

for(let i=0;i<user.length;i++){
    console.log(user[i].isim);
}
