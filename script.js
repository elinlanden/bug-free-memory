"use strict"

// skapar divarna för färgschemat //
colorScheme();

function colorScheme(){ 

    for (let i=1; i<=4; i++) { 
    let colorScheme = document.createElement("div");
    colorScheme.classList.add("boxesColorScheme"); 
    colorScheme.innerHTML = `
                            <div> </div>
                            <div> </div> 
                            <div> Scheme ${i} </div> 
                            <div> </div> 
                            <div> </div> `
    document.querySelector("#colorScheme").append(colorScheme);  
    putColors(i);                  
    }
}

//sätter färgerna i divarna // 
function putColors(x){
    for (let ii = 1; ii <= 5; ii++){
    document.querySelector("#colorScheme>div:nth-child("+x+")>div:nth-child("+ii+")").style.backgroundColor = getColor(x,ii);
    }
}


// gör så att allt ändrar färg när man klickar på ett färgschema // 
document.querySelector("#colorScheme>div:first-child").classList.add("active");

document.querySelector("#colorScheme>div:first-child").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#colorScheme>div:first-child").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(1, i));
    };
    
});
document.querySelector("#colorScheme>div:nth-child(2)").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#colorScheme>div:nth-child(2)").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(2, i));
    };
});
document.querySelector("#colorScheme>div:nth-child(3)").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#colorScheme>div:nth-child(3)").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(3, i));
    };
});
document.querySelector("#colorScheme>div:nth-child(4)").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#colorScheme>div:nth-child(4)").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(4, i));
    };
});


// är storlekarna för när stjärnan blir större när man klickar på "bigger" // 
document.getElementById("bigger").addEventListener("mousedown", function () {
    document.documentElement.style.setProperty("--sz1", "89vw");
    document.documentElement.style.setProperty("--sz2", "90vw");
    document.documentElement.style.setProperty("--sz3", "88vw");
    document.documentElement.style.setProperty("--sz4", "86vw");
});

// är storlekarna för när stjärnan blir mindre när man klickar på "smaller"//
document.getElementById("smaller").addEventListener("mousedown", function () {
    document.documentElement.style.setProperty("--sz1", "7vw");
    document.documentElement.style.setProperty("--sz2", "8vw");
    document.documentElement.style.setProperty("--sz3", "6vw");
    document.documentElement.style.setProperty("--sz4", "4vw");
});

// detta är när man klickar på knapparna så ändras storleken på stjärnan //
document.getElementById("stop").addEventListener("mouseup", function () {
    let currentSize1 = getComputedStyle(document.querySelector("#circle")).getPropertyValue("width"); 

    let currentSize2 = getComputedStyle(document.querySelector("#firstSquare")).getPropertyValue("width");

    let currentSize3 = getComputedStyle(document.querySelector("#secondSquare")).getPropertyValue("width");

    let currentSize4 = getComputedStyle(document.querySelector("#thirdSquare")).getPropertyValue("width");

    document.documentElement.style.setProperty("--sz1", currentSize1);
    document.documentElement.style.setProperty("--sz2", currentSize2);
    document.documentElement.style.setProperty("--sz3", currentSize3);
    document.documentElement.style.setProperty("--sz4", currentSize4);
});


