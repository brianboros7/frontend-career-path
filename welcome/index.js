const loadData = (options) => {
    fetch(options.url)
        .then(function(response) {
            return response.json() 
        }) 
        .then(function(data) {
            if (options.onSuccess) options.onSuccess(data) 
        })   
}