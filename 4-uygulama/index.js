 let suankiYil=new Date().getFullYear();
 let gecmeNotu=45;

let ogr1="yigit ocalan";
let ogrdgmyili1=2001;
let ogryas1=suankiYil - ogrdgmyili1;
let ogr1dersnotu1=100;
let ogr1dersnotu2=90;
let ogr1dersnotu3=60;
let ogr1dersort=(ogr1dersnotu1 + ogr1dersnotu2  + ogr1dersnotu3) /3;
let ogrdurum1=ogr1dersort > gecmeNotu;
let ogr2="aleyna ocalan";
let ogrdgmyili2=2005;
let ogryas2=suankiYil - ogrdgmyili2;
let ogr2dersnotu1=60;
let ogr2dersnotu2=10;
let ogr2dersnotu3=40;
let ogr2dersort=(ogr2dersnotu1 + ogr2dersnotu2  + ogr2dersnotu3) /3;
let ogrderssonucu=36.666666;
let ogrdurum2=ogr2dersort > gecmeNotu;

console.log("birinci ogrenci gecme notu: ", ogrdurum1);
//sonucu number olmayan birseye parseint vs yazarak ondalikli sayidan cikartamazsin dikkat!!!!
console.log("ikinci ogrenci gecme notu: " , parseInt(ogrderssonucu));
