for (const [i, players] of Gamepad.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for(const[team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw : `victory ${game[team]};
    console.log(`Odd of ${teamStr} ${odd}`);
    '
}