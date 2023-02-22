const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(
    `An event happened, on average, every ${90 / game.Events.size} minutes`

);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`

);
for (const[min,event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}