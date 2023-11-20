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
