var mb_prices = {
	red: 250,
	green: 500,
	blue: 1000
};
var mb_bank = 0; //bank status

var mb_nextwin = {
	red: 0,
	green: 0,
	blue: 0
};
var mb_fee = 10; //%
var mb_fees = 0; //lifetime fees

//Generate mysterybox prize
function generatePrize(box_type) {
	var fee = ((mb_nextwin[box_type] - mb_prices[box_type]) / 100) * mb_fee;
	if (mb_bank <= -(mb_nextwin[box_type] + fee)) {
		prize = mb_nextwin[box_type];
		switch (box_type) {
			case 'red':
				var win = Random(251, 500);
				if (Random(1, 4) == 1) { //25%
					win = Random(501, 1000);
					if (Random(1, 2) == 1) { //12.5%
						win = Random(1001, 2500);
						if (Random(1, 4) == 1) { //3.125%
							win = Random(2501, 5000);
							if (Random(1, 2) == 1) { //1.5625%
								win = Random(5001, 10000);
								if (Random(1, 3) == 1) { //0.521%
									win = 20000;
								}
							}
						}
					}
				}
				break;
			case 'green':
				var win = Random(501, 1000);
				if (Random(1, 4) == 1) { //25%
					win = Random(1001, 2500);
					if (Random(1, 2) == 1) { //12.5%
						win = Random(2501, 5000);
						if (Random(1, 4) == 1) { //3.125%
							win = Random(5001, 10000);
							if (Random(1, 2) == 1) { //1.5625%
								win = Random(10001, 12500);
								if (Random(1, 2) == 1) { //0.78125%
									win = 20000;
								}
							}
						}
					}
				}
				break;
			case 'blue':
				var win = Random(1001, 2500);
				if (Random(1, 4) == 1) { //25%
					win = Random(2501, 5000);
					if (Random(1, 2) == 1) { //12.5%
						win = Random(5001, 10000);
						if (Random(1, 4) == 1) { //3.125%
							win = Random(10001, 15000);
							if (Random(1, 2) == 1) { //1.5625%
								win = 20000;
							}
						}
					}
				}
				break;
		}
		mb_bank += mb_nextwin[box_type] + fee;
		mb_nextwin[box_type] = win;
		mb_fees += fee;
	} else {
		switch (box_type) {
			case 'red':
				prize = Random(50, 250);
				break;
			case 'green':
				prize = Random(125, 500);
				break;
			case 'blue':
				prize = Random(350, 1000);
				break;
		}
		mb_bank -= mb_prices[box_type] - prize;
	}
	return prize;
}

function Random(bottom, top) {
	return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}