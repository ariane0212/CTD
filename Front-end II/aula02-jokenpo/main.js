function jogar() {
    if (
        document.getElementById("pedra").onClick == false &&
        document.getElementById("papel").onClick == false &&
        document.getElementById("tesoura").onClick == false
    ) {
    } else {
        //lógica principal
        var sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src = "pctesoura.png";
                break;
        }
        //verificar o vencedor ou declarar empate
        if (
            (document.getElementById("pedra").onClick == true && sorteio == 0) ||
            (document.getElementById("papel").onClick == true && sorteio == 1) ||
            (document.getElementById("tesoura").onClick == true && sorteio == 2)
        ) {
            document.getElementById("placar").innerHTML = "Empate";
        } else if (
            (document.getElementById("pedra").onClick == true && sorteio == 0) ||
            (document.getElementById("papel").onClick == true && sorteio == 1) ||
            (document.getElementById("tesoura").onClick == true && sorteio == 2)
        ) {
            document.getElementById("placar").innerHTML = "Jogador Venceu";
        } else {
            document.getElementById("placar").innerHTML = "Computador Venceu";
        }
    }
}
function resetar(){
	document.getElementById("pc").src="pc.png";
	document.getElementById("placar").innerHTML="";
}