const fullname = document.getElementById("fullname");
const button = document.getElementsByClassName("btn btn-primary")[0]

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function getData() {
  fetch("https://randomuser.me/api/")
  .then (res => res.json())
  .then (json => renderUser(json["results"][0]) )
}

function renderUser(json) {
  const profilePic = document.getElementById("profile_picture")
  profilePic.src = json["picture"]["medium"]

  const nameId = document.getElementById("fullname")
  nameId.innerText = json["name"]["first"] + " " + json["name"]["last"]

  const emailId = document.getElementById("email")
  emailId.innerText = json["email"]

  const streetId = document.getElementById("street")
  streetId.innerText = json["location"]["street"]["number"] + " " + json["location"]["street"]["name"]

  const cityId = document.getElementById("city")
  cityId.innerText = json["location"]["city"]

  const stateId = document.getElementById("state")
  stateId.innerText = json["location"]["state"]

  const postId = document.getElementById("postcode")
  postId.innerText = json["location"]["postcode"]

  const phoneId = document.getElementById("phone")
  phoneId.innerText = json["phone"]

  const cellId = document.getElementById("cell")
  cellId.innerText = json["cell"]

  const dobId = document.getElementById("date_of_birth")
  dobId.innerText = json["dob"]["date"].split("T")[0]
}

button.addEventListener("click", function(e) {
  if (e.target) {
    getData()
  }
})


console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
