let url ="https://www.bilgisayargenetigi.com";
let youtube = "Bilgisayar Genetigi";
let result;

//? karakter sayisini bul
result = url.length;
result=youtube.length;
result=youtube.replace(" ","").length; //parantezdeki bosluga dikkat


//? youtube degiskeni kac karakterden olusuyor 

result=youtube.split("").length;
result=url.split(".").length;

console.log(result);
