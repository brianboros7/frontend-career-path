const webBasicsBtn = document.getElementById('webBasicsBtn')
const advancedWebBtn = document.getElementById('advanecdWebBtn')


const menu = document.querySelector('menu')
function toggleDropdown() {
    menu.hidden = !menu.hidden
    webBasicsBtn.addEventListener("click", function(e) {
        e.menu.hidden
    })
} 