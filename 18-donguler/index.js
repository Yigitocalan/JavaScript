/*
//!KOLAY MEYVE ORNEGI

let meyve=["muz","elma","armut","karpuz","kavun"]

for(let i=0;i<meyve.length;i++){
    console.log(meyve[i]);
}
*/
/*
//!KOLAY TOPLAMA ORNEGI
let sayilar=[100,200,300,400,50,50]
let toplam=0;

for(let i=0;i<sayilar.length;i++){
    console.log(toplam=toplam+sayilar[i]);
}

for(let i=0;i<=100;i++){
    console.log(i);
}

*/
//!KISA YOL INDEX in demek sayilar dizisinin icerisinden demek in dersek indexe gore alir
// let sayilar=[100,200,300,400,50,50]
// let toplam=0;
// for (let i in sayilar){
//     console.log(toplam+=sayilar[i]);
// }
//!direkt sayilar alma
// let sayilar=[100,200,300,400,50,50]
// let toplam=0;
// for(let sayi of sayilar){
//     console.log(toplam+=sayi);
// }

//!object ile dongu

// const user={
//     "name":"yigit",
//     "surname":"ocalan",
//     "age":22,
//     "contry":"istanbul"
// }
// for(let key in user){
//     console.log(user[key]);
// }

//birden fazla kullanici
const user=[
    {
        "id":"1",
    "name":"yigit",
    "surname":"ocalan",
    "age":22,
    "contry":"istanbul"
},
{
    "id":"1",
    "name":"nur",
    "surname":"ocalan",
    "age":22,
    "contry":"istanbul"
},
{
    "id":"1",
    "name":"bedirhan",
    "surname":"ocalan",
    "age":22,
    "contry":"istanbul"
}
]
// for(let i=0;i<user.length;i++)
// console.log(user[i].contry);
//birden fazla kullanici yazacaksak array seklinde olusturmaliyiz...!
// burda var yazmamiza ragmen neden aynisi (let ) ile ayni olani dondu
