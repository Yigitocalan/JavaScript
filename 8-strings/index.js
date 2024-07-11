const isimm="yigit";
const surname="ocalan";
const age="22";
const country="istanbul";
const job="full stack developer";

//string yontemi
const bio= "benim adim "  + isimm  +"  soyadim " + surname+ "  yasim "+age +"  sehrim "+country +"  isim "+job;


//backtick yontemi
const NewBio=`benim adim ${isimm}  soyadim ${surname}  yasim ${age}  sehrim  ${country}  isim  ${job}`; 
//js ifadece string yazmak istiyorsam backtick icine almaliyim ,okunabilirlik acisindan ,Backtick kullanarak çok satırlı stringler oluşturabilirsiniz.
// Normal stringlerde her satırı ayrı ayrı tanımlamak veya özel karakterler kullanmak gerekir.
//Özellikle uzun stringler veya birden fazla değişken içeren stringler oluştururken, template literals kullanmak kodunuzu daha temiz ve yönetilebilir hale getirir.
//modern JavaScript yazımında sıkça kullanılır.
console.log(NewBio);

