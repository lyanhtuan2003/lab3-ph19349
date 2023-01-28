
//lab 2.1
// const GameEvent = new Map([
//     [17, 'ghi bàn'],
//     [32, 'thay người'],
//     [45, 'thẻ vàng'],
//     [52, 'ghi bàn'],
//     [61, 'thay người'],
//     [64, 'thẻ vàng'],
//     [72, 'thẻ đỏ'],
//     [83, 'thay người'],
//     [86, 'ghi bàn'],
//     [89, 'thay người'],
//     [92, 'ghi bàn'],
// ]);
//1

// const statBat = [...new Set(GameEvent.values())]
// console.log(statBat)

//2
// GameEvent.delete(64)
// console.log(GameEvent)
//3
// console.log(`trung bình cứ sau ${90 / GameEvent.size} phút có 1 sự kiển sảy ra `)
// const time = [...GameEvent.keys()].pop()
// console.log(`trung bình cứ sau ${time / GameEvent.size} phút có 1 sự kiển sảy ra `)
//4
// for (const [min, events] of GameEvent) {
//     const haft = min <= 45 ? 'FIRT' : 'SECCONR';
//     console.log(`[${haft} HAFT] ${min}: ${events}`)
// }

