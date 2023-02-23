      
        const f = document.getElementById("fle")
        const to = document.getElementById("toggle")
        const c = document.getElementById("c")
        const d = document.getElementById("d")
        let darkMode = localStorage.getItem("dark-mode");


        window.addEventListener('scroll', e =>{
            const x = window.pageYOffset;
            console.log(x);
            console.log(f);
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
            to.classList.remove("menu")
            localStorage.setItem("dark-mode", "active")
        }

        const disableDark = () => {
            to.classList.remove("invi")
            to.classList.add("menu")
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