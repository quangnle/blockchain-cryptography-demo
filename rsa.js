var RSA = function(p, q){
	this.p = p, this.q = q;
	
	// calculate x^y%m
	function modpow(x, y, m){
		if (y == 0) return 1;
		let t = x;
		let r = 1;
		while (y != 0){
			let  k = y & 1;
			if (k==1) r = (r * t) % m;
			y = y >> 1;
			t = (t * t) % m; 
		}
		return r;
	}
	
	function gcd(a, b){
		if (b == 0) return a;
		return gcd(b, a%b);
	}
	
	this.computeKeys = function(){
		let n = this.p * this.q;
		let lambda = (this.p - 1)*(this.q - 1) / gcd(this.p - 1, this.q - 1);
		let e = 31; // co-prime with lambda
		let d = 1;
		while (d*e%lambda != 1){
			d++;
		}
		
		this.sk = [n, d];
		this.pk	= [n, e];
	}
	
	this.encrypt = function(msg){
		let enc = "";
		let n = this.pk[0];		
		let e = this.pk[1];
		
		for (let i=0; i<msg.length; i++){
			let m = msg.charCodeAt(i);
			enc += String.fromCharCode(modpow(m, e, n));
		}
		return enc;
	}
	
	this.decrypt = function(msg){
		let dec = "";
		let n = this.sk[0];		
		let d = this.sk[1];
		
		for (let i=0; i<msg.length; i++){
			let m = msg.charCodeAt(i);
			dec += String.fromCharCode(modpow(m, d, n));
		}
		return dec;
	}
	
	this.signature = function(msg) {
		return this.decrypt(msg);
	}
	
	this.verify = function(msg, signature){
		return this.encrypt(msg) === signature;
	}
}