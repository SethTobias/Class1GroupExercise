//Create an index.html and link this file to it.
//Make sure to create the corresponding tags to each question
//Make sure to only use querySelector
// 1. Create a 'div tag', inside the div tag make an 'ordered list tag' with an 'attribute'. Set it to a variable.
//    Now use a loop to display the array[member1,member2,member3,member4] inside the ordered list.They need to appear in numbered point form.
// 2. Create a new 'div tag' with a classname. Create 3 objects of people in your group and you may make use of a constructor function or hard coded objects. Now use a loop to loop through each object and display 1 object's information Object structure must include:
// name, surname, age, favHobby, and whether they are a morning person or night person.
// 3. Now make sure to push each object made in Ques2. into an array.
//    Now use the map method to loop through the objects and return an array of names in the group to the console.
// 4. Now use the filter method to check if there is anyone that is younger than 20 and make sure to log/display each person's name 

let myOrderedList = document.querySelector(`[data-orderedList]`);
let myArray = [`Thandile`, `Darren`, `Seth`, `CJ`];
for (members of myArray){
    console.log(members);
}
myOrderedList.innerHTML = `<li>` + myArray.join(`</li><li>`); + `</li>`;

