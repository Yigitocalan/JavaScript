// let costomers1=["emin",["monster" , "dell","casper",[10,20,30]]];


// console.log(`urun: ${costomers1[1][0]} fiyati: ${costomers1[1][3][0]}`);


let costomer1={
    "ad": "yigit",
    "soyad": "ocalan",
    "sehir": "istanbul",
    "yas": "22",
    "products": [
        "laptop","car", "phone"
    ]
}
let costomer2={
    "ad": "nur",
    "soyad": "kalan",
    "sehir": "istanbul",
    "yas": "25",
    "products":{
        "phone":"iphone6",
        "price":20
    }
}
let costomer3={
    "ad": "ahmet",
    "soyad": "oglubas",
    "sehir": "istanbul",
    "yas": "26",
}

let costomerss=[
    costomer1,
    costomer2,
    costomer3
]
let urunler=[
    {
        "urunadi":"huawei",
        "fiyat":10
    },
    {
        "urunadi":"apple",
        "fiyat":20
    },
    {
        "urunadi":"vestel",
        "fiyat":30
    },
]
console.log(urunler[1].urunadi);