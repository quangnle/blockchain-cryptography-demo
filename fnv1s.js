var FNV1s = function(msg) {
    // thanks Borgar!
    // http://stackoverflow.com/questions/1240408/reading-bytes-from-a-javascript-string/1242596#1242596
    function stringToBytes(str) {
        var ch, st, re = [];
        for (var i = 0; i < str.length; i++) {
            ch = str.charCodeAt(i); // get char
            st = []; // set up "stack"
            do {
                st.push(ch & 0xFF); // push byte to stack
                ch = ch >> 8; // shift value down by 1 byte
            }
            while (ch);
            // add stack contents to result
            // done because chars have "wrong" endianness
            re = re.concat(st.reverse());
        }
        // return an array of bytes
        return re;
    }

    this.hash = function(str) {
		let FNVPRIME = 0x01000193;
		let FNVINIT = 0x811c9dc5;
		
        var bytes = stringToBytes(str);
        var hash = FNVINIT;
        for (var i = 0; i < bytes.length; i++) {
            hash *= FNVPRIME;
            hash ^= bytes[i];
        }
        return Math.abs(hash);
    }
}