function Triplet(arr, d) {
	let ele = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] - arr[i] == d) {
			ele++;
		}
	}
    console.log(ele);
}
Triplet([3, 2, 5, 8, 10, 11], 3);
