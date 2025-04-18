import { LinkedList } from "./linkList.js";

const list = new LinkedList();



list.append("dog");
list.append("cat");
list.append("parrot");
/*
list.append("hamster");
list.append("snake");
list.append("turtle");
*/
list.toString();
//list.removeAt(3)
//list.insertAt('whale',2)
console.log(list.at(2));

list.toString();
