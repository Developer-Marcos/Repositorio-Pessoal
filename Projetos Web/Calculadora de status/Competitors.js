
//Variaveis
let Gender_m = document.querySelector("#Male");
let Gender_f = document.querySelector("#Female");

let btn = document.querySelector("#Gerar");

let atributos_n = Math.floor(Math.random()*101);



//Funcao de Gerar
btn.addEventListener("click", Gerar);

function Gerar(){
    let Nome = document.getElementById("nome").value;
    let Nome_txt = document.getElementById("Name_txt");

    Nome_txt.innerHTML = Nome;

    let gender = document.getElementById("gender_txt");
    let male = document.getElementById("Male");

    if (male.checked){
      gender.innerHTML = "Male ♂"
    }
    else{
      gender.innerHTML = "Female ♀"
    }

    let STR_numeros = Math.floor(Math.random() * 101);
    let AGI_numeros = Math.floor(Math.random() * 101);
    let INT_numeros = Math.floor(Math.random() * 101);
    let DEX_numeros = Math.floor(Math.random() * 101);
    let CHA_numeros = Math.floor(Math.random() * 101);
    let WILL_numeros = Math.floor(Math.random() * 101);

    let STR = document.getElementById("STR_n");
    let str_s = STR.innerHTML = STR_numeros;

    let AGI = document.getElementById("AGI_n");
    let AGI_s = AGI.innerHTML = AGI_numeros;

    let INT = document.getElementById("INT_n");
    let INT_s = INT.innerHTML = INT_numeros;

    let CHA = document.getElementById("CHA_n");
    let CHA_s = CHA.innerHTML = CHA_numeros;

    let DEX = document.getElementById("DEX_n");
    let DEX_s = DEX.innerHTML = DEX_numeros;

    let WILL = document.getElementById("WILL_n");
    let WILL_s = WILL.innerHTML = WILL_numeros;

    if (STR_numeros <= 35){
      STR.style.color = "rgb(255, 90, 90)"
    } else if(STR_numeros >= 36 & STR_numeros <= 69){
      STR.style.color = "rgb(255, 228, 90)"
    } else if(STR_numeros >= 70 & STR_numeros <= 79){
      STR.style.color = "rgb(90, 255, 90)"
    } else if(STR_numeros >= 80 & STR_numeros <= 99){
      STR.style.color = "rgb(90, 255, 239)"
    } else if(STR_numeros >= 100){
      STR.style.color = "rgb(90, 170, 255)"
    }

    if (AGI_numeros <= 35){
      AGI.style.color = "rgb(255, 90, 90)"
    } else if(AGI_numeros >= 36 & AGI_numeros <= 69){
      AGI.style.color = "rgb(255, 228, 90)"
    } else if(AGI_numeros >= 70 & AGI_numeros <= 79){
      AGI.style.color = "rgb(90, 255, 90)"
    } else if(AGI_numeros >= 80 & AGI_numeros <= 99){
      AGI.style.color = "rgb(90, 255, 239)"
    } else if(AGI_numeros >= 100){
      AGI.style.color = "rgb(90, 170, 255)"
    }

    if (INT_numeros <= 35){
      INT.style.color = "rgb(255, 90, 90)"
    } else if(INT_numeros >= 36 & INT_numeros <= 69){
      INT.style.color = "rgb(255, 228, 90)"
    } else if(INT_numeros >= 70 & INT_numeros <= 79){
      INT.style.color = "rgb(90, 255, 90)"
    } else if(INT_numeros >= 80 & INT_numeros <= 99){
      INT.style.color = "rgb(90, 255, 239)"
    } else if(INT_numeros >= 100){
      INT.style.color = "rgb(90, 170, 255)"
    }

    if (CHA_numeros <= 35){
      CHA.style.color = "rgb(255, 90, 90)"
    } else if(CHA_numeros >= 36 & CHA_numeros <= 69){
      CHA.style.color = "rgb(255, 228, 90)"
    } else if(CHA_numeros >= 70 & CHA_numeros <= 79){
      CHA.style.color = "rgb(90, 255, 90)"
    } else if(CHA_numeros >= 80 & CHA_numeros <= 99){
      CHA.style.color = "rgb(90, 255, 239)"
    } else if(CHA_numeros >= 100){
      CHA.style.color = "rgb(90, 170, 255)"
    }

    if (DEX_numeros <= 35){
      DEX.style.color = "rgb(255, 90, 90)"
    } else if(DEX_numeros >= 36 & DEX_numeros <= 69){
      DEX.style.color = "rgb(255, 228, 90)"
    } else if(DEX_numeros >= 70 & DEX_numeros <= 79){
      DEX.style.color = "rgb(90, 255, 90)"
    } else if(DEX_numeros >= 80 & DEX_numeros <= 99){
      DEX.style.color = "rgb(90, 255, 239)"
    } else if(DEX_numeros >= 100){
      DEX.style.color = "rgb(90, 170, 255)"
    }

    if (WILL_numeros <= 35){
      WILL.style.color = "rgb(255, 90, 90)"
    } else if(WILL_numeros >= 36 & WILL_numeros <= 69){
      WILL.style.color = "rgb(255, 228, 90)"
    } else if(WILL_numeros >= 70 & WILL_numeros <= 79){
      WILL.style.color = "rgb(90, 255, 90)"
    } else if(WILL_numeros >= 80 & WILL_numeros <= 99){
      WILL.style.color = "rgb(90, 255, 239)"
    } else if(WILL_numeros >= 100){
      WILL.style.color = "rgb(90, 170, 255)"
    }


  
}