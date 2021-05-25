//List Functions:



//completed() = eventlistener & elementbyid, set text-decoration to strikethrough
//edit() = eventlistener & elementbyId, populate input fields, change "Add Task" button to "Update" innerHTML
//delete() = eventlistener * elementbyID, call ConfirmDelete function, call render()
//confirmDelete = below & call render()
//---------------------------------
// function ConfirmDelete()
// {
//   var x = confirm("Are you sure you want to delete?");
//   if (x)
//       return true;
//   else
//     return false;
// }
// <input type="button" onclick="ConfirmDelete()"></input>
//--------------------------------















// Creation functions:
//Clear() = set task name & task desc to empty string; innerHTML
//AddTask() = checks if name is not empty string, pushes information into array; call render() 
//render() = update taskList array and display; innerHTML; save array to LocalSession