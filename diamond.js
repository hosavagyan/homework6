const printDiamondRec = function(n, char){
		if (n % 2 === 0) {
			n = n-1;
		}
		const addchar = function(num,symbol){
			if (num<=0) return"";
			return symbol + addchar(num-1,symbol);
		}

		const helper = function(line,spacenum,count){
			if (line<=0) return"";
			console.log(addchar(spacenum," ") + addchar(count,char))
			if (line >= n/2 +1) {
				helper(line - 1, spacenum-1, count+2);
			} else {
				helper(line - 1, spacenum+1, count-2);
			}
		}

		helper(n, (n-1)/2, 1);
	}

	printDiamond(5,"@");
const printDiamondFor = function(n,char){
		const addchar = function(num,symbol){
			let finalString = "";
			for (let i = 0 ; i < num; i++) {
				finalString = finalString + symbol;
			}
			return finalString;
		
		}
		let spaceNum = (n-1)/2;
		let symbolNum = 1;
		for (let i = 1; i <= n; i++) {
			console.log(addchar(spaceNum, " ") + addchar(symbolNum, char))
			if (i < n/2) {
				spaceNum -= 1;
				symbolNum += 2;
			} else {
				spaceNum += 1;
				symbolNum -= 2;
			}
		}
	}
	printDiamond(5, "@");