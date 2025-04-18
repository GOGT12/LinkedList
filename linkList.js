import { Node } from "./node.js";

class LinkedList{

    constructor(){
        this.first = null;
    };

    emptyList(){
        /*returns "Empty list" in the console*/
        return 'The list is empty, add nodes to the list.';
    }
    append(value){
        /*add a new node to the end of the list.*/
        if(this.first === null){
            this.first = new Node(value);
            return;
        }
        let currentNode = this.first;
        while (currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    };

    prepend(value){
        /*add a new node to the start of the list.*/
        let exFirstNode = this.first;
        this.first = new Node(value);
        this.first.next = exFirstNode;
    };

    size(){
        /*return the number of nodes in the list.*/
        let num = 0;
        let currentNode = this.first;
        while(currentNode !== null){
            num += 1;
            currentNode = currentNode.next;
        };
        return num;
    }

    head(){
        /*returns the first node in the list.*/
        let currentNode = this.first;
        return currentNode;
    }

    tail(){
        /*returns the last node in the list.*/
        let currentNode = this.first;
        if(currentNode === null){
            return currentNode;
        }
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    at(index){
        /*returns the node at the given index.*/
        if(this.first === null){
            return this.emptyList();
        }
        let size = this.size() - 1 ;
        if (index > size || index < 0){
            return `'invalid index'. Valid from 0 to ${size}`;
        }

        let num = 0;
        let currentNode = this.first;
        while(num !== index){
            num += 1;
            currentNode = currentNode.next;
        };
        return currentNode;
    };

    pop(){
        /*Eliminates the last element in the list.*/
        if(this.first === null){
            return this.emptyList();
        }
        let index = this.size() - 2;
        if (index === -1){
            this.first = null;
        }else {
            let secondToLast = this.at(index);
            secondToLast.next = null;
        };
    };

    contains(value){
        /*returns true if the passed in value is in the list and otherwise returns false.*/
        let currentNode = this.first;
        let size = this.size();
        for(let i = 0; i < size; i++){
            if(currentNode.value === value){
                return true;
            };
            currentNode = currentNode.next;
        };
        return false;
    };

    find(value){
        /*returns the index of the containing value, or null if not found.*/
        let currentNode = this.first;
        let size = this.size();
        for(let i = 0; i < size; i++){
            if(currentNode.value === value){
                return i;
            };
            currentNode = currentNode.next;
        };
        return null;

    };

    insertAt(value,index){
        /*inserts a new node with the provided value at the given index*/
        if(index === 0){
            this.prepend(value);
        }else if(index === this.size()){
            this.append(value);
        }else if(index > this.size() || index < 0){
            console.log(`'invalid index'. Valid from 0 to ${this.size()}`)
        }else{
            let newNode = new Node(value);
            let currentNode = this.at(index);
            let prevNode = this.at(index - 1);
            prevNode.next = newNode;
            newNode.next = currentNode;
        };
    };

    removeAt(index){
        /*emoves the node at the given index.*/
        if(this.first === null){
            return this.emptyList();
        }else if(this.size() === 1){
            this.pop();
        }else if(index === 0){
            let nextNode = this.at(index + 1);
            this.first = nextNode;

        }else if(index >= this.size() || index < 0){
            console.log(`'invalid index'. Valid from 0 to ${this.size() - 1}`);
        }else{
        let prevNode = this.at(index - 1);
        let currentNode = this.at(index);
        prevNode.next = currentNode.next;
        };
    };

    toString(){
        /*Print in the console the list a nodes in a single string.*/
        let currentNode = this.first;

        if(currentNode === null){
            let alert = this.emptyList();
            console.log(alert);
            return;
        }else{
            process.stdout.write(`(${currentNode.value}) -> `);
        };

        while(currentNode.next !== null){
            currentNode = currentNode.next;
            process.stdout.write(`(${currentNode.value}) -> `);
        }
        process.stdout.write(`null\n`);
    };

};


export {LinkedList}
