const webBasicsBtn = document.getElementById('webBasicsBtn')
const advancedWebBtn = document.getElementById('advanecdWebBtn')


const menu = document.getElementById('menu')
function webBasicsToggle(webBasicsBtn) {
    wbMenu.hidden = !wbMenu.hidden
    weBasicsBtn = document.addEventListener('click', function() {
        console.log('web basics clicked ')
    })
    wbMenu.addEventListener("click", function(e) {
        e.wbMenu.hidden
    })
    console.log('menu displayed')
} 

function advancedWebToggle(advancedWebBtn) {
    adMenu.hidden = !adMenu.hidden
    advancedWebBtn = document.addEventListener('click', function() {
        console.log('advanced web clicked')
    })
    adMenu.addEventListener("click", function(e) {
        e.adMenu.hidden
    })
    console.log('menu displayed')
} 