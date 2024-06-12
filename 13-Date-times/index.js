let tarih = new Date();

let result;

result =tarih.getDate();
 result =tarih.getDay();   //! 0=pazar 6=cumartesi 
 result =tarih.getFullYear();   
 result =tarih.getHours();
 result =tarih.getTime();


//! tarih guncelleme 
    tarih.setFullYear(2025);
    tarih.setMonth(2);
    tarih.setDate(2);


    //! dogum tarihi

    let dogumTarihi=new Date(2001, 9 , 5);
    result=tarih.getFullYear() - dogumTarihi.getFullYear();

   
console.log(result);