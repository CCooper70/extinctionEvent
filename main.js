const firstList = document.querySelectorAll('.ol')
for (let i = 0; i < firstList.length; i++){
    firstList[i].addEventListener('click', ()=>{
        firstList[i].style.textDecoration = "line-through"
    })
}
const secondList = document.querySelectorAll('.ul')
for (let i = 0; i < secondList.length; i++){
    secondList[i].addEventListener('click', ()=>{
        secondList[i].style.opacity = "50%"
    })
}
const thirdList = document.querySelectorAll('.pic')
for (let i = 0; i < thirdList.length; i++){
    thirdList[i].addEventListener('click', ()=>{
        thirdList[i].style.opacity = "50%"
    })
}
document.querySelector("#destroy-all").addEventListener('click', ()=>{
    for(let i = 0; i < firstList.length; i++){
        firstList[i].style.textDecoration = "line-through"
    }
    for(let i = 0; i < secondList.length; i++){
        secondList[i].style.opacity = "50%"
    }
    for(let i = 0; i < thirdList.length; i++){
        thirdList[i].style.opacity = "50%"
    }
})