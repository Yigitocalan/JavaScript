const username = "yigit ocalan";
const age= 22;
let result;
result = 22;
//!number ile farki nedir 
result=Number("22");//number fonksiyonu tam ve ondalikli sayiliri tam olarak donusturur
result= parseInt("22");//parseint ise fonsksiyonun sadece tam sayi kismini donusturur ve ondalikli sayiyi yok sayar
//Ayrıca Number fonksiyonu stringin tamamını analiz ederken, parseInt fonksiyonu stringin başlangıcında geçerli olan tam sayı kısmını döndürür.


result= parseFloat("22.5");//ondalikli sayiyi isleme katar.
result = parseInt("22a");
result= isNaN("a22");
//a arkada olursa ,undefine ile null un farki undefined bir değişkene henüz bir değer atanmadığını veya bir fonksiyonun herhangi bir değer döndürmediğini belirtirken, null bir değişkenin kasıtlı olarak değersiz olduğunu belirtir. 

 //isnan bir numara olup olmadigini sorar verilen değer bir sayı olarak değerlendirilmezse true, aksi takdirde false döner.
//nan demek= not a number demektir 

let mynumber =10.23458;
result=mynumber.toPrecision(5);//basini 1 sayarak 5 e kadar yazar 
result=mynumber.toFixed(2);//noktadan sonra iki basamak alir 

result=Math.round(1.6);// 1.5 dahil 2 ye yuvarlar (bir ust rakama yuvarlama 1.5 ve uzerini)

result=Math.ceil(1.2);//bir ust sayiya direkt yuvarlar 2ye yuvarlar 

result=Math.floor(2.9);//bir onceki sayiya yuvarlar 2 ye yuvarlar

result=Math.pow(2,9);//karesini alir

result=Math.sqrt(100);//karekokunu alir

result=Math.abs(-100);//mutlak deger

result=Math.max(100,50,60,70);

result=Math.min(100,50,60,70);


console.log( result);