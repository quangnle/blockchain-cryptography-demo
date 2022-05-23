// The Jenkins 96 bit mix function:
    // https://web.archive.org/web/20061030103559/http://www.concentric.net/~Ttwang/tech/inthash.htm
    // stolen from Google Chromium's bloom filter
    // https://chromium.googlesource.com/chromium/chromium/+/refs/heads/main/chrome/browser/safe_browsing/bloom_filter.cc
    // thanks dudes!
var seed1 = Math.floor(Math.random() * 2e32);
var seed2 = Math.floor(Math.random() * 2e32);

function hashMix(hash_key) {
	var a = seed1;
	var b = seed2;
	var c = hash_key;
	console.log(a, b, c);

	a -= (b + c);
	a ^= (c >> 13);
	b -= (c + a);
	b ^= (a << 8);
	c -= (a + b);
	c ^= (b >> 13);
	a -= (b + c);
	a ^= (c >> 12);
	b -= (c + a);
	b ^= (a << 16);
	c -= (a + b);
	c ^= (b >> 5);
	a -= (b + c);
	a ^= (c >> 3);
	b -= (c + a);
	b ^= (a << 10);
	c -= (a + b);
	c ^= (b >> 15);

	//XXX: can this even be negative? It was designed to run with uints. Javascript is dumb.
	return Math.abs(c);
}