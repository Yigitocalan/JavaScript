let products=["iphone5","samsung","iphone7"]
let result;

result=products;
result=products.length;

result=products.toString();
result=products.join("/");

// result=products.shift();//ilk elemani siler
// result=products.pop(); //son elemani siler
// result=products.push("xiaomi"); //sona eleman ekler 
// result=products.unshift("xiaomi"); // en basa eleman ekler 
// console.log( result);
// console.log( products);


let urunler1 =["apple" , "samsung"];
let urunler2 =["dell" , "casper"];
let urunler3 =["hp" , "grundig"];

result=urunler1.concat(urunler2 , urunler3);
console.log(result);