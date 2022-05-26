const panels=document.querySelectorAll('.panel') // Select all the classes of panel // 
console.log(typeof (panels))

panels.forEach((panel)=>{ 
    
panel.addEventListener('click',()=> {
    removeActiveClasses()
panel.classList.add('active')

})

})

function removeActiveClasses(){
panels.forEach(panel=>{
panel.classList.remove('active')

})
}
