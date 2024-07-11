
//?result=sonuc degeri demek bir sey atayabiliyoruz.

//! aritmatik operator

 let number1=10;
 let number2=30; 
 let number3=50;

result=number1 * number2;
result=number2 / number1;
result=number2 % number1;
result=number2 - number1;
result=number2 + number1;
result =number1++;//result bu cikti da 10 olur number kendini sonradan 11 yapar
result =++number1;//direkt kendini 11 yapar
// result = number1--; number kendini sonradan 9 yapar
result= number1+number3;

//! atama operatorleri
//? = ,+= ,-= /=, *=, %=;
result=number3;
result+=number2;
result-=number2;
result*=number2;
result%=number1;


//! Karsilastirma Operatorleri
//? == ,!= ,===,>,<, <= , >=;

result = number1 == number2; //iki deger birbirine esit mi diye sorar yani karsilastirir
result = number1 != number2; // iki deger esit degilse demek 
result = 10 === "10"; // tip kontrolu demek 3 tane esit isareti 
result = number1 >= number2;
result = number1 <= number2;


//! Mantiksal Operatorleri
//? &&=ve , ||=veya !=Tersi-esit degilse ;

// &&=ve  2 tane deger de ayni sekilde olmali true ya da false ; iki sarti da saglamasi lazim 
 console.log(number1 !== number2 && number1 <= number2);

// ||= veya 2 degerden 1 tanesi false olsa bile true doner; bir sarti saglamasi yeterli 
 console.log(number1 >= number2 || number1 <= number3);

//? !=tersidir,degildir;
console.log(!(number1 > number2) && !(number3<= number1));
