console.log("connected");

//EXERCISE 1

 function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`Full name is : ${firstName} ${lastName}`);
    };
};
 
function Student(firstName,lastName,age,academyName, studentId){
    Object.setPrototypeOf(this,new Person(firstName,lastName,age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function(){
        console.log(`The student ${firstName} is studying in the ${academyName} academy`);
    }
};
 
let personOne=  new Student("martina", "jovanova", 26,"sedc","12" );
console.log(personOne);
personOne.study();

//EXERCISE 2

function DesignStudent(first,last,age,academyName,studentId,isStudentOfTheMonth){
    Object.setPrototypeOf(this,new Student(first,last,age,academyName,studentId));
    this.isStudentOfTheMonth=isStudentOfTheMonth;
    this.attendAdobe=function(){console.log(`the student ${this.firstName} is attending an adobe exam`);}
};
function CodeStudents(first,last,age,academyName,studentId,hasIndividualProject,hasGroupProject){
    Object.setPrototypeOf(this,new Student (first,last,age,academyName,studentId));
    this.hasIndividualProject=hasIndividualProject;
    this.hasGroupProject=hasGroupProject;
    this.doProject=function(string){
        if(string.toLowerCase()==="group"){
            this.hasGroupProject= true;
            this.hasIndividualProject=false;
        }else if(string.toLowerCase()==="individual") {
this.hasGroupProject=false;
this.hasIndividualProject=true;
        }else{
            alert("incorrect input,please enter a valid input")
        };
    };
};

function NetworkStudent(first,last,age,academyName,studentId,academyPart=1){
    Object.setPrototypeOf(this,new Student(first,last,age,academyName,studentId));
    this.academyPart;
    this.attendCisco=function(){console.log(`the student ${this.firstName} is doing cisco exam`)};
};

let studentThree= new NetworkStudent("martina","jovanova",26,"sedc . net academy","2222",2);
console.log(studentThree);