const intervalInput = document.querySelector(".time-set");
let count = 0;

const setTime = setInterval(() => {
        intervalInput.value = count;
        count++;

        if (count > 100) {
            clearInterval(setTime);
            
        }
    
}, 100);



 