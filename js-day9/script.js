
document.getElementById("myInput").addEventListener("change",(event)=>{
    // here event is the synthetic event which comes under addenventlister's callback function. it will print the event object which stores all information about the form tag.
    console.log(event.target.value);
    document.getElementById("output").textcontent="change detected!";
})