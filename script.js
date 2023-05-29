let buttons = document.querySelectorAll("button");
let output = document.querySelector('.output')
for(let i=0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        if(buttons[i].innerHTML == 'C'){
            output.innerHTML = " "
        }
        else if(buttons[i].innerHTML == '='){
           
            try{
                output.innerHTML = eval(output.innerHTML)
            }
            catch{
                output.innerHTML = "ERROR";
            }
            
        }
        else if(buttons[i].innerHTML == '<i class="fa-sharp fa-solid fa-delete-left"></i>'){
            output.innerHTML =  output.innerHTML.slice(0,-1)

        }
        
        else if(buttons[i].innerHTML == 'x'){
            output.innerHTML += '*'
        }
        else{
             output.innerHTML += buttons[i].innerHTML
        }
  
   
        
        
        

    })
}

