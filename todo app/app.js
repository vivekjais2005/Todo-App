let todo= [];

let req = prompt("enter your request");

while(true){
    if(req =="quit"){
        console.log("quiting App");
        break;
    }
    if(req == "List"){
        console.log("----------------");
        for(task of todo){
            console.log(task);
        }
        console.log("----------------");
    }
    else if(req == "Add"){
        let task = prompt("enter the task you want to add");
        todo.push(task);
        console.log("tASK ADDED");
    }
   
     else if( req == "delete"){
        let idx = prompt("enter the the index you want to delete");
          todo.splice(idx ,1);
        console.log("deleted successfully");
     }
      else{
        console.log("wrong request");
      }
     req = prompt("eneter your request");
}