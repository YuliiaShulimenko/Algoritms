/////////////////ЗАДАЧА/////////////////////

////////////////////////////////////////////
// Реализовать методы   в классе MyLinkedList


class Node {
    data
    next

    constructor(data) {
        this.data = data
        this.next = null
    }
    setNext(next) {
        this.next = next
    }
}

class MyLinkedList {
    head
    constructor() {
        this.head = null
    }
}  

removeHead = function () {
    if (this.head !== null) {
        if (this.head.next === null) {
            this.head = null;
        } else {
            const previousHead = this.head;
            this.head = this.head.next;
            previousHead.next = null;
        }
    }
};

removeTail = function () {
    if (this.head !== null) {
        if (this.head.next === null) {
            this.head = null;
        } else {
            let node = this.head;
            let prevNode = null;
            while (node.next !== null) {
                prevNode = node;
                node = node.next;
            }
            prevNode.next = null;
        }
    }
};


removeTail = function () {
    if (this.head !== null) {
        // if the list has only one element
        if (this.head.next === null) {
            this.head = null;
        } else {
            let node = this.head;
            let prevNode = null;
            while (node.next !== null) {
                prevNode = node;
                node = node.next;
            }
            prevNode.next = null;
        }
    }
};

////////////////////////////////////////////
// retrieves data by index
// Node(5) -> Node(6) -> Node(7)
// get(2) returns 7
// get = function (index) {
// }

get = function (index) {
    if (this.head !== null) {
        let node = this.head;
        if (index === 0) {
            console.log(node.data);
        } else {
            let count = 0;
            while (count < index) {
                if (node.next != null) {
                    node = node.next;
                    count++;
                } else {
                    node.data = undefined;
                    break;
                }
            }
            console.log(node.data);
        }
    }
};


/////////////////////////////////////////////
// Node(5) -> Node(6) -> Node(7)
// pushToIndex(8, 1)
// result: Node(5) -> Node(8) -> Node(6) -> Node(7)
// pushToIndex = function (data, index) {
// }


pushToIndex = function (data, index) {
    let count = 0;
    if (count == index) {
        list.pushToHead(data);
    } else {
        let prevNode = this.head;
        count++;
        while (count < index) {
            if (prevNode.next != null) {
                prevNode = prevNode.next;
            } else {
                const nextNode = new Node(null);
                list.pushToTail(nextNode.data);
                prevNode = prevNode.next;
            }
            count++;
        }
        const newNode = new Node(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }
};


