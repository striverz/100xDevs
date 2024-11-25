/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
     this.todo=[];
  }

  add(s){
    this.todo.push(s);
  }

  remove(ind){
    this.todo=this.todo.filter((ele,indx)=>ind!=indx);
  }

  update(index,s){
    if (index >= 0 && index < this.todo.length) {
      this.todo[index] = s;
    }
  }
  getAll(){
    return this.todo;
  }
  get(index){
    if (index >= 0 && index < this.todo.length) {
      return this.todo[index];
    }
    else return null;
  }
  clear(){
    this.todo=[];
  }

}

module.exports = Todo;
