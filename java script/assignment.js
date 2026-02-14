let eventobject={
    title:' ',
    date:' ',
    category:' ',
    description:' ',
}

function submithandler(event){
    event.preventDefault()                  
//     console.log(event.target.title.value)
//     console.log(event.target.date.value)
//     console.log(event.target.category.value)
//     console.log(event.target.description.value)   


eventobject.title= event.target.title.value
eventobject.date= event.target.date.value
eventobject.category= event.target.category.value
eventobject.description= event.target.description.value

console.log(eventobject)


let eachcard= document.createElement('div')
eachcard.classList.add("eachcard")



eachcard.innerHTML=`
<p>${eventobject.title}</p>
<p>${eventobject.date}</p>
<p>${eventobject.category}</p>
<p>${eventobject.description}</p>
<span id ="crossbtn">&#10005</span>`
console.log(eachcard)


eachcard.querySelector('#crossbtn').addEventListener("click",()=>{
    eachcard.remove()
})

list.append(eachcard)
}
