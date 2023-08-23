
let imageEl= document.getElementById("image");

    
    let btnEl = document.getElementById("button");




    let originalImage="apj1.jpg";
    let alImage ="indirag3.jpg";
    
    
    
    
    let isAlt= false;
    
    
    btnEl.addEventListener("click", function(){
    if (isAlt){
        imageEl.src=`${originalImage}`;
    }
    else{
        imageEl.src=`${alImage}`;
    }
    isAlt=!isAlt
    
    
    })
    


