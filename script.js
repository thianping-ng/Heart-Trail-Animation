const mousemove = document.querySelector(".container");

mousemove.addEventListener("mousemove",(e)=>{
    const xPos = e.offsetX;
    const yPos = e.offsetY;

    const createElement = document.createElement("span"); 
    const size = Math.random()*100;
    createElement.style.width = size + "px";
    createElement.style.height = size + "px";
    createElement.style.left = xPos +"px"; 
    createElement.style.top = yPos + "px";
    mousemove.appendChild(createElement);

    setTimeout(()=>{createElement.remove();},3000);
})