const inputs = Array.from(document.getElementsByTagName("input"))
const box = document.getElementById("box")
const buttonReset = document.getElementById("reset")
const textarea = document.getElementById("code")

buttonReset.addEventListener("click", (event)=>{
    event.target.parentElement.style.cssText = "border-radius: 0px"
    textarea.value = ""
    inputs.map(input=>{input.value = 0})
})
inputs.map(input=>{
    input.addEventListener("input", validateInputs)
    input.value=0
})

function validateInputs(event){
    //Verify if input.value > 360
    //If true - input.value = 360
    if (event.target.value > 360){
        event.target.value = 360
    }
    //Verify if input is empty
    //If true - input.value = 0
    else if (event.target.value.trim() == ""){
        event.target.value = 0
        textarea.value = ""
    }
    //Verify if input.value > 0 and first letter is "0"
    //If true - Remove first letter
    else if(event.target.value > 0 && event.target.value.charAt(0) == 0 || event.target.value.charAt(0) == "-"){
        event.target.value = event.target.value.substring(1)
    }
    changeBorderRadius()
    generateCss()
}

function changeBorderRadius(){
    box.style.cssText += `border-radius: ${inputs[0].value}px 
    ${inputs[1].value}px ${inputs[3].value}px ${inputs[2].value}px`
}

function generateCss(){
    let values = []
    let css = ""
    inputs.map(input=>{
        if(input.value > 0){
            values.push(input)
        }
    })
    switch (values.length) {
        case 1:
            css = `border-${values[0].id}-radius:${values[0].value}px;`
            break
        case 2:
            css = `border-${values[0].id}-radius:${values[0].value}px;
border-${values[1].id}-radius:${values[1].value}px;`
            break
        case 3:{
            css = `border-${values[0].id}-radius:${values[0].value}px;
border-${values[1].id}-radius:${values[1].value}px;
border-${values[2].id}-radius:${values[2].value}px;`
            break
        }
        default:
            css = `border-${values[0].id}-radius:${values[0].value}px;
border-${values[1].id}-radius:${values[1].value}px;
border-${values[2].id}-radius:${values[2].value}px;
border-${values[3].id}-radius:${values[3].value}px;`
            break
    }
    textarea.value = css;
}
