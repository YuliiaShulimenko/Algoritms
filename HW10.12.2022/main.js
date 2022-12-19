// First level: 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
//      решение 1 - рекурсивно O(n)
//      решение 2 - улучшить решение 1 до O(lon n)



/*=======================1============================*/


//решение 1 - рекурсивно O(n) 

function getExponentiate(x, n) {
	if (n != 1) {
		return (x *= getExponentiate(x, n - 1)); // где n кол-во операций
	}
	return x;
}
console.log('x^n', getExponentiate(2, 3));

//x*x(like factorial)

// решение 2 - улучшить решение 1 до O(lon n) ============================

function getBinary(x, n) {
	if (n != 1) {
		if (n % 2 != 0) {
			return getBinary(x, (n - 1) / 2) * getBinary(x, (n - 1) / 2) * x;
		} else {
			return getBinary(x, n / 2) * getBinary(x, n / 2);
		}
	}
	return x;
}

console.log('x^n', getBinary(2, 5));

//o(n)time complaxaty
x=2
n=8
2 v stepeny 8 =256
2*2*2*2*2*2*2*2=(2*2*2*2*)*(2*2*2*2*2)=(2*2)*(2*2)*(2*2*(2*2)=2*2
(4*4)*(4*4)=16*16
4*4=16
16*16=256

// n может быть нечётным или чётным





// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.



direrct solution
получаем из двух массивов один [100 112 256 349 770 72 86 113 119 265 445 892]
отсортировали массивы
получился отсортированный массив 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892

return k-1 нужен элемент на 7 позиции o(1)
o(k) k=n+m
o(klog k) dlya pervogo mass




второе решение мердж

[100 112 256 349 770] [72 86 113 119 265 445 892]
sortArr=[ 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]
return sortArr [k-1]


// Solution. Inspiration


// Direct solution #1 (not optimal, naive approach)
 O(k), k = n + m (n - length of array A, m - length of array B,
k -сумма длин массивов А и В
// Sort the result array (merge sort)

сортировка слиянием требует  O(n log n) n - длина массива
Мы применяем сортировку слиянием к массиву длины k
оценка O (k log k), where k = n + m  ( O((n + m) * log (n + m)) )
O(1)
O(k) + O ( k log k) + O(1) ~ O(k log k), where k = n + m

arr = [100, 112, 256, 349, 770, 72, 86, 113, 119, 265, 445, 892] наш массив
n = 5, m = 7, k = 12
sortedArr = [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892] сортированный массив

time complexity O(k log k) k = n + m 

// merge approach
// Merge two sorted arrays O(k), 
k = n + m (mergeSortedArrays from previous lecture)
k-1 index // O(1)

// O(k) + O(1) ~ O(k) , k = n + m

sortedArr = merge([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892])
sortedArr = [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]
return sortedArr[k-1]

time complexity O(k), k = n + m





// 3. Имея отсортированный массив arr[] и число x, напишите функцию,
// которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n)
 arr[] = {1, 1, 2, 2, 2, 2, 3,} 
 x = 2
Вывод: 4 раза

// Direct approach  #1 (naive)
time complexity O(n),  
n - length of array
function countIns(sortedArr, x) {
    let count = 0
    for(let i = 0; i < sortedArr.length; i++) {
        if( sortedArr[i] === x) count++
    }
    return count
}

// Binary search approach #2

// find index of x in sorted array using binary search // O(log n)
// xIndex
 O(1)

// arr[] = [1, 1, 2, 2, 2, 2, 3] 
// x = 2
// apply binary search
// midElement = 2
// if midElement == x then return current idx
2 == 2
xIndex = 3
// while arr[xIndex] == x do increase count and go left
// while arr[xIndex] == x do increase count and go right

time complexity O(log(n))

