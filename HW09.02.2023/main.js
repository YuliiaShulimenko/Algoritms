 
// Я не могу решить остальные задачи, мне непонятно,на тесте я сделала максимум что понимаю- Слишком сложные задачи, некоторые ни то,что джун,мидл ни сразу решит. А мы даже не джуны еще .Лично для меня слишком сложно и непонятно,поэтому извините,но решения из интернета я воровать не ххочу ради галочки.Лучше скажу честно, что не особо в алгоритмах понимаю 😊




/////////////// 1 ////////////////
//An algorithm is...
// - a finite set of well-defined rules.

/////////////// 2 ////////////////
// Check algorithm properties...

// - should terminate after a finite time.
// - makes sure every step should do some work.

/////////////// 3 ////////////////
// Asymptotic analysis is...

// - an analysis of the time it will take to process a very large dataset.

/////////////// 4 ////////////////
// What does 'n' O(n) mean?

// - that the algorithm will require at most 'n' steps.

/////////////// 5 ////////////////
// The asymptotic running time of an algorithm is expressed by... 

// - big "O" notation.

/////////////// 6 ////////////////
// Analyzing algorithms we count...

// - time complexity and space complexity.

/////////////// 7 ////////////////
// Which algorithms do have O(n log n) average time complexity?

// - Merge sort
// - Quick sort

/////////////// 8 ////////////////
// What is recursion?

// -The process where a function defines itself or its type.

/////////////// 9 ////////////////

// A typical 'divide and conquer' algorithm solves a problem through the following steps:

// - divide 
// - conquer
// - combine

/////////////// 10 ////////////////
// Amortized analysis are used for...

// -algorithms where some operations are very slow, but others are faster.

 /////////////// 11 ////////////////
// What are the main types of amortized analysis?

// - aggregate analysis
// - accounting method
// - potential method

 /////////////// 12 ////////////////
// What is Dynamic programming?

// - Simple recursion optimization.

 /////////////// 13 ////////////////
//  Stack is...

// - LIFO

  /////////////// 14 ////////////////
//   Queue is...

//   - FIFO

  /////////////// 15 ////////////////
// Select all that classify data structures.

// - Array
// - Map
// - LinkedList
// - Stack
// - Queue
// - Tree
// - Graph

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////////////////////////ЗАДАЧИ/////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


// Given an array 'arr[]' of positive integers, flip each group of subarrays to size 'K.'
// Example 1:
// K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: The first group consists of elements
// 1, 2, 3. The second group consists of 4,5.

// Example 2:
// K = 3
// arr[] = {5,6,8,9}
// Output: 8 6 5 9

// Your task:
// To write a reverse (arr, k) function that takes 'arr[]' and 'K' as input and modifies the array into place.

let arr = [5,6,8,9];
function reverse(arr, k){
    let start = [];
    let end = [];
    for(let i = 0; i < arr.length; i++){
        if(i < k){
            start[i] = arr[k-i - 1]
        } else end.push(arr[i])
    }
    return [...start, ...end]
}




// Ниже представлены задачи трёх уровней, обычные, с одной и двумя звёздочками. Можно выбрать Нужно решить одну любую задачу, уровень сложности выбираете самостоятельно



//////////////////////////////////////////////////////////////

// Find the smallest positive element, which given sorted array doesn't contain. All elements of an array are sorted

// Example: [1, 2, 6, 31]
// Result: 3
//
// Example: [2, 3, 4, 6, 9, 11, 15]
// Result: 1

//Expected time complexity O(log(n))

// signature example java
// public static int smallestMissing(int[] arr) {
// }
// let arr = [0, 2, 4, 6, 8, -2, -4, -6]
// function sort(A)
// {
//     let n = A.length;
//     let present = new Array(n+1);
     
     
//     for(let i=0;i<n+1;i++)
//     {
//         present[i]=false;
//     }
//     for (let i = 0; i < n; i++)
//     {
//         if (A[i] > 0 && A[i] <= n)
//         {
//             present[A[i]] = true;
//         }
//     }
//     for (let i = 1; i <= n; i++)
//     {
//         if (!present[i])
//         {
//             return i;
//         }
//     }
//     return n + 1;
// }
// Find in a sorted array the closest element to the given number from below and above, -1 otherwise
// Example: arr = [0, 1, 2, 6, 31], n = 5
// Result: below = 2, above = 6
//
// Example: arr = [7, 10, 15, 21, 29], n = 31
// Result: below = 29, above = -1

// Example: arr = [7, 10, 15, 21, 29], n = 5
// Result: below = -1, above = 7


//Expected time complexity O(log(n))

// signature example java
// public static int[] findFloor(int[] arr) {
// }
/////////////////////////////////////////////////////////////
// Задачка со звёздочкой *
// Implement merge sort algorithm for a singly linked list

// Example: given Node(5) -> Node(3) -> Node(6) -> Node(2)

// return Node(2) -> Node(3) -> Node(5) -> Node(6)


// java example of Node

// class Node {
// private int data;
// private Node next;

// Node(int data, Node next) {
// this.data = data;
// this.next = next;
// }

// public int getData() {
// return data;
// }

// public void setData(int data) {
// this.data = data;
// }

// public Node getNext() {
// return next;
// }

// public void setNext(Node next) {
// this.next = next;
// }
// }

// public static Node mergeSort(Node head) {

// }

// class Node {
//     data
//     next

//     constructor(data) {
//         this.data = data
//         this.next = next 
//     }
// }
// public void setData ( int data) {
// this . data= data;
// }
// /////////////////////////////////////////////////////////////
// // Задачка со звёздочкой *
// // Find `k` closest elements to a given value in a sorted array
// // Example: arr = [0, 5, 8, 10, 12, 16, 17, 22], k = 3, n = 11
// // Result: 8, 10, 12
// //
// // Example: arr = [8, 9, 11, 15, 19,22, 25, 26, 27], k = 4, n = 22
// // Result: 19, 22, 25, 26

// public static int[] findKClosest(int[] arr, int k, int n) {
// }
// /////////////////////////////////////////////////////////////
// // Задачка со двумя звёздочками **
// // Sort a doubly-linked list using quick sort
// Example:
// given Node(5) <-> Node(3) <-> Node(6) <-> Node(2)

// return Node(2) <-> Node(3) <-> Node(5) <-> Node(6)


// class Node {
// int data;
// Node next;
// Node prev;

// public Node(int data, Node next, Node prev) {
// this.data = data;
// this.next = next;
// this.prev = prev;
// }

// public int getData() {
// return data;
// }

// public void setData(int data) {
// this.data = data;
// }

// public Node getNext() {
// return next;
// }

// public void setNext(Node next) {
// this.next = next;
// }

// public Node getPrev() {
// return prev;
// }

// public void setPrev(Node prev) {
// this.prev = prev;
// }
// }

// public static Node quickSort(Node head) {

// }
/////////////////////////////////////////////////////////////
// Задачка со двумя звёздочками **
// You are given an array that consists of positive and negative integers. Find the sum of maximum subarray using divide and conquer
// Subarray - any consequent array within array
// arr = [1, 2, 3] has following subarrays:
// []
// [1]
// [2]
// [3]
// [1,2]
// [2,3]
// [1,2,3]

// Example:
// arr = [0, -5, -3, 10, 9, -11, 17, -22]
// Result: 25 (= 10 + 9 - 11 + 17)
//
// Example: arr = [8, -9, 11, -15, 9, -5, 6, -1, 3, 4]
// Result: 16 (= 9 - 5 + 6 - 1 + 3 + 4)

// public static int findTheMax(int[] arr) {;
// }
// Recursion and dynamic programming
// Баллов: 0 из 0.

// Ниже представлены задачи трёх уровней, обычные, с одной и
//  двумя звёздочками. Можно выбрать Нужно решить одну любую задачу, 
// уровень сложности выбираете самостоятельно

// Given a number representing a distance.
// The task is to count total number of possible ways to cover the distance with 1, 2 and 3 steps.
// Example: n = 3
// Result: 4
// Notes:
// 1 + 1 + 1
// 1 + 2
// 2 + 1
// 3
//
// Example: n = 4
// Result: 7
// Notes:
// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 2 + 1 + 1
// 1 + 1 + 2
// 2 + 2
// 3 + 1
// 1 + 3

// public static int coverDistance(int n) {

// }
// let n =3

// function coverDistance (n)
// {
//     if (n<0)     return 0;
//     if (n==0) return 1;
 
//     return printCountRec(n-1) +
//         printCountRec(n-2) +
//         printCountRec(n-3);
// }
// Given an integer array representing coins
// You can consider each coin can be obtained infinite number of times
//
// You have to find the optimal way to make sum by using different combinations of coins.

// Example: sum = 4, coins[] = {1,2,3},
// Optimal solutions: {2, 2} or {1, 3}

// public static int[] findCoins(int[] arr, int sum) {

// }
// let coins = [1, 2, 3];
// let n = coins.length;
// let sum = 4;
// function countWays(S , m , n)
// {
//     let table = Array(sum+1).fill(0);
//     table[0] = 1;
 
//     for (i=0; i<n; i++)
//         for (j=coins[i]; j<=sum; j++)
//             table[j] += table[j-coins[i]];
 
//     return table[sum];
// }

 /////////////////////////////////////////////////////////////
// Задачка со звёздочкой *
// Given an integer array representing coins
// You can consider each coin can be obtained infinite number of times
//
// You have to find the all ways to make sum by using different combinations of coins.

// Example: sum = 4, coins[] = {1,2,3},
// Result: {1, 1, 1, 1} or {1, 1, 2} or {2, 2} or {1, 3}.

// public static int[] findCoins(int[] arr, int sum) {

// }

/////////////////////////////////////////////////////////////
// Задачка со двумя звёздочками **
// Given an integer array representing coins
// You can consider each coin can be obtained only one time
// You are given k the number of coins that should be returne
// You have to find the all ways to make sum by using different combinations of coins.

// Example: sum = 4, coins[] = {1,1,1,2,3}, k = 3
// Result: {1, 1, 2}

// public static int[] findCoins(int[] arr, int sum, int k) {

// }
// Data structures
// Баллов: 0 из 0.
// Validate brackets sequence given as string

// Example (())
// Result: true

// Example (()()
// Result: false

// Example )()(
// Result: false

// public static boolean validate(String sequence) {

// }
//  boolean check(s: string):    counter = 0    for i = 1 to length(s)      if s[i] == '('        counter++      else        counter--       if counter < 0        return false 

 /////////////////////////////////////////////////////////////
// Задачка со звёздочкой *
// Validate arithmetic expression with numbers and + - * /

// Example 4+5-6*6
// Result: true

// Example 4+-5-6*6
// Result: false

// Example -4/6//6+1-2
// Result: false

// public static boolean validate(String sequence) {

// }
// не знаю

/////////////////////////////////////////////////////////////
// // Задачка со звёздочкой *0