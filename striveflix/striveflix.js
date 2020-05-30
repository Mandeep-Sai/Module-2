// window.onload = async()=>{
//   let content = document.querySelector('#content')
//   // content.innerHTML = ''
//   let categories = await getCategories();
//   for(let i=0;i<categories.length;i++){
//     content.innerHTML += `
//     <div class="container-fluid series${i}" >
//       <p class="mt-3" style="font-size: 20px; color: white;">${categories[i].toUpperCase()}</p>
//       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 seriesRow">
//     </div>
//     `
//     let movies = await getMovies(categories[i])
//     let categoryContainer = document.querySelector(`.series${i} .row`)
//     // console.log(categoryContainer)
//     if(movies.length >0){
//       for(let j=0;j<movies.length;j++){
//         categoryContainer.innerHTML +=`
//         <div class="col my-3">
//           <img src="${movies[j].imageUrl}"  alt="...">
//           <p><a href="details.html?id=${movies[j]._id}&category=${categories[i]}">${movies[j].name}</a></p>
//         </div>
//         `
//       }
//     }else{
//       document.querySelector(`#content series${i}`).classList.add('d-none')
//     }
//   }
// }

  // experiment
  window.onload = async()=>{
    let content = document.querySelector('#content')
    // content.innerHTML = ''
    let categories = await getCategories();
    for(let i=0;i<categories.length;i++){
      content.innerHTML += `
      <div class="container-fluid series${i}" >
        <p class="mt-3" style="font-size: 20px; color: white;">${categories[i].toUpperCase()}</p>
        <div class="glide ${i}">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">

          </ul>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="fas fa-chevron-left"></i></button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
      </div>
      `
      let movies = await getMovies(categories[i])
      let categoryContainer = document.querySelector(`.series${i} .glide__slides`)
      // console.log(categoryContainer)
      if(movies.length >0){
        for(let j=0;j<movies.length;j++){
          categoryContainer.innerHTML +=`
          <li class="glide__slide">
            <a href="details.html?id=${movies[j]._id}&category=${categories[i]}"><img src="${movies[j].imageUrl}" alt=""></a>
          </li>
          `
        }
      }else{
        document.querySelector(`#content series${i}`).classList.add('d-none')
      }
    }
    // Mounting
    var sliders = document.querySelectorAll('.glide');

      for (var i = 0; i < sliders.length; i++) {
        var glide = new Glide(sliders[i], {
          type:'carousel',
          perView:6,
          gap: 1,
          autoplay: 2000,
          peek: {
            before:0,
            after: 50
          }
        });       
        glide.mount();
      }
  }


  // 

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

// search bar

const filterItems = async()=>{
  let txt = document.querySelector('.search-txt').value
  if(txt.length >0){
    let categories = await getCategories();
    let allMovies = [];
    let filteredMovies = []
    for(let i=0;i<categories.length;i++){
      let movies = await getMovies(categories[i])
      allMovies.push(movies)
    }
    allMovies.forEach(element => {
      for(let i=0;i<element.length;i++){
        if(element[i].name.toLowerCase().includes(txt)){
          filteredMovies.push(element[i])
        }
      }
    });
    console.log(filteredMovies)
    let heading = document.querySelector('#heading')
    let content = document.querySelector('#content')
    heading.innerHTML = `
    <p class="display-4" style="color:#E50914;">Search results for "${txt}"</p>
    `
    content.innerHTML = `
    <div class="container">
      <div class="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

      </div>
    </div>
    `
    let row = document.querySelector('#content .row')
    filteredMovies.forEach(movie => {
      row.innerHTML += `
      <div class="col">
        <a href="details.html?id=${movie._id}&category=${movie.category}"><img src="${movie.imageUrl}" alt=""></a>
        <p>${movie.name}</p>
      </div>
      `
    });
  }else{
    console.log('error')
  }
}