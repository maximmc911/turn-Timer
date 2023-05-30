let min = document.querySelector(`.min`);  
let sec = document.querySelector(`.sec`);
    
let sec1 = 60;
let min1 = 3; 
 min.innerHTML =`0${min1}`;
for (let index = 0; index < 60; index++) {
        
    function turnMin() {
        if (min1<1) {
            return min1 =3;
            
        } else {
                min1--;
                min.innerHTML =`0${min1}`;            
            } 
        };
            };
            
                

setInterval(turnMin, 60000);



    for (let index = 0; index < 60; index++) {
        
        function turnSec() {
            if (sec1<1) {
                return sec1 =60;
                
            } else {
                if (sec1<11) {
                    sec1--;
                    sec.innerHTML =`0${sec1}`;            
                } else {
                    sec1--;
                    sec.innerHTML = sec1;    
                };
            };
                };
                
            };        

setInterval(turnSec, 1000);
