

function repeatString(string, times) {
	var sOut = "";
	while (times > 0) {sOut += string; times--; }
	return sOut;
}

function get_random_number(maxNum) {
	let num = Math.floor(Math.random() * maxNum) + 1;
	return num;
}

function pad_zero_num (num, len) {
	let sNum = num.toString();
	let sZeros =repeatString('0', len - sNum.length)	
	sNum = sZeros + sNum;
	return sNum;
}


function getRequests() {
	var s1 = location.search.substring(1, location.search.length).split('&');
	var r = {};  var s2;  var i;
	for (i = 0; i < s1.length; i += 1) {
		s2 = s1[i].split('=');
		r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
	}
	return r;
};
