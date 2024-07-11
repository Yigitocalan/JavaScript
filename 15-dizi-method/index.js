// let products=["iphone5","samsung","iphone7"]
// let result;

// result=products;
// result=products.length;

// result=products.toString();
// result=products.join("/");

// // result=products.shift();//ilk elemani siler 
// // result=products.pop(); //son elemani siler 
// // result=products.push("xiaomi"); //sona eleman ekler 
// // result=products.unshift("xiaomi"); // en basa eleman ekler 
// // console.log( result);
// // console.log( products);

// //Array metodlaritekrar 

// let urunler1 =["apple" , "samsung"];
// let urunler2 =["dell" , "casper"];
// let urunler3 =["hp" , "grundig"];

// result=urunler1.concat(urunler2 , urunler3);
// // console.log(result);



let products=["apple","samsung","huawei"];
let result;
result=products.length;//karakter sayisini bulur
result=products.toString(); //stringe cevirir
result=products.join("/");
console.log(result);

// result=products.shift(); //ilk elemani siler resulta ekler 
// result=products.pop();//son elelmani siler resulta ekler 
result=products.push("xionami");//sona ekleme yapar
result=products.unshift("xionami");//basa ekleme yapar
//dizi birlestirme

 let urunler1 =["apple" , "samsung"];
 let urunler2 =["dell" , "casper"];
 let urunler3 =["hp" , "grundig"];
result=urunler1.concat(urunler2,urunler3);//urunleri birbirine eklemeyi saglar concat
result=urunler1.slice(0,1)//arayin icindeki indexi siler


console.log(result);
