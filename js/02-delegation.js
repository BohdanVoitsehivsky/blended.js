// const container = document.querySelector(".container");
// [...container.children].forEach(box => {
//     console.log(box);
//     box.addEventListener("click", handleClick)
    
// })
// function handleClick(event) {
//     const color = event.currentTarget.dataset.color;
//     console.log(color);
    
// }


const container = document.querySelector(".container");

container.addEventListener("click", handleClick);
function handleClick(event) {
    if(!event.target.classList.contains("box")) {
        return;
    }
    const color = event.target.dataset.color

    console.log(color);
    
}