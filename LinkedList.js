function Linkedlist() {
    function Node(content) {
        this.content = content;
        this.next = this;
        this.prev = this; // this fn is going to return object linked list
    }

    this.head = null;
    this.tail = null;

    this.add = function(content) { // this fn is going to call when we open a 
  /* if list is empty*/ if (!this.head) {          // new application for instance
           this.head = this.tail = new Node(content); // so new item needs to added 
        }                                               // to the list
        else {
            this.tail.next = new Node(content);
 /* if list not empty*/ this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
            this.tail.next = this.head; // we are adding new item to tail node
            this.head.prev = this.tail;//then operation
        }
    }

    this.move_to_front = function(node) { // take a node and move to the front of
        if (node === this.head) {          // the list
            return;
        }
           

          if(node===this.tail){
            this.tail=this.tail.prev;
          }
          if(node!=this.tail){
            node.prev.next=node.next;
            node.next.prev=node.prev;
          }
        // let temp = this.head;
        // let isTailNode = false;

        // while (temp.next !== node)
        //     temp = temp.next;

        // if (temp.next === this.tail)
        //     isTailNode = true;

        // if(!isTailNode){
        //     temp.next = node.next;
        //     node.next.prev = temp;
        // }
        // else{
        //     this.tail = this.tail.prev;
        // }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.tail.next = this.head;
        this.head.prev = this.tail;
    }
}