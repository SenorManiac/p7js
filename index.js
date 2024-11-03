// I need to create an an Object called LinkedList
// That object will take have the values of the head, node, and tail
// A class will needs to be created to push the of the of the head node and tail to the object
// On the initialization of the first value in Linked list Head wont have a value, node will have a value of the list item and tail will be null as well
// on subsequent runs fucntion will push the value new class to end of LinkedList
// We need to update respective tails of the previous item to be the node of the new push

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    toString() {
      let current = this.head;
      let result = '';
      while (current !== null) {
        result += `( ${current.value} ) -> `;
        current = current.next;
      }
      result += 'null';
      return result;
    }
  }
  
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");
  
  console.log(list.toString());