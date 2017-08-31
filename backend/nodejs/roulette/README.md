# csgo.style - Mysterybox

Mysterybox is minigame based on random prize generation.

## Tech

Script is written in JavaScript for [node.js]

## How it works

- Function `generatePrize(box_type)` will return integer representing prize.
- Script pre-generate every win and counting when he can release prize. 
- Script will not allow the bank to go into minus.
- Script from each profit round takes a few percent fee.

## Table of winning percentages
#### Red box
| Prize | Percentage |
| ------ | ------ |
| 251  - 500 | 100% |
| 501 - 1000 | 25% |
| 1001 - 2500 | 12.5% |
| 2501 - 5000 | 3.125% |
| 5001 - 10000 | 1.5625% |
| 20000 (Jackpot) | ~0.521% |
#### Green box
| Prize | Percentage |
| ------ | ------ |
| 251  - 1000 | 100% |
| 1001 - 2500 | 25% |
| 2501 - 5000 | 12.5% |
| 5001 - 10000 | 3.125% |
| 10001 - 12500 | 1.5625% |
| 20000 (Jackpot) | 0.78125% |
#### Blue box
| Prize | Percentage |
| ------ | ------ |
| 1001  - 2500 | 100% |
| 2501 - 5000 | 25% |
| 5001 - 10000 | 12.5% |
| 10001 - 15000 | 3.125% |
| 20000 (Jackpot) | 1.5625% |

License
----

MIT

[node.js]: <http://nodejs.org>
