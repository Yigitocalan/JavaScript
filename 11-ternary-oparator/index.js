//! if else normal kullanimi
const username="yigit";
const password="123456";//numberi string yapmamizin sebebi asagida karakter sayisini bulmamiz icin lentgh kullanicaz lentgh string metodudur bu yuzden numberda calismaz.
if (password.length>6) {
console.log("calisti.");
    
 }else{
 console.log("calismadi.");
}

//! ternary opertoru
const username1="yigit";
const password1="123456";
password1.length > 5 ? console.log("calisti.") : console.log("calismadi.");
username1.length > 4 ? console.log("calisti.") : console.log("calismadi.");

//soru isareti if yerine kullanilir yani meali password 6 dan buyukse log calisti desin 