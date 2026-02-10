function handleclick(){
    document.getElementById("btn").textContent = "clicked"
}

const addText=()=>{
    document.createElement("h2").textContent="this is a sub heading"

    const image = document.createElement("img");
    image.setAttribute("src","https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg");


    document.getElementById("render").append(h2)
    document.getElementById("render").append(image)
}

//  addEventListener("eventtype",function)

document.getElementById("task2").addEventListener("click", handleclick)

