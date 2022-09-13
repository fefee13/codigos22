
let miform = document.getElementById("miform")
    miform.addEventListener("submit", (e) => {
            e.preventDefault()
         
    let inputs = e.target.children;
    if (!inputs[0].value.includes("@")){
        alert("ingrese usuario valido");
        inputs[0].value="";
    }else{
        alert ("Bienvenido "+inputs[0].value);
    
    }

})

