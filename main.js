const list= document.querySelectorAll("ol>li")
for(let i = 0;i < list.length; i ++){
    list[i].addEventListener("click",()=>{
        list[i].style.textDecoration = "line-through"
    })
}
const opaque = document.querySelectorAll("ul li")
for(let i = 0; i < opaque.length; i++){
    opaque[i].addEventListener("click",()=>{
        opaque[i].style.opacity = "15%"
    })    
}

const thirdList= document.querySelectorAll(".pic")
for(let i = 0; i < thirdList.length; i++){
    thirdList[i].addEventListener("click",()=>{
        thirdList[i].style.width = 0
    })    
}

const button = document.querySelector("#destroy-all")
button.addEventListener("click",()=>{
    // for(let i = 0; i < list.length; i++){
    //     list[i].style.textDecoration = "line-through"
    // }
    list.forEach((element) => {
        element.style.textDecoration = 'line-through'
    })






    for(let i = 0;i < opaque.length;i++){
        opaque[i].style.opacity = ".15%"
    }
    for(let i = 0;i < thirdList.length; i++){
        thirdList[i].style.opacity = 0
    }
})








