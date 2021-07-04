const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("#highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score"> ${score.name} - ${score.score}</li>`;
  })
  .join(""); //
// var playerName;
// var playerScore;
// var gameResult = {};
// var highScoreList = [];

// function toHighscoreList() {
//     playerName = $('#nameTag').text();   // for example value "Henry"
//     playerScore = guessedWrong.length;   // for example value 3

//     gameResult = {player: playerName, score: playerScore};
//     highscoreList.push(gameResult);
//     highscoreList.sort(function(a,b) { return (b.score - a.score ) });

//     $('#score1').text(highscoreList[0].player + " - score: "+ highscoreList[0].score);
// };
