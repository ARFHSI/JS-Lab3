// let user ={
//     name:"Ahmad",
//     email:"ahmad@gmail.com",
//     ID:12345678,
//     availablity: function(fun){

//         if(th == false){
//            console.log("not available to work")

//         }
//     },
//        Address: {
//          country:"KSA",
//          city: "MADINAH",
//          naighborhood:"SULTANAH",
//         },
// skills: ["application support","ITSupport"]
//  ,

// };


// user.ID = 1234//تعديل
// delete user.email//حذف 
// console.log(user)
// console.log(user.name)
// console.log(user.availablity())
// console.log(user.Address)
// console.log(user.skills)

// ========================== lab 2================================

characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


// 1-Get first name that has blue eyes.
  let BlueEyes = characters.find(character => character.eye_color === "blue");
  let blueEyedName = BlueEyes 
  console.log(blueEyedName +"has blue eyes"); 

  
  // 2-Get first gender that is his mass is over 50
  let massO50 = characters.find(character => character.mass > 50);
  let heavyGender = massO50 
  console.log(heavyGender);

  
  // 3-Get characters with height less than 200
  let height200 = characters.filter(character => character.height < 200);
  console.log(height200); 
  

  // 4-Get all male characters
  let maleCharacters = characters.filter(character => character.gender === "male");
  console.log(maleCharacters); 
  

  // 5-Get array of all names only
  let names = characters.map(character => character.name);
console.log(names);


// 6-Get array of all heights only
let heights = characters.map(character => character.height);
console.log(heights); 


// 7-Sort by mass (low to high)
let sortedByMass = characters.slice().sort((a, b) => a.mass - b.mass);
console.log(sortedByMass); 


// 8-Sort by height (high to low)
let sortHeight = characters.slice().sort((a, b) => b.height - a.height);
console.log(sortHeight); 


// 9-Does every character have mass more than 40?
let MassOver40 = characters.every(character => character.mass > 40);
console.log(MassOver40); 

// 10-Is every character shorter than 200?
let Short200 = characters.every(character => character.height < 200);
console.log(Short200); 

// 11-Is there at least one character with blue eyes?
let hasBlueEyes = characters.some(character => character.eye_color === "blue");
console.log(hasBlueEyes); 


// 12-Is there at least one character taller than 210?
let TallCharacter = characters.some(character => character.height > 210);
console.log(TallCharacter); 
