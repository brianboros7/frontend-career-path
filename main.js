


// write a function to toggle web basics and advanced web buttons 
function showMenu(btn) {
    const menus = document.querySelectorAll('.menu')
    menus.forEach(function(menu) {
        menu.hidden = true 
    })
    let open = btn.id

    let openMenu = document.querySelector('.' + open) 
    openMenu.hidden = false 
}



/* Unsplash Fetch API */
window.addEventListener('load', loadImg);

function loadImg() {
    const url = "https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
    const imageDiv = document.querySelector('.image');
    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.results.length; i++) { 
            // Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   
            if (data.results[i].id == 'WkfDrhxDMC8') {
                let imageElement = document.createElement('img')
                imageElement.src = data.results[i].urls.thumb
                imageDiv.append(imageElement)
            }
        }
    })
}
