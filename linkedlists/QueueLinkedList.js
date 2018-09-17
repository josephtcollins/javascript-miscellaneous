class Node {
  constructor(value) {
    this.value = value;
    this.link = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  get top() {
    return this.head.value;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.link = newNode;
      this.tail = newNode;
    }
  }

  remove() {
    if (this.head === null) {
      return null
    } else {
      const tempNode = this.head;
      this.head = this.head.link;;

      if (this.front === null) {
        this.rear = null;
      }

      return tempNode.value;
    }

    const valueToReturn = this.head.value;
    this.head = this.head.link;
    return valueToReturn;
  }
}

let ll = new QueueLinkedList();

ll.insert("123");
ll.insert("234");
ll.insert("345");
console.log(ll);

console.log(ll.remove());
console.log(ll.remove());
console.log(ll);
console.log(ll.top);

module.exports = QueueLinkedList;
