let costumer1={
    "isim":"yigit",
    "soyisim":"ocalan",
    "yas":22,
    "sehir":"istanbul",
    "products":{
        "phone":"apple",
        "price":98.00
    }
}
let costumer2={
    "isim":"nur",
    "soyisim":"ocalan",
    "yas":22,
    "sehir":"istanbul",
}
let costumer3={
    "isim":"idil",
    "soyisim":"ocalan",
    "yas":22,
    "sehir":"istanbul",
}
let customers={
    costumer1,
    costumer2,
    costumer3,
}
let urunler=[
    {
        "id":"1",
        "urun":"apple",
        "fiyati":25,
    },
    {
        "id":"2",
        "urun":"huawei",
        "fiyati":25,
    },
    {
        "id":"3",
        "urun":"xioami",
        "fiyati":25,
    }
]

console.log(urunler[0].urun);
//objelerde digerlerine bak
//! object ve dizilerin arasindaki fark:Dizi de loga tek tek oldugu konumun yerini yazarken object te ise loga atadigimiz karakterden sonra . koyup yazdirmaktan ibaret
