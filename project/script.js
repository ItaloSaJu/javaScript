      
        const f = document.getElementById("fle")
        const to = document.getElementById("toggle")
        const toco = document.getElementById("toggle-corpo")
        const toSec2 = document.getElementById("toggle-section2")
        const c = document.getElementById("c")
        const d = document.getElementById("d")
        let darkMode = localStorage.getItem("dark-mode");


        window.addEventListener('scroll', e =>{
            const x = window.pageYOffset;
            if(x >= 350 ){
                 f.style.display= "flex"
            }else if(x <= 550 ){
                 f.style.display= "none"
            }
        })

        f.addEventListener('click', e =>{
            document.body.scrollIntoView ( {behavior: "smooth"});
        })

        /**
         *    LOCALSTORAGE
         * 
         */

        const activeDark = () => {
            to.classList.add("invi")
            toco.classList.add("invi")
            toSec2.classList.add("invi")
            localStorage.setItem("dark-mode", "active")
        }

        const disableDark = () => {
            to.classList.remove("invi")
            to.classList.add("menu")
            toco.classList.remove("invi")
            toSec2.classList.remove("invi")
            localStorage.setItem("dark-mode", "disabled")
        }

        if (darkMode === "active") {
            activeDark(); 
        }

        to.addEventListener('click', e => {
            darkMode = localStorage.getItem('dark-mode');
            if(darkMode === "disabled"){
                activeDark();
            }else{
                disableDark();
            }
        })

        let numeros = [1,2,3,4,5,6]

        let sum = 0;
        for(var i = 0; i < numeros.length; i++){
            sum = sum + numeros[i];
        }
        console.log(sum);




        
        var arreglo = [3,6,2,56,5,89,32];
        var maggiore = 0;
        var minore = 0;
        
        
            console.log(arreglo.sort());
            console.log(Math.max(...arreglo))
            console.log(Math.min(...arreglo))
            
        
       
        