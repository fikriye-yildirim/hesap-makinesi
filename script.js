let ekran = document.querySelector(".ekran");

 let ilkSayi = null;
 let secilenIslem = null;
 let gecmis = [];

function sayiEkle(sayi) { 
        let mevcut = ekran.textContent.trim();

        if( mevcut === "0") {
            ekran.textContent = sayi;
        } else {
            ekran.textContent = mevcut + sayi;
        }
      }
        function islemSec(islem) {
            ilkSayi = Number(ekran.textContent);
            secilenIslem = islem;
            ekran.textContent = "0";
     }
      function hesapla() {
        let ikinciSayi = Number(ekran.textContent);
        let sonuc;

        if (secilenIslem === "+") {
            sonuc = ilkSayi + ikinciSayi;
        } else if (secilenIslem === "-"){
            sonuc = ilkSayi - ikinciSayi;
        } else if (secilenIslem === "*"){
            sonuc = ilkSayi * ikinciSayi;
        } else if (secilenIslem === "/"){
            sonuc = ilkSayi / ikinciSayi;
        }
        ekran.textContent = sonuc;
        let islemMetni = ilkSayi + " " + secilenIslem + " " + ikinciSayi + " = " + sonuc;
        
        gecmis.unshift(islemMetni);
        gecmisiGoster();
      }
      function gecmisiGoster (){
        let liste = document.querySelector("#gecmis-listesi");
        liste.innerHTML = "";
        gecmis.forEach(function(islem) {
            let satir = document.createElement("p");
            satir.textContent = islem;
            satir.onclick = function(){
                let sonuc = islem.split(" = ")[1];
                ekran.textContent = sonuc;
            };
            liste.appendChild(satir);
        });
      }
      function gecmisiTemizle() {
        gecmis = [];
        gecmisiGoster();
      }
      function temizle(){
        ekran.textContent = "0";
        ilkSayi = null;
        secilenIslem = null
      }