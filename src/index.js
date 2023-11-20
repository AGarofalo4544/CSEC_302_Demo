// // import data from './users.json' assert { type: 'json' };
// const jsonfile = require('jsonfile');
// const path = './users.json';

// function is_admin(user)
// {
//     // user = path;
//     if (user.admin)
//     {
//         console.log(user.name + " you are admin. Welcome!");
//     }
//     else
//     {
//         console.log(user.name + " you are not admin. Goodbye!");
//     }
// }


// let  express = require("express");
// // import express from 'express';
// var app = express();
// app.get("/",function(request,response){
//     jsonfile
//         .readFile(path)
//         .then((data) => {
//             response.send(JSON.parse(data));
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     // jsonfile.readFile(path, (err, data) => {
//     //     if (err) {
//     //         console.log(err);
//     //         return;
//     //     }
//     //     response.send(JSON.parse(data));
//     // })
// });


// app.listen(10000, function () {
// console.log("Started application on port %d", 10000);
// });



// Code deprecated from "/src/InHouse/protoPollution.js"
// document.getElementById('showJson').addEventListener("click", myDisplay);
// function myDisplay() {
//     var x = document.getElementById("output");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         showList();
//     } else {
//         x.style.display = "none";
//     }
// }
// function showList()
// {
//     fetch("./users.json")
//         .then(response => response.json())
//         .then(jsonData => displayJsonKeysAndValues(jsonData));
// }
// function displayJsonKeysAndValues(jsonData)
// {
//     const outputElement = document.getElementById('output');
//     outputElement.innerHTML = ''; // Clear previous content
//     for (const key in jsonData["users"])
//     {
//         const userNums = document.createElement('li');
//         userNums.textContent = `User ${key}:`;
//         outputElement.appendChild(userNums);
//         const list = document.createElement('ul');
//         userNums.appendChild(list);
//         for (const key2 in jsonData["users"][key])
//         {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${key2}: ${jsonData["users"][key][key2]}`;
//             list.appendChild(listItem);
//         }
//     }
// }
// function createMap()
// {
    // return myMap;
// }
// function createLiterals()
// {
    // let users = {
    //     "users": 
    //     [
    //         {
    //             "name": "Alex",
    //             "student": true,
    //             "admin": false,
    //             "isPickled": false
    //         },
    //         {
    //             "name": "ADMIN",
    //             "student": null,
    //             "admin": true,
    //             "isPickled": false
    //         },
    //         {
    //             "name": "Cucumber",
    //             "family": "Cucurbitaceae",
    //             "genus": "Cucumis",
    //             "species": "Cucumis sativus",
    //             "isPickled": false
    //         },
    //         {
    //             "name": "Pickle",
    //             "family": "Cucurbitaceae",
    //             "genus": "Cucumis",
    //             "species": "Cucumis sativus",
    //             "isPickled": true
    //         }
    //     ]
    // }
//     return users, myPickles;
// }
// createMap();
// createLiterals();
