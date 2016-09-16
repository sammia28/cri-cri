window.addEventListener("load", function(){
    var boton = document.getElementById("cri-cri");
    var contador = 1;
    boton.addEventListener("click", function(){
        if ( contador == 1){
            document.getElementsByClassName("circle")[0].style.borderColor = "blue";
            document.getElementById("color").placeholder = "rojo";
            document.getElementsByClassName("circle")[1].style.borderColor = "transparent";
            document.getElementsByClassName("circle")[2].style.borderColor = "transparent";
        }
        if ( contador == 2){
            document.getElementsByClassName("circle")[1].style.borderColor = "purple";
            document.getElementById("color").placeholder = "blue";
            document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
            document.getElementsByClassName("circle")[2].style.borderColor = "transparent";
        }
        if (contador == 3){
            document.getElementsByClassName("circle")[2].style.borderColor = "green";
            document.getElementById("color").placeholder = "yellow";
            document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
            document.getElementsByClassName("circle")[1].style.borderColor = "transparent"; 
            contador = 0;
        }
        contador ++;
    })
    var boton = document.getElementById("supercri");
    boton.addEventListener("click", function(){
        var entrada = document.getElementById("color").value;
        if (entrada == "rojo"){
            document.getElementsByClassName("circle")[0].style.borderColor = "green";
            document.getElementsByClassName("circle")[1].style.borderColor = "transparent";
            document.getElementsByClassName("circle")[2].style.borderColor = "transparent"; 
        }
        if( entrada == "azul"){
            document.getElementsByClassName("circle")[1].style.borderColor = "purple";
            document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
            document.getElementsByClassName("circle")[2].style.borderColor = "transparent"; 
        }
        if(entrada == "yellow"){
            document.getElementsByClassName("circle")[2].style.borderColor = "green";
            document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
            document.getElementsByClassName("circle")[1].style.borderColor = "transparent";
        }
    });
    
})