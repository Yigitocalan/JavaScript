/*1-mert demir
 dogum tarihi:2001
bilgisayar notlari:100,90,10


 2-eylul demir
dogum tarihi:2002
 bilgisayar notlari:60,30,50


gecer not:45

program sartlari:
1-ogrencinin yaslarini hesaplayiniz TAMAMDIR
2-ogrencinin ders ortlamasini hesaplayiniz
3-ogrencilerin dersten kalip kalmadigini heaplayin



*/

let suankiYil=new Date().getFullYear();
let gecmeNotu=45;
let ogr1='mert demir';
let ogryas1=2001;
// console.log(suankiYil - ogryas1);
let ogr1dersnotu1=100;
let ogr1dersnotu2=90;
let ogr1dersnotu3=10; 
let ogr1dersnotuort= (ogr1dersnotu1 + ogr1dersnotu2 + ogr1dersnotu3) / 3;
let ogr1dersdurum = ogr1dersnotuort > gecmeNotu;
console.log(ogr1dersdurum);



let ogr2='eylul demir';
let ogryas2=2002;

let ogr2dersnotu1=60;
let ogr2dersnotu2=30;
let ogr2dersnotu3=10; 
let ogr2dersnotuort= (ogr2dersnotu1 + ogr2dersnotu2 + ogr2dersnotu3) / 3;
console.log(parseInt(ogr2dersnotuort));//burasi kusuratli olsun. 33.33
let ogr2dersdurum = ogr2dersnotuort > gecmeNotu;
console.log(ogr2dersdurum);
// console.log(suankiYil - ogryas2);

console.log("1. ogrencinin gecme durumu: ", ogr1dersdurum);
console.log("2. ogrencinin gecme durumu: ", ogr2dersdurum);