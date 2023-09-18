const item = document.querySelector(".item")

item.addEventListener("dragstart",dragStart)
item.addEventListener("dragend",dragEnd)

    function dragStart(e){
        setTimeout(() => {
        e.target.classList.add("hide") 
        }, 0);
        e.target.classList.add("hold")
        
    }   
function dragEnd(e){
    e.target.classList.className ='item'
}