let url="https://www.bilgisayargenetigi.com";
let youtube="bilgisayar genetigi";
let result;
result=url.length;
result=youtube.replace(" ","").length;//boslugu saymadan karakterleri sayar.
result =youtube.split(" ");
result=url.split(".").length;
result=youtube.startsWith("bilgisayar");//karakterler birbiri ile uyuyor mu dogru mu ?
if(result){
    // console.log("dogru yazdin.");
}else{
    // console.log("yanlis yazdin.");
}

if(youtube.indexOf("genetigi")> -1){
    // console.log("calisti");//kelimeyi kontrol eder eger cumlenin icinde yazdigimiz varsa calisir.

}else{
    // console.log("calismadi");
}


youtube=youtube.toLocaleLowerCase().replace(" ","-");//ilk tirnak boslugu bul ikinci tirnak buldugun bosluga tire isareti koy.
url=url.replace("com","com/");

let newUrl=url.replace(url,url + youtube)
//veya 
newUrl=`${url}/${youtube}`

console.log(newUrl);