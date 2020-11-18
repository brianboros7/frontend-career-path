/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/
function displayColors(colors) {
    let myColorshtml = colors.map(color => {
        return '<div class="my-color" style="background-color: ${color.value}"></div>'
    }).join('')

    console.log(colors)
    
    document.body.innerHTML = `<div class="my-colors">
        <div class="my-color">${colors[0].value}</div>
    </div>`
}

async function getColors() {
    let response = await fetch("https://api.noopschallenge.com/hexbot?")
    let data = await response.json()
    let colors = data.colors 

    displayColors(colors)
    console.log(data)
}

let colorCount = 25 
getColors(colorCount)




//==================================================================
/* 
    Create a User Profile using data from
        https://jsonplaceholder.typicode.com/users/3
    
    The User Profile must be a Flexbox container with 4 components 
        1. Profile Header
            - With the User's name and username
        2. Company
            - Displaying information about their company
        3. Contact Details
            - Contains Email/Phone/Website
        4. User Address
*/

// getemoji.com

async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/3")
    let user = await response.json()
    return user
}

getUser().then(user => {
    console.log(user)
    document.body.innerHTML = `<div class="user-profile">
        <div class="user-profile-header">
            <div>${user.name}</div>
            <div>@${user.username}</div>
        </div>
        <div class="user-profile-company">
            <div>👩🏽‍💼${user.company.name}</div>
            <div>${user.company.catchPhrase}</div>
            <div>${user.company.bs}</div>
        </div>
        <div class="user-profile-contact">
            <div>📧${user.email}</div>
            <div>📞${user.phone}</div>
            <div>💻${user.website}</div>
        </div>
        <div class="user-profile-address">
            <div>${user.address.street}, ${user.address.suite}</div>
            <div>${user.address.city} ${user.address.zipcode}</div>
        </div>
    </div>`
})

getUser().then(displayUser)