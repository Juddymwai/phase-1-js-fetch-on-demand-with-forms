const init = () => {
    const input = document.querySelector('form')
    input.addEventListener('submit', function(e){
    e.preventDefault()
    // e.target.searchById.value
    // e.target.children[1].value
    const input = document.querySelector('input#searchByID');
    console.log(e)
    fetch (`http://localhost:3000/movies/${input.value}`)
    .then (function(response){
        return response.json()
    })
    .then(function(data){
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText= data.title;
        summary.innerText= data.summary;
      
    })
  })
  
}

document.addEventListener('DOMContentLoaded', init);

