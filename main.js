
function showMenu(btn) {
    const menus = document.querySelectorAll('.menu')
    menus.forEach(function(menu) {
        menu.hidden = true 
    })
    let open = btn.id

    let openMenu = document.querySelector('.' + open) 
    openMenu.hidden = false 
}