angular
	.module('todoApp')
	.controller('todoController', todoController);


function todoController(){

  this.todoList = [
      {description: "Practice adding JS Event Handlers", completed: true, remove: false},
      {description: "Add elements to DOM", completed:false, remove:false},
      {description: "Remove Elements from DOM", completed: true, remove:false},
      {description: "Update text in DOM", completed:false, remove:false}
  ];
	
  this.addTodo= addTodo;
  this.deleteTodo = deleteTodo;
  this.completedTodos = completedTodos;
  this.remainingTodos = remainingTodos;

  function addTodo(){
    this.todoList.unshift({description: this.newtask, completed: false, remove:false});
    this.text = null;
  }

  function deleteTodo($index){
    this.todoList.splice($index, 1);
  }

  function completedTodos(){
    var count = 0;
    for(var i = 0; i<this.todoList.length; i++)
        if(this.todoList[i].done){
          count++;
        }
      
      return count;
    }
    function remainingTodos(){
      var count = 0;
      for(var i = 0; i < this.todoList.length; i++){
        if(this.todoList[i].completed === false){
          count++;
        }
      }
      return count;
    }
}