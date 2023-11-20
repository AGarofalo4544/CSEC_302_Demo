// Author: Alexander Garofalo

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
    reader.onload = function (e)
    {
        try
        {
            const jsonData = JSON.parse(e.target.result);
            displayJsonKeysAndValues(jsonData);
            console.log(file);
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
