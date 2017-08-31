# csgo.style - Roulette

Minigame based on Casino Roulette (Simplified).

## Tech

Script is written in JavaScript for [node.js]

## How it works

- Function `generateNum(hash, currentRollID)` will return integer representing winning number.
- `hash` is generated every midnight by `generateHash()` function and saved in database. 
- `currentRollID` is ID of current round.

## Table of prizes
| Number | Color | Prize
| ------ | ------ |
| 1-7 | RED | Bet amount x2  |
| 8-14 | BLACK | Bet amount x2 |
| 0 | GREEN | Bet amount x14 |

License
----

MIT

[node.js]: <http://nodejs.org>
