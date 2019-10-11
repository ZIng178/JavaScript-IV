// CODE here for your Lambda Classes
class Person {
    constructor (personAttributes){
     this.name = personAttributes.name;
     this.age = personAttributes.age;
     this.location = personAttributes.location;
    }
    speak (){
        console.log (`Hello ny name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor (instAttributes){
    super (instAttributes);
    this.speciality=instAttributes.speciality;
    this.favLangauge=instAttributes.favLangauge;
    this.catchPhrase=instAttributes.catchPhrase;
    }

    demo (subject){
        return `today we are learning about ${subject}`
    }
    grade (obj,subject){
        return `${obj.name} reveives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor (studentAttributes){
        super(studentAttributes);
        this.previousBackground= studentAttributes.previousBackground;
        this.className=studentAttributes.className;
        this.favSubjects=studentAttributes.favSubjects;
    }

    listSubjects (){
        this.favSubjects.map(item=>console.log(item))
    }
    prAssignemt (subject){
        return `${this.name} has submitted a PR for ${subject}`
    
    }
    sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`
   }
}

class ProjectMangers extends Instructor {
    constructor (managerAttributes){
        super (managerAttributes)
        this.gradClassName=managerAttributes.gradClassName;
        this.favInstructor=managerAttributes.favInstructor;
    }

    standup (channel){
        return `${this.name} announces to ${channel}`
    }

    debugsCode (student){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


 console.log (Person.speak())

