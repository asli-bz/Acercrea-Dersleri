function KontrolEt()
{
    var mail = document.getElementById("mail").value;//id ile ınputun degerini çektik
    var sorgu =/^([A-Za-z0-9\.])+\@([\w\-\.])+\.([A-Za-z0-9]{2,4})$/; 
    //regex ile aranıcak kelimeleri yaptık
    if(sorgu.test(mail) == false) //if ile harfler yazılana uymuyorsa yani false ise hata mesajıyla ife girer
    {//döngü ile de  yapılabilir
      alert("hatalı ! tekrar deneyiniz");
      return false;//false değer döndürür
    }
    else{
      alert("kaydedilmiştir");
      return true;//true değer döndürcek
    }
}
   