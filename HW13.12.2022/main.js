
//1.Реализовать алгоритм QuickSort, когда в качестве опорного элемента (pivot) мы выбираем не последний элемент в массиве, а случайный.
let array = [3,13,2,88,17,28,68];
let count = 0;
let less = [];
let next = [];


function quickSort(array) {
	if (array.length <=1) {
		return array
}
	let pivotIndex = Math.floor(array.length * Math.random());
  console.log(pivotIndex);
	let pivot = array[pivotIndex]
let less = [];
let next = [];
	for (let i = 0; i < array.length; i++) {
	count += 1;
	if (i === pivotIndex)
	continue
	if (array[i] < pivot) {
	less.push(array[i])

} else {
	next.push(array[i])

}
} return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(array));
console.log(count);


/*ЗадачкаДан массив строк. Нужно найти самый длинный общий префикс, используя парадигму DivideAndConquer.


Пример, 
arr = ["return","retard","reunion","rest"]
prefix = "re"


arr = ["cheer", "cheerful", "cheese"]
prefix = "chee"


arr = ["mirror", "nothing"]
prefix = "" */

let arrayString = ["return", "retard", "reunion", "rest"]
let arrayString = ["cheer", "cheerful", "cheese"]
let arrayString = ["mirror", "nothing"]

let mLength = (arrayString.map(item => item.length)).sort((x, y) => {return x-y})[0];
let prefix = [];

for(let i = 0; i < mLength; i++){
	let letter = arrayString[0][i]
	let countx = 0;
	for(let j=0; j < arrayString.length; j++){
		if (arrayString[j][i] == letter) {

			countx ++;
			if (countx == arrayString.length) {
				prefix.push(letter);
			}
			
		} else break
	}
}

console.log(prefix);
