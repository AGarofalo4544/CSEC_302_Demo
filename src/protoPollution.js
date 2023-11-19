// const fs = require('fs');
// // const jsonfile = require('jsonfile');
// const path = './src/users.json';
// const path2 = './src/test.json';
// // import data from './users.json';
// // console.log(data);


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
// app.get("/", function(request,response){
//     fs.readFile(path, 'utf8', (err,data) => {
//         if (err) {
//             console.error("Error reading JSON file:", err);
//             return;
//         }
//         const jsonData = JSON.parse(data);
//         console.log(jsonData);
//         // console.log("PICKLE");
//         response.send(jsonData);
//     })
//     // jsonfile
//     //     .readFile('./src/users.json')
//     //     .then((data) => {
//     //         response.send(JSON.parse(data));
//     //     })
//     //     .catch((err) => {
//     //         console.log(err);
//     //     });
//     // jsonfile.readFile('./src/users.json', (err, data) => {
//     //     if (err) {
//     //         console.log(err);
//     //         return;
//     //     }
//     //     response.send(data);
//     // })
// });

document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event)
{
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (!file)
    {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        try
        {
            const jsonData = JSON.parse(e.target.result);
            displayJsonKeysAndValues(jsonData);
        }
        catch (parseError)
        {
            console.error('Error parsing JSON:', parseError);
        }
    };

    reader.readAsText(file);
}

function displayJsonKeysAndValues(jsonData)
{
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = ''; // Clear previous content

    for (const key in jsonData["users"])
    {
        const list = document.createElement('p');
        list.textContent = `User ${key}:`;
        outputElement.appendChild(list);
        for (const key2 in jsonData["users"][key])
        {
            const listItem = document.createElement('ul');
            listItem.textContent = `${key2}: ${jsonData["users"][key][key2]}`;
            list.appendChild(listItem);
        }
    }
}

// app.listen(10000, function () {
//     console.log("Started application on port %d", 10000);
// });

