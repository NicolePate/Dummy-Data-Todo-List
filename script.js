const element = document.getElementById("todo-list")

let filteredTodos = [];

let completedTodos = [];
let incompleteTodos = [];

var inputId = Number(document.getElementById("input-id").value);
var isPopulated = false;


let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

 const populateTodos = () => {
   for (let i = 0; i < arrayOfTodos.length; i++) {
     let list = document.createElement('li');
     let text = document.createTextNode(arrayOfTodos[i].title)
     list.appendChild(text);
     if (!arrayOfTodos[i].completed) {
      list.classList.add("redText");
       } else {
         list.classList.add("greenText");
       }
     element.appendChild(list);
    }
    isPopulated = true;
 }

 const filterTodos = () => {
  inputId = Number(document.getElementById("input-id").value);
   if (isPopulated) {
     element.innerHTML =""
     }
    filteredTodos = arrayOfTodos.filter(array => array.userId == inputId)
    for (let i = 0; i < filteredTodos.length; i++) {
      let list = document.createElement('li');
      let text = document.createTextNode(filteredTodos[i].title)
      list.appendChild(text);
      if (!filteredTodos[i].completed) {
        list.classList.add("redText");
         } else {
           list.classList.add("greenText");
         }
       element.appendChild(list);
    }
  }

  const showCompleteTodos = () => {
       element.innerHTML =""
      completedTodos = arrayOfTodos.filter(array => array.completed == true)
      for (let i = 0; i < completedTodos.length; i++) {
        let list = document.createElement('li');
        let text = document.createTextNode(completedTodos[i].title)
        list.appendChild(text);
             list.classList.add("greenText");
         element.appendChild(list);
      }
    }

    const showIncompleteTodos = () => {
        element.innerHTML =""
       incompleteTodos = arrayOfTodos.filter(array => array.completed == false)
       for (let i = 0; i < incompleteTodos.length; i++) {
         let list = document.createElement('li');
         let text = document.createTextNode(incompleteTodos[i].title)
         list.appendChild(text);
          list.classList.add("redText");  
          element.appendChild(list);
       }
     }