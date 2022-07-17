const tittleText = document.getElementById("tittleText")
tittleText.innerText = "<>Hi, I'm Javier Agustin Primo, I'm a FrontEnd Developer.</>"
const tittleProject = document.getElementById("tittleProject")
let writing = str => {
    let arrFromStr = str.split('')
    let i = 0
    let printStr = setInterval(function () {
        tittleProject.innerText += arrFromStr[i]
        i++
        if (i === arrFromStr.length) {
            clearInterval(printStr)
            printStr
        }
    }, 100)
}
tittleProject.innerText = "Projects"
function repetir(params) {
    tittleProject.innerText = "P"
    writing('rojects...')
}

setInterval(() => {
    repetir()
}, 2000 * 3);

const header = document.getElementById("header")
const main = document.getElementById("main")
const projects = document.getElementById("projects")
const aboutMe = document.getElementById("aboutMe")


main.addEventListener ("mouseenter", ()=>{
    navBar.style= `background:rgb(125, 0, 90); transition: 0.5s;`

})
const navBar = document.getElementById("navBar")
projects.addEventListener("mouseenter", ()=>{
    navBar.style="background:rgb(210, 210, 210); transition: 0.5s;"
})
aboutMe.addEventListener ("mouseenter", ()=>{
    navBar.style= "background:rgb(125, 0, 90); transition: 0.5s;"

})




