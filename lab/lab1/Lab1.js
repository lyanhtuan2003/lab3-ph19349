const Game = {
  Team1: "Việt Nam",
  Team2: "Agentina",
  Player: [
    [
      'Van Lam', 'Ngoc Hai', 'Quang Hai', 'Van Duc', 'Cong Phuong', 'Tan Tai', 'Van Hau', 'Tien Linh', 'Hung Dung', 'Thanh Binh', 'Duy Manh'
    ],
    [
      'Emiliano Martinez', 'Messi', 'Lisandro Martinez', 'Nicolas Tagliafico', 'Juan Foyth', 'Marcos Acuna', 'Ronaldo', 'M3p', 'Poppa', 'German Pezzella', 'Cristian Romero'
    ],
  ],
  score: '4:0',
  scored: ['Anh Tuan', 'Quang Hai', 'Van Lam', 'Hung Dung'],
  odds: {
    Team1: 5,
    draw: 1,
    Team2: 4
  },
};
console.log('======>lab 1.1>======')
//1
const [Player1, Player2] = Game.Player;
console.log(Player1, Player2);
//2
const [GkVie, ...fieldPlayers] = Player1;
console.log(GkVie, fieldPlayers);
const [GkAgr, ...fieldPlayerss] = Player2;
console.log(GkAgr, fieldPlayerss);
//3
const allPlayers = [...Player1, ...Player2];
console.log(allPlayers);
//4 
const players1Final = [...Player1, 'Anh Tuan', 'Van Toan', 'Domixi'];
console.log(players1Final);
//5
const {
  odds: { Team1, draw, Team2 },
} = Game;
console.log(Team1, draw, Team2);
//6
function printGoals(...AddCheck) {
  console.log(AddCheck)
  console.log(`${AddCheck.length} số bàn đã ghi`)
}
printGoals(...Game.scored)
//7
Team1 < Team2 || console.log('team1 win')

console.log('======>lab 1.2<=======')
//1 c1
// for (let [i, byText] of Game.scored.entries()) {
//   console.log(`Goal ${i + 1} ${byText}`)
// }
//c2
Game.scored.forEach((value, index) => {
  console.log(`Goal ${index + 1} ${value}`)
});
//2
const odd = Object.values(Game.odds)
let baseLit = 0;
for (let betTerTao of odd)
  (baseLit += betTerTao);
baseLit /= odd.length
console.log(baseLit)
//3
for (let [team, Repones] of Object.entries(Game.odds)) {
  const LaLa = team === "draw" ? 'draw' : ` victory ${Game[team]}`
  console.log(` odd of  ${LaLa} ${Repones}`)
}













