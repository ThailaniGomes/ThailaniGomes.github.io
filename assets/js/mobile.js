var $botaoMenu = document.querySelector ("#botao-menu");
$botaoMenu.onclick = alterarMenu;

function alterarMenu(){
    var $menu = document.querySelector(".menu");
    if(menuEstaDesativado($menu)){
        $menu.className = "menu menu-ativado";
    }else{
        $menu.className = "menu";
    }
}

function menuEstaDesativado($menu){
    return $menu.className == "menu";   
}


function abrirMenu() {
    document.querySelector(".menu-ativado").style.width = "250px";
    document.querySelector(".conteudo").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function fecharMenu() {
    document.querySelector(".menu").style.width = "0";
    document.querySelector(".conteudo").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


