const email = document.getElementById("email")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname") 
const submit = document.getElementById("submit")
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
submit.disabled = true

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
 }

const validate = () => {
    if (email.value == "" || firstname.value == "" || lastname.value == "") {
      submit.disabled = true
    } else if (validateEmail (email.value) && !(firstname.value == "" && !(lastname.value == ""))) { 
      submit.disabled = false
    } else {
      submit.disabled = true
    }
  }

email.addEventListener("keyup", (event) => {
    validate()
})
firstname.addEventListener("keyup", (event) => {
    validate()
})
lastname.addEventListener("keyup", (event) => {
    validate()
})

submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["email","firstname","lastname"], [email.value,firstname.value,lastname.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf unsere Game Page  
        location.href = "./Game.html"
    }

})
