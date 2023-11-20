// Author: Alexander Garofalo

document.getElementById('showJson').addEventListener("click", myDisplay);

function myDisplay() {
    var x = document.getElementById("output");
    if (x.style.display === "none") {
        x.style.display = "block";
        showList();
    } else {
        x.style.display = "none";
    }
}

// function handleFileSelect(event)
// {
//     const fileInput = event.target;
//     const file = fileInput.files[0];
//     if (!file)
//     {
//         return;
//     }

//     const reader = new FileReader();
//     reader.onload = function (e)
//     {
//         try
//         {
//             const jsonData = JSON.parse(e.target.result);
//             displayJsonKeysAndValues(jsonData);
//             console.log(file);
//         }
//         catch (parseError)
//         {
//             console.error('Error parsing JSON:', parseError);
//         }
//     };
//     reader.readAsText(file);
// }

// function displayJsonKeysAndValues(jsonData)
// {
//     const outputElement = document.getElementById('output');
//     outputElement.innerHTML = ''; // Clear previous content

//     for (const key in jsonData["users"])
//     {
//         const list = document.createElement('p');
//         list.textContent = `User ${key}:`;
//         outputElement.appendChild(list);
//         for (const key2 in jsonData["users"][key])
//         {
//             const listItem = document.createElement('ul');
//             listItem.textContent = `${key2}: ${jsonData["users"][key][key2]}`;
//             list.appendChild(listItem);
//         }
//     }
// }

function showList()
{
    fetch("./users.json")
        .then(response => response.json())
        .then(jsonData => displayJsonKeysAndValues(jsonData));
}

function displayJsonKeysAndValues(jsonData)
{
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = ''; // Clear previous content

    for (const key in jsonData["users"])
    {
        const userNums = document.createElement('li');
        userNums.textContent = `User ${key}:`;
        outputElement.appendChild(userNums);

        const list = document.createElement('ul');
        userNums.appendChild(list);

        for (const key2 in jsonData["users"][key])
        {
            const listItem = document.createElement('li');
            listItem.textContent = `${key2}: ${jsonData["users"][key][key2]}`;
            list.appendChild(listItem);
        }
    }
}


// function createList(data)
// {
//     console.log("PICKLE");
//     const mainUL = document.createElement('ol');
//     for (let i = 0; i < data.result.length; i++)
//     {
//         const studentLI = document.createElement('li');
//         studentLI.innerHTML = data.result[i].name;

//         // create list for marks
//         const marksUL = document.createElement('ul');
//         for (var key in data.result[i].marks)
//         {
//             const marksLI = document.createElement('li');
//             marksLI.innerHTML = key + ': ' + data.result[i].marks[key];
//             marksUL.appendChild(marksLI);
//         }

//         // append marks list to studentLI
//         studentLI.appendChild(marksUL);
//         // append student list to mainUL
//         mainUL.appendChild(studentLI);
//     }
//     // append mainUL to body
//     document.body.appendChild(mainUL);
// }
