let btn1 = document.querySelector('.toggle1')
let btn2 = document.querySelector('.toggle2')

function hideOrShow1(){
  let box1 = document.querySelector('#favouriteAlbums')
  if(box1.style.display === "none"){
    box1.style.display = 'block'
    btn1.innerText = "Hide"
  }else{
  box1.style.display = 'none'
  btn1.innerText = "Show"
  }
}
function hideOrShow2(){
  let box2 = document.querySelector('#review')
  if(box2.style.display === "none"){
    box2.style.display = 'block'
    btn2.innerText = "Hide"
  }else{
  box2.style.display = 'none'
  btn2.innerText = "Show"
  }
}
btn1.addEventListener('click',hideOrShow1)
btn2.addEventListener('click',hideOrShow2)


window.onload = function(){
  let names = document.querySelectorAll('.name')
  let navBtns = this.document.querySelectorAll('.nav-item')
  let crumb = document.querySelector('.breadcrumb')
  for(let i=0;i<navBtns.length;i++){
    navBtns[i].addEventListener('click',function(){
      let newLi = document.createElement('li')
      let br = document.createElement('br')
      crumb.appendChild
      newLi.innerText = navBtns[i].innerText
      crumb.appendChild(newLi)
    })
  }
  let deleteBtn = document.querySelectorAll('.delBtn')
  let tracks = document.querySelectorAll('.trackRow')
  for(let i=0;i<deleteBtn.length;i++){
    deleteBtn[i].addEventListener('click',function(){
      tracks[i].remove()
    })
  }


  var closeBtn = document.querySelector('#closeBtn')
  var addBtn = document.querySelector('#addBtn')
  
  closeBtn.addEventListener('click',function(){
    let inputValues = document.querySelectorAll('.modalInput')
    document.querySelector('#checkbox').checked = false
    for(let i=0;i<nputValues.length;i++){
      nputValues[i].value = ''
    }
  })
  addBtn.addEventListener('click',function(){
    let inputValues = document.querySelectorAll('.modalInput')
    let valuesArray =[]
    for(let i=0;i<inputValues.length;i++){
      valuesArray.push(inputValues[i].value)
    }
    let tbody = document.querySelector('tbody')
    let tr = document.createElement('tr')
    tr.classList.add('trackRow')
    let th = document.createElement('th')
    let td1 = document.createElement('td')
    let td2= document.createElement('td')
    let td3 = document.createElement('td')
    td3.innerHTML = '<button  class="btn btn-outline-danger  delBtn"> Delete </button>'
    th.innerText = valuesArray[0]
    td1.innerText = valuesArray[1]
    td2.innerText = valuesArray[2]
    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)
    

})
}


