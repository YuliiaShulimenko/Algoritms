// 1. Классическая Queue - реализовать используя массив (Array)

//     pushToEnd(int data) - вставляет элемент в конец queue
//     remove()            - удаляет элемент из начала queue
//     peek()              - возвращает элемент из начала не удаляя его
//     isEmpty()
//     size()
//     начало (sample code in java)

//     public class Queue {
//     private int[] arr;      // массив для хранения элементов queue
//     private int head;       // head указывает на передний элемент в queue
//     private int tail;       // tail часть указывает на последний элемент в queue
//     private int capacity;   // максимальная емкость queue
//     private int count;      // текущий размер queue


// Конструктор для инициализации queue

// public Queue(int size)
//     {
//         arr = new int[size];
//         capacity = size;
//         front = 0;
//         rear = -1;
//         count = 0;
//     }
// }


let queue = [];
let head = queue[0];
let tail = queue[queue.length - 1]
let capacity = 100;
let count = 0;


function pushToEnd(data) {
    if (count <= capacity) {
      tail = data;
      count++;
      queue[count - 1] = data;
      head = queue[0]
    }
    return queue
  }

function remove() {
    for (let i = 0; i < count; i++) {
        queue[i] = queue[i + 1]
      }
  if (count > 0) {
    delete queue[0];
    count--;
} else {
    console.log("Массив полный")
}
};

function peek() { //- возвращает элемент не удаляя его
  return head;
};

function isEmpty() {
  return count == 0;
};

function size() {
  return capacity;
};