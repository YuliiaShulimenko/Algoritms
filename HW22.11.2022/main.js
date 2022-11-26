First level: Провести ассимптотический анализ для каждой функции.
Написать time complexity  и space complexity


1) function test1(n)
 {
    if (n==1) 
       return; /*O(1)*/
    for (i=1; i<=n; i++)
        for (j=n; j>=1; j--) /*O(n)*/
            console.out("*");
}
/*ОТВЕТ*/
/*space complexity O(n**2) */
/* time complexity O(1) */


2) function test2( n)
{
    let a = 0;
for (i = 0; i < n; i++) /*O(n)*/
    for (j = n; j > i; j--) /* O(n -> n/2) => O(n)*/
        a = a + i + j;

}
/*ОТВЕТ*/
/*space complexity O(n**2) */
/* time complexity O(1) */

3) function test3( n)
{
    let i, j, a = 0; /*O(n)*/
for (i = n/2; i <=n; i++)
    for (j = 2; j <=n; j=j*2) /*O(n)*/
        a=a+n/2;

}
/*ОТВЕТ*/
/*space complexity O(n**2) */
/* time complexity O(1) */



Реализовать алгоритм бинарного поиска поиска заданного ключа в отсортированном массиве.


function binarySearch(sortedArr, key) {


}


Сам алгоритм (+ разбирали на уроке, функция test11):
1) Проверяем, что в массиве хотя бы один елемент, если нет, возвращаем -1 
2)Берём элемент из середины массива
2) Сравниваем его с искомым (key)
3) Если ключ больше, чем найденный элемент, то повторяем процедуру для правой половины массива
 Если ключ меньше, чем найденный элемент, то повторяем процедуру для левой половины массива



 let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 function binarySearch(arr, key) {
	if (arr.length > 0) {
		
		if (arr[index] === key) {
			return 1;
		} else {
			return arr[index] < key
				
		}
	} else {
		return -1;
	}
}

Я НЕ ЗНАЮ КАК РЕШИТЬ эту задачу