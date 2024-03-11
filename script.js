let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currMode === "light"){

        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});

document.addEventListener('mousemove', function(e){
    mousemover(e.clientX, e.clientY)
})

function mousemover(x,y){
    console.clear();
    console.log(`X = ${x}, y = ${y}`);
}