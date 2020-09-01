const box = document.getElementById("box")

const listeners = {
topLeft:getElement('top-left'),
topRight:getElement('top-right'),
bottomLeft:getElement('bottom-left'),
bottomRight:getElement('bottom-right')}

for (key in listeners){
    listeners[key].addEventListener('input', changeRadius)
    listeners[key]. addEventListener('focusin',(event)=>{event.target.value=""})
    listeners[key]. addEventListener('focusout',(event)=>{if(event.target.value.trim()==""){return event.target.value = "0"}})
    listeners[key].value = 0
}
function getElement(element){
    return document.getElementById(element)
}

function changeRadius(event){
    console.log(event.target.value)
    for (key in listeners){
        if (listeners[key].value.trim() == ""){
            listeners[key].value = 0
        }else if(listeners[key].value == 0){
            listeners[key].value.substring(1);
        }
        
    }
    const style = `border-radius:${listeners['topLeft'].value}px ${listeners['topRight'].value}px ${listeners['bottomLeft'].value}px ${listeners['bottomRight'].value}px`
    console.log(style)
    box.style.cssText = style
}
