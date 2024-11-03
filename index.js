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

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
        }
      }
      
    size() {
      let current = this.head;
      let count = 0;
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    }

    head() {
        return this.head;
        }

    tail() {
        return this.tail;
        }
    
    at(index) {
        let current = this.head;
        let count = 0;
        while (current !== null) {
          if (count === index) {
            return current;
          }
          count++;
          current = current.next;
        }
        return null;
      }
    
    pop() {
        if (this.head === null) {
          return null;
        }
        if (this.head === this.tail) {
          const node = this.head;
          this.head = null;
          this.tail = null;
          return node;
        }
        const node = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return node;
      }

    contains(value) {
        let current = this.head;
        while (current !== null) {
          if (current.value === value) {
            return true;
          }
          current = current.next;
        }
        return false;
      }
    
    find(value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
          if (current.value === value) {
            return index;
          }
          index++;
          current = current.next;
        }
        return -1;
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
  console.log(list.size());
  console.log(list.at(3));
  console.log(list.find("parrot"));