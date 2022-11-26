Linear Search
1)Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .


Линейный поиск используется для поиска ключевого элемента среди нескольких элементов. 
Линейный поиск сегодня используется меньше, потому что он медленнее, чем бинарный поиск и хеширование.


Алгоритм:


Шаг 1: Обход массива
Шаг 2: Сопоставьте ключевой элемент с элементом массива
Шаг 3: Если ключевой элемент найден, верните позицию индекса элемента массива.
Шаг 4: Если ключевой элемент не найден, верните -1


public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {  // traverse the array
            if (arr[i] == key) { // match the key element with array element
                return i; // return index
            }
        }
        return -1; // not found element
    }

//***ОТВЕТ***

  function linearSearch(arr, key) {
        for (i = 0; i < arr.length; i++) { 
            if (arr[i] == key) {
                return i; 
            }
        }
        return -1;
    }

    /*/ space complexity O(1)
    /*/ time complexity O(n)



2)Find the element that appears once in a sorted array
Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.


Простое решение состоит в обходе массива слева направо. Поскольку массив отсортирован, мы легко можем найти нужный элемент.


Алгоритм:
Шаг 1: Обход массива через один элемент
Шаг 2: Если элемент отличается от первого то мы нашли не задублированный элемент
Шаг 3: Вернем элемент или позицию в массиве
Шаг 4: Если ключевой элемент не найден, верните -1 или что то еще :)
…
Шаг 5: Исправить ошибку ArrayIndexOutOfBoundsException


public static int findElement(int arr[]) {
    int size = arr.length;

//        if (size == 1) {
//            return arr[size - 1];
//        }
//
//        if (arr[size - 2] != arr[size - 1]) {
//            return arr[size - 1];
//        }


    for (int i = 0; i < size; i += 2) {
        if (arr[i] != arr[i + 1]) {
            return arr[i];
        }
    }

    return -1;
}
space complexity O(?)
time complexity O(?)

//***ОТВЕТ***

linearSearch (arr = [1,2,3] ,key = 2)
//first iteration
    // i=0 arr[0] = 1,  key = 2
1 (arr[0])== 2 (key) ==> false

//second iteration
i=1 ,arr[i] = 2,  key = 2
2 (arr[1])== 2 (key) ==> true
return 1 (i); 

 space complexity O(1)
 time complexity O(n)
