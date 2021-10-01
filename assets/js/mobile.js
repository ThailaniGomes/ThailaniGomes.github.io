window.onload = function(){
    document.getElementById("botao-menu").onclick = menuClick;
}

function menuClick(event){
    var menuDesativado = document.getElementsByClassName("menu-desativado")[0];
    
    if (menuDesativado){
//ativa 
        document.getElementsByClassName("menu-desativado")[0].className = "menu";
        
        
    }else{
        var menuAtivado = document.getElementsByClassName("menu")[0];
//desativa
        document.getElementsByClassName("menu")[0].className += "menu menu-desativado";
    }
}

