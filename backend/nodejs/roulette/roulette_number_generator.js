//Generate hash (We using SHA256 hash)
function generateHash(){
	var time = Random(1000000000, 9999999999);
	var no_hash = time.Random(1,100).Random(1,10000).Random(1,10000000);
	var hash = sha256(no_hash);
	return [hash, no_hash];
}

//Generate winning number
function generateNum(hash, currentRollID){
	var sh = sha256(hash+'-'+currentRollID);
	roll = sh.substr(0, 8);
	roll = parseInt(roll, 16);
	roll = math.abs(roll) % 15;
	return roll;
}

function Random(bottom, top) {
	return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}