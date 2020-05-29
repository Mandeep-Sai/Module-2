window.onload = async()=>{
  let content = document.querySelector('#content')
  // content.innerHTML = ''
  let categories = await getCategories();
  for(let i=0;i<categories.length;i++){
    content.innerHTML += `
    <div class="container-fluid series${i}" >
      <p class="mt-3" style="font-size: 20px; color: white;">${categories[i].toUpperCase()}</p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 seriesRow">
    </div>
    `
    let movies = await getMovies(categories[i])
    let categoryContainer = document.querySelector(`.series${i} .row`)
    // console.log(categoryContainer)
    if(movies.length >0){
      for(let j=0;j<movies.length;j++){
        categoryContainer.innerHTML +=`
        <div class="col my-3">
          <img src="${movies[j].imageUrl}"  alt="...">
          <p><a href="details.html?id=${movies[j]._id}&category=${categories[i]}">${movies[j].name}</a></p>
        </div>
        `
      }
    }else{
      document.querySelector(`#content series${i}`).classList.add('d-none')
    }
  }
}

// CRUD
const getCategories = async() =>{
  let rawData = await fetch('https://striveschool.herokuapp.com/api/movies/',{
    method : 'GET',
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
    })
  })
  return await rawData.json()
}
const getMovies = async(category)=>{
  let rawData = await fetch('https://striveschool.herokuapp.com/api/movies/'+category,{
    method : 'GET',
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
    })
  })
  return await rawData.json()
}
const sendData = async (movie)=>{
  let response = await fetch('https://striveschool.herokuapp.com/api/movies/',{
    method:'POST',
    body: JSON.stringify(movie),
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
      'Content-type': "application/json"
    })
  })
  return response;
}

const editData = async (id,movie)=>{
  let response = await fetch(`https://striveschool.herokuapp.com/api/movies/${id}`,{
    method:'PUT',
    body: JSON.stringify(movie),
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
      'Content-type': "application/json"
    })
  })
  return response;
}

const getMovie = async (category, id) =>{
  let response = await fetch('https://striveschool.herokuapp.com/api/movies/'+category,{
    method:'GET',
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
    })
  })
  let data =  await response.json();
  let movie;
  for(let i=0;i<data.length;i++){
    if(data[i]._id == id){
      movie = data[i]
    }
  }
  return movie;
}