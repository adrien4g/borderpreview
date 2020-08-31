const box = document.getElementById("box")

const listeners = [    
getElement('top-left'),
getElement('top-right'),
getElement('bottom-left'),
getElement('bottom-right')]

listeners.map(element=>{
    element.addEventListener('input', changeRadius)
})
function getElement(element){
    return document.getElementById(element)
}

function changeRadius(event){
    console.log(event.target.value)
    const style = `border-${event.target.name}-radius:${event.target.value}px`
    box.style.cssText = style
}
