
const myname = "Sarah AlRashidi";
const birth = 1995;

function printName (){
    console.log("Sarah AlRashidi");
}
printName();

function printAge(year){
    age = 2024 - year;
    return(age);
}
printAge(birth);


function printAgeAndName(birth,name){
    Age = 2024 - birth
    console.log("Hello " + name, "you are " + Age, "years old");
}

printAgeAndName(birth,myname);

function printHello(name, language) {
    if (language === "en") {
        console.log("Hello " + name);
    } else if (language === "es") {
        console.log("Hola " + name);
    } else if (language === "fr") {
        console.log("Bonjour " + name);
    } else if (language === "tr") {
        console.log("Merhaba " + name);
    }
}

printHello(myname, "es");

function printMax(num1,num2){
    if (num1 > num2){
        console.log(num1);
    }
    else if (num1 < num2){
        console.log(num2);
    } else {
        console.log("the numbers " + num1, " and " + num2, " are equal");
    }
}

printMax(1,2);