function getData(){
    var endpoint = 'https://data.lacity.org/resource/vyww-m7d9.json'
    
    fetch(endpoint)
        .then(function(data){
        return data.json()
    }) 
    .then(function(json){
        console.log(json)
        var finalHTML = ''
        json.forEach(function(item){
            var cardItem = `
                        <div class="col s6 m4">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Data Boi</span>
                  <p>
                  Api Project.LA Event Calendar. 
                  </p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
            `
            finalHTML += cardItem
        })
        
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
    }) // do something with data
    .catch(function(error){
        console.log(error)
    }) // catch any errors
}