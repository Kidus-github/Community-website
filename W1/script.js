const images= document.getElementsByClassName("image");

let globalindex= 0
    last= {x: 0, y: 0};



window.onmousemove = e =>{
    if(distanceFromLast(e.clientX,e.clientY)>100){

        const lead = images[globalindex % images.length],
        tail = images[(globalindex - 6) % images.length];
        

        activate(lead, e.clientX, e.clientY);
        if(tail) tail.dataset.status="inactive";


        globalindex++;
    }

}

const activate = (image, x, y) =>{
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    image.dataset.status="active";


    last =  {x, y};
}
const distanceFromLast= (x,y) =>{
    return Math.hypot(x- last.x, y - last.y);
}