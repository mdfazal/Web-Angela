let input = prompt("What would you like to do?");
const todos = ['Task a', 'Task b'];
while(input !== 'Quit' && input !== 'Q'){
    if(input === 'list'){
        console.log('********************')
        console.log('********************')
    }
    input = prompt("What would you like to do?")
}
console.log("OK quit the app ")