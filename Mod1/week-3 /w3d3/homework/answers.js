/////  W3D3  /////
// GETTING STARTED //
// 1. Created homework folder inside W3D3 folder. Created file answers.js inside homework folder.
// 
// DATATYPE REFRESHER  //
//
// 1. A light switch that can be either on or off.
//    datatype: boolean
   const lightSwitch = false;
        if (lightSwitch) {
            console.log("the light is on");
        } else {
            console.log("the light is off");
        }
    
//
// 2. A user's email address:
//    datatype: string
    const userEmail = "kimberdepriest@gmail.com";
        console.log(userEmail)
    //could  also be an object 
    const user = {
        name: "Kimmy",
        address: "Columbus, OH",
        emailAddress: "kimberdepriest@gmail.com",
    }
        console.log(user.emailAddress)
//
//  3. A spaceship with a hull, laser blasters, tractor beam, and Warp drive
//      datatype: array
    const theEnterprise = ["hull", "laser blaster", "tractor beam", "warp drive"];
        console.log(theEnterprise)

//  4.  A list of student names from our class
//       datatype: array
    const amKindergarten = ["Lisa", "Billy", "Sarah", "Tommy", "Ben", "Jill"];
        console.log(amKindergarten)

// 5.  A list of student names from our class, each with a location.
//      datatype: multi-dimensional array
    const firstGrade = [["Lisa","desk1"], ["Billy", "desk2"],["Sarah","desk3"],
         ["Ben","desk5"], ["Jill", "desk6"]];
        console.log(firstGrade)

    const ourClass = [["Lisa","desk1",["Paw Patrol", "SpongeBob"]], ["Billy", "desk2",["Peppa Pig", "Shaun the Sheep"]],["Sarah","desk3",["WonderPets", "Hey Arnold"]],
        ["Ben","desk5",["Rugrats", "Sesame Street"]], ["Jill", "desk6",["Shimmer & Shine"]]]
        console.log(ourClass)

//
//  TAKE IT EASY //
//
//  1. Make an array that holds all the colors of the rainbow. 
    const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        console.log(rainbowColors)
//  2. Write a code that will access "blue"from the rainbow array.
    console.log(rainbowColors[4])

//  3. Make an object that is called your name and hold the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
    const Kimmy = {

        faveFood: "pizza",
        myHobby: "Gardening",
        myCity: "Columbus",
        favDatatype: "objects",
    }
    console.log(Kimmy)
    console.log(Kimmy.myHobby)

    