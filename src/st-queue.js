const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  
  }


  getUnderlyingList() {

    if(this.head) {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      return current;

    } else {
      return null
    }


   
  }

  enqueue(/* value*/ ) {
    // if(this.length === 0) {
    //   this.head = new Queue(value);
    // } else {
    //   let current = this.head;

    //   while(current.next) {
    //     current = current.next;
    //   }
    //   current.next = new Queue(value);
    // }

    // this.length++;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
  }

  dequeue() {
    
    if(this.head) {
      let current = this.head.value;
      this.head = this.head.next;
      return current;
    }
    return null;
   

  }

}
