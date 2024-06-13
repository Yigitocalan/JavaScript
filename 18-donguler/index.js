// let meyve=["armut","elma","karpuz","kavun","cilek"];

// for(let i = 0; i < meyve.length; i++){
//     console.log(meyve[i]);
// }

// for(let i=0; i<100; i=i + 2){

//     console.log(i);
// }
// let sayilar=[20,50,500];
// let toplam=0;
// for (let i=0; i<sayilar.length;i++){
//     console.log(toplam = toplam+sayilar[i]);
// }
//kisa yol
// let sayilar=[20,50,600,500];
// let toplam=0;

// for(let i in sayilar){
//     console.log(toplam +=sayilar[i]);
// }
//direkt sayilari toplama
// let sayilar=[20,50,600,500];
// let toplam=0;
// for(let index of sayilar){
//     console.log(toplam+=index);
// }


//object ile dongu alma

const users = [{
    "id":1,
    "name" : "yigit",
    "surname":"ocalan",
    "country":"Istanbul",
    "age":"22"
},
{
    "id":2,
    "name":"nur",
    "surname":"ocalan",
    "country":"Istanbul",
    "age":"22"
},
{
    "id":3,
    "name":"bedirhan",
    "surname":"ocalan",
    "country":"Istanbul",
    "age":"22"
},
]
for(let i=0;i<users.length;i++){
    console.log(users[i].id);

}

