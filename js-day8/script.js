// create element
const para = document.createElement("p");
para.textContent="This is a dynamically added paragraph";
console.log(para);

// append element
document.getElementById("content").appendChild(para)

// remove element
document.querySelector("#content p").remove()

const image = document.createElement("img")

image.setAttribute("src","https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg")

image.setAttribute("alt","Javascript")

const gallery = document.getElementById("gallery");
gallery.appendChild(image);