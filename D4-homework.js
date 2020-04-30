var addbtn = document.querySelector('#addButton')
var teamBtn = document.querySelector('#teamButton')
var assignBtn = document.querySelector("#assignButton")
var namesArray = []
var teams = 0

function addMember(){
  let name = document.querySelector('#name').value
  namesArray.push(name)
  if(isNaN(name)){
    let emptyTag = document.querySelector('#emptyInfo')
    let message = document.querySelector('#message')
    emptyTag.innerText = ' '
    let listOfNames = document.querySelector('#nameList')
    let newName = document.createElement('p')
    newName.innerText = name
    listOfNames.appendChild(newName)
    document.querySelector('#name').value = ' '
    message.innerText = "Added Successfully"
    message.style.color = 'green'
    setTimeout(function(){message.innerText = ''}, 1000)
  }else{
    document.querySelector('#name').value = ' '
    message.innerText = "Not a Valid Name"
    message.style.color = 'red'
    setTimeout(function(){message.innerText = ''}, 1000)
  }

}

function createTeams(){
  var numberOfTeams = document.querySelector('#teamNumber').value
  teams = numberOfTeams
  let row = document.querySelector('#teamRow')
  for(let i = 0;i<numberOfTeams;i++){
    let newCol = document.createElement('div')
    let teamName = document.createElement('h6')
    teamName.innerText = 'TEAM '+(i+1)
    newCol.classList.add('col')
    row.appendChild(newCol)
    newCol.appendChild(teamName)
    document.querySelector('#teamNumber').value = ''
  }
}

// function assignMember(){
//   if(namesArray.length != 0){
//     let randNum1 = Math.floor(Math.random()*teams)
//     let randNum2 = Math.floor((Math.random()*namesArray.length))
//     let randName = document.createTextNode(namesArray[randNum2])
//     namesArray.splice(randNum2,1)
//     let allTeams = document.querySelectorAll("#teamColumns .col")
//     allTeams[randNum1].appendChild(randName)
//   }else{
//     console.log("No more names")
//   }
// }
var x = 0
function assignMember(){
  if(namesArray.length !=0){
    if(x<teams){
      let randNum = Math.floor((Math.random()*namesArray.length))
      let allTeams = document.querySelectorAll("#teamColumns .col")
      let randName = document.createTextNode(namesArray[randNum]+", ")
      namesArray.splice(randNum,1)
      allTeams[x].appendChild(randName)
      x++
    }else{
      x=0
      let randNum = Math.floor((Math.random()*namesArray.length))
      let allTeams = document.querySelectorAll("#teamColumns .col")
      let randName = document.createTextNode(namesArray[randNum]+", ")
      namesArray.splice(randNum,1)
      allTeams[x].appendChild(randName)
      x++
    }
  }else{
    let msg = document.querySelector('#assignmsg')
    msg.innerText = "No More Members"
    msg.style.color = 'red'
    setTimeout(function(){msg.innerText = ''}, 1000)
  }
}
addbtn.addEventListener('click',addMember)
teamBtn.addEventListener('click',createTeams)
assignBtn.addEventListener('click',assignMember)