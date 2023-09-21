let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string ="";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (Event) => {
        if(Event.target.innerHTML == '=' ){
            string = eval(string);
            input.value = string;
        }
        
        else if(Event.target.innerHTML == 'AC'){
            string = "";
            input.value =  string;
        }
        
        else if(Event.target.innerHTML == 'DE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else {
            string += Event.target.innerHTML;
            input.value = string;
        }

        
    })
})
