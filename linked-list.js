class LinkedList{
    constructor() {
        this.head = null;
    };

    append(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let currentNode = this.head;
            while (true) {
                if (currentNode.next != null) {
                    currentNode = currentNode.next
                } else {
                    currentNode.next = new Node(value)
                    break
                }
            }

        }
    }

    prepend(value) {
        const newNode = new Node(value)
        
        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }
};

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    };
};

const testList = new LinkedList()

testList.append("2")
testList.prepend("1")
testList.append("3")

console.log(testList)