class MaxHeap {
	constructor () {
		this.list = [];
		this.length = 0;
	}

	push(x) {
		this.list.push(x);
		this.length++;

		let curr = this.length - 1;
		let parent = Math.floor((curr - 1)/2);
		while(curr > 0 && this.list[curr] > this.list[parent]) {
			const temp = this.list[curr];
			this.list[curr] = this.list[parent];
			this.list[parent] = temp;
			curr = parent;
			parent = Math.floor((curr - 1)/2);
		}
	}
	
	pop() {
		let deleted = this.list[0];
		this.list[0] = this.list[this.length - 1];
		this.list[this.length - 1] = deleted;
		this.length--;

		let curr = 0;
		const n = this.length;
		while(curr < n) {
			let max = curr;
			const leftChild = Math.floor((curr * 2) + 1);
			const rightChild = Math.floor((curr * 2) + 2);
			if (leftChild < n && this.list[max] < this.list[leftChild]) {
				max = leftChild;
			}
			if (rightChild < n && this.list[max] < this.list[rightChild]) {
				max = rightChild;
			}
			if (max === curr) {
				break;
			}
			const temp = this.list[curr];
			this.list[curr] = this.list[max];
			this.list[max] = temp;
			curr = max;
		}
		return deleted;
	}
}

// Tester function

// var start = function () {
// 	const maxHeap = new MaxHeap();
// 	[3,6,8,2,4,8,231,356,85,34,7,9,435,1].forEach((val) => maxHeap.push(val));
// 	console.log([3,6,8,2,4,8,231,356,85,34,7,9,435,1].sort((a,b) => b - a));
// 	while(maxHeap.length > 0) {
// 		console.log(maxHeap.pop());
// 	}
// }();