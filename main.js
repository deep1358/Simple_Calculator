var buttons = document.getElementsByClassName('button')
var input = document.getElementById('input')

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
      
        input.value += e.target.textContent
        
        if(e.target.textContent === "="){
            try{
            if(input.value === ""){
                input.value = ""
            }
            var d = input.value.replace("=","")
            var e = d.replace("PI",Math.PI)
            if(Number.isInteger(eval(e))){
                input.value = eval(e)
            }
            else{
                input.value = eval(e).toFixed(6)
            }
            }catch(e){
                input.value="Wrong syntext"
            }
        }

        if(e.target.textContent === "C"){
            
            input.value = ""
        }

        if(e.target.textContent === "CE"){
            if(input.value === "Wrong syntextCE"){
                input.value = ""
            }
            else{
            input.value = input.value.slice(0,-3)}
        }

       
    })
  }
  



