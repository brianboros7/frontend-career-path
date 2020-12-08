const webBasicsBtn = document.getElementById('webBasicsBtn')
const advancedWebBtn = document.getElementById('advanecdWebBtn')


const menu = document.getElementById('menu')
function toggleDropdown() {
    menu.hidden = !menu.hidden
    menu.addEventListener("click", function(e) {
        e.menu.hidden
    })
    console.log('clicked')
} 