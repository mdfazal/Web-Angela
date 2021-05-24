let input = prompt("What would you like to do?");
const todos = ['Task a', 'Task b'];
while(input !== 'Quit' && input !== 'Q'){
    if(input === 'list'){
        console.log('********************')
        for(let i =0;i< todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('********************')
    } else if (input === 'new'){
        const newTodo = prompt('ok what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = prompt ('ok, enter an index to delete');
        console.log(index);
    }
    input = prompt("What would you like to do?")
}
console.log("OK quit the app ")