
const scheduler = (Title, Description,date) => {

  const task = {
   Title: Title,
   Description: Description,
   date:date
 };

 return task; 
};


const Monday = scheduler('Monday Morning', '8:30 it\'s typing time','22/02/2024');
const Tuesday = scheduler('Tue Afternoon', '12:00 lunch break','23/02/2024');
const Wednesday = scheduler('wed Evening', '6:30  prayer','24/02/2024');
const Thursday = scheduler('thurs Morning', '8:50 Standup session','25/02/2024');
const Friday= scheduler('Fri Afternoon', '12:00 lunch with my team','26/02/2024');
const Saturday= scheduler('sat Evening', '6:00 basketball practice','26/02/2024');

console.log(Monday);
/*console.log(Tuesday);
console.log(Wednesday);
console.log(Thursday);
console.log(Friday);
console.log(Saturday);*/

 fuction:(sortdates);{
 const sorted=task.slice().sort((a,b) => dueDate(a.date) - dueDate(b.date));
 sorted.forEach(task=>{
   console.log(task);
 })
   
 }


const markasdone=function(){
for(let i in task){
  if (markasdone===task) {
    console.log(`${task}?"completed":"Incompleted"`);
    
  }
}
}
;




 // Function to mark a task as completed
function completeTask (title) {
   this.tasks.forEach(task => {
     if (task.title === title) {
       task.completed = true;}})
};