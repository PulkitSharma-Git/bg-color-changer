colorloader()
function addColor(color){
    const elem =  document.querySelector(".container")
    elem.style.backgroundColor = color;
}

function Add(){
    const elem = document.querySelector(".Color")
    const clr = elem.value
    

    const buttonToAdd = document.createElement("button")
    buttonToAdd.setAttribute("onclick", `addColor('${clr}')`)
    buttonToAdd.setAttribute("class", "button")
    buttonToAdd.innerHTML = `${clr}`

    const divToAdd = document.createElement("div")
    divToAdd.setAttribute("class", `${clr}`)

    divToAdd.appendChild(buttonToAdd)

    const bar = document.querySelector(".bar")
    bar.appendChild(divToAdd)

}

function Delete(){
    const elem = document.querySelector(".Color")
    const clr = elem.value

    const todlt = document.getElementsByClassName(clr)
    console.log(todlt)

    Array.from(todlt).forEach(element => {
        element.remove()
    }) 
}

//Function to fill color in the button is left 

/*
function colorloader(){
    const parentNode  = document.querySelector(".bar")
    const allelems = parentNode.querySelectorAll("div")

    allelems.forEach(element => {
        console.log(element.className)
        addbg(element.className);
    }); 
}

function addbg(color){
    const elem = document.getElementsByClassName(color)
    
    Array.from(elem).forEach(element => {
        element.style.backgroundColor = color
    })  
}
    */





