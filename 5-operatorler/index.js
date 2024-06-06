//! aritmatik operator

 let number1=10;
 let number2=30; 
 let number3=50;

result=number1 * number2;
result=number2 / number1;
result=number2 % number1;
result=number2 - number1;
result=number2 + number1;

// result = number1--;
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

result = number1 == number2;
result = number1 != number2;
result = number1 === "10";
result = number1 >= number2;
result = number1 <= number2;


//! Mantiksal Operatorleri
//? &&=ve , ||=veya !=Tersi-esit degilse ;

//? &&=ve  2 tane deger de ayni sekilde olmali true ya da false ;
// console.log(number1 !== number2 && number1 <= number2);

//? ||= veya 2 degerden 1 tanesi false olsa bile true doner;
// console.log(number1 >= number2 || number1 <= number3);

//? !=tersidir,degildir;
console.log(!(number1 > number2) && !(number3<= number1));
