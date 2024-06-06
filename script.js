const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum = 0
	let ans = []
	let start = 0
	let end = 0
	for(let [index,i] of arr.entries()){
		 sum += i
		if(sum > n){
			ans.push(arr.slice(start,index))
			start = index
			sum = i
		}
		
	}
	return ans
};

//const n = prompt("Enter n: ");
//alert(JSON.stringify(divide(arr, n)));
