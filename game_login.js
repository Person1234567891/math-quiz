var player1
var player2
function addUser(){
    player1 = document.getElementById("p1_name").value
    player2 = document.getElementById("p2_name").value

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "game_page.html"
}
