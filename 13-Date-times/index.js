let tarih = new Date();//tarih zaman olusturmak icin kullaniriz

let result;

result =tarih.getDate();//gun
 result =tarih.getDay();   //! 0=pazar 6=cumartesi 
 result =tarih.getFullYear();   
 result =tarih.getHours();
 result =tarih.getTime();//milisaniye


//! tarih guncelleme 
    tarih.setFullYear(2025);
    tarih.setMonth(2);//ay
    tarih.setDate(2);//gun


    //! dogum tarihi

    let dogumTarihi=new Date(2001, 9 , 5);//ornek
    result=tarih.getFullYear() - dogumTarihi.getFullYear();

    tarih.setUTCDate //!arastir 
    tarih.toLocaleDateString //!arastir locallere bak
   
console.log(result);