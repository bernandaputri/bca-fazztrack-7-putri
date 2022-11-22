const apiUrl = 'https://jsonplaceholder.typicode.com/users'

async function loadUsers(apiUrl) {
    let response = await fetch(apiUrl)
    let displayResponse = await response.json()
    console.log(displayResponse)
    tableDisplay(displayResponse)
}

loadUsers(apiUrl)

function tableDisplay(displayResponse) {
    let userData = ''
    displayResponse.forEach((itemUser) => {
        userData += "<tr>"
        userData += "<td>" + itemUser.name + "</td>"
        userData += "<td>" + itemUser.email + "</td>"
        userData += "<td>" + itemUser.address.street + "</td>"
        userData += "<td>" + itemUser.company.name + "</td>"
        userData += "<td>" + itemUser.phone + "</td>"
    });
    document.getElementById("tableData").innerHTML = userData
}