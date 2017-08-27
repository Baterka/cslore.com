//Generate hash (We using 20 chars for coinflip hash)
function generateHash(length) {
    var charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var hash = '';
    for (var i = 0; i < length h; i++) {
    	var randomPoz = Math.floor(Math.random() * charset.length);
    	hash += charset.substring(randomPoz,randomPoz+1);
    }
    return hash;
}

//Generate side
function getSide(hash, gameid){
	var sh = sha256(hash+'-'+gameid);
	side = sh.substr(0, 8);
	side = parseInt(side, 16);
	side = math.abs(side) % 2;
	return side;
}