let przyciski = document.querySelectorAll("span");
let ekran= document.querySelector('.ekran')
let dzialanie="";
let wynik=0;
console.log(przyciski)
console.log(ekran)
przyciski.forEach(item =>{
    
    item.addEventListener('click',()=>{

    
        dzialanie+=item.innerText
        console.log(dzialanie)
        

        //Ograniczenie pokazywanych liczb

        if(dzialanie.length<=9){
            ekran.innerHTML=dzialanie
        }else{
            ekran.innerHTML=dzialanie[0]
        }

        if(item.innerText=="="){

            if(dzialanie.includes('+')){

                

                //Dzielenie na liczby

                let tab=dzialanie.split('')
               
                
                let index_plus=tab.indexOf("+");
               

                let liczba1 =tab.splice (0,index_plus);

                let str_1= liczba1.join(',');

                let flout_liczba1=parseFloat(str_1.replace(/,/g,''))

                console.log("po operacji 1:"+flout_liczba1)
                

                let wilekosc_tab=tab.length
                

                let liczba2 =tab.splice (1,wilekosc_tab-2);

                let str_2= liczba2.join(',');

                let flout_liczba2=parseFloat(str_2.replace(/,/g,''))

                console.log("po operacji 2:"+flout_liczba2)

                wynik = flout_liczba1+flout_liczba2;

                 if(wynik!=0){
                    dzialanie=`${wynik}`
                }else{
                    dzialanie=""
                }

                ekran.innerHTML=dzialanie
                

            }

            if(dzialanie.includes('-')){

                

                //Dzielenie na liczby

                let tab=dzialanie.split('')
               
                
                let index_plus=tab.indexOf("-");
               

                let liczba1 =tab.splice (0,index_plus);

                let str_1= liczba1.join(',');

                let flout_liczba1=parseFloat(str_1.replace(/,/g,''))

                console.log("po operacji 1:"+flout_liczba1)
                

                let wilekosc_tab=tab.length
                

                let liczba2 =tab.splice (1,wilekosc_tab-2);

                let str_2= liczba2.join(',');

                let flout_liczba2=parseFloat(str_2.replace(/,/g,''))

                console.log("po operacji 2:"+flout_liczba2)

                wynik = flout_liczba1-flout_liczba2;

                if(wynik!=0){
                    dzialanie=`${wynik}`
                }else{
                    dzialanie=""
                }
                
                ekran.innerHTML=dzialanie
                

            }

            if(dzialanie.includes('x')){

                

                //Dzielenie na liczby

                let tab=dzialanie.split('')
               
                
                let index_plus=tab.indexOf("x");
               

                let liczba1 =tab.splice (0,index_plus);

                let str_1= liczba1.join(',');

                let flout_liczba1=parseFloat(str_1.replace(/,/g,''))

                console.log("po operacji 1:"+flout_liczba1)
                

                let wilekosc_tab=tab.length
                

                let liczba2 =tab.splice (1,wilekosc_tab-2);

                let str_2= liczba2.join(',');

                let flout_liczba2=parseFloat(str_2.replace(/,/g,''))

                console.log("po operacji 2:"+flout_liczba2)

                wynik = flout_liczba1*flout_liczba2;

                if(wynik!=0){
                    dzialanie=`${wynik}`
                }else{
                    dzialanie=""
                }
                
                ekran.innerHTML=dzialanie
                

            }

            if(dzialanie.includes('÷')){

                

                //Dzielenie na liczby

                let tab=dzialanie.split('')
               
                
                let index_plus=tab.indexOf("÷");
               

                let liczba1 =tab.splice (0,index_plus);

                let str_1= liczba1.join(',');

                let flout_liczba1=parseFloat(str_1.replace(/,/g,''))

                console.log("po operacji 1:"+flout_liczba1)
                

                let wilekosc_tab=tab.length
                

                let liczba2 =tab.splice (1,wilekosc_tab-2);

                let str_2= liczba2.join(',');

                let flout_liczba2=parseFloat(str_2.replace(/,/g,''))

                console.log("po operacji 2:"+flout_liczba2)

                wynik = flout_liczba1/flout_liczba2;

                if(wynik!=0){
                    dzialanie=`${wynik.toFixed(5)}`
                }else{
                    dzialanie=""
                }
                
                ekran.innerHTML=dzialanie
                

            }
        }

        if(dzialanie.includes("C")){
            dzialanie="";
            wynik=""

            ekran.innerHTML=dzialanie
        }

        if(dzialanie.includes("bin")){
            console.log(dzialanie.indexOf("bin"))
            let liczba=dzialanie.slice(0,dzialanie.indexOf("bin"))
            let konwersja=parseFloat(liczba).toString(2)

            console.log('zamiana na bin:'+konwersja)

            ekran.innerHTML=konwersja
        }

        if(dzialanie.includes("dec")){
            console.log(dzialanie.indexOf("dec"))
            let liczba=dzialanie.slice(0,dzialanie.indexOf("dec"))
            let konwersja=parseFloat(liczba).toString(16)

            console.log('zamiana na bin:'+konwersja)

            ekran.innerHTML=konwersja
        }
    })
})
