# csgo.style - Coinflip

Coinflip is minigame based on 50/50 chance of coin flip.

## Tech

Script is written in JavaScript for [node.js]

## How it works

- Function `generateHash(length)` will return string representing hash.
- This hash is generated when game is created and is saved to database. 
- When second player join the game, function `getSide(hash, gameid)` will return integer representing coin side.

## Table of winning percentages
| Side | Percentage |
| ------ | ------ |
| 1 | 50% |
| 2 | 50% |

License
----

MIT

[node.js]: <http://nodejs.org>
