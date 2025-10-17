const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data=new FormData(form);
    for(let [key,value] of data.entries())
        console.log(key,value);
})