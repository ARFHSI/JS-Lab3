let user ={
    name:"Ahmad",
    email:"ahmad@gmail.com",
    ID:12345678,
    availablity: function(){
        
        if(th == false){
           console.log("not available to work")

        }
    },
       Address: {
         country:"KSA",
         city: "MADINAH",
         naighborhood:"SULTANAH",
        },
skills: ["application support","ITSupport"]
 ,

};


user.ID = 1234//تعديل
delete user.email//حذف 
console.log(user)
console.log(user.name)
console.log(user.availablity())
console.log(user.Address)
console.log(user.skills)








// student.fullName();

// console.log(student.name)
// student.grade="A+"
// console.log(student)
// delete student.age//حذف 
// console.log(student)

// student.name = "majeed"//تعديل
// console.log(student)