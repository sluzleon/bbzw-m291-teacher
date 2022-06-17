const email = document.getElementById("email")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname") 
const submit = document.getElementById("submit")
submit.disabled = true


const validate = () => {
    if (email.value =="" || firstname.value == "" || lastname.value == "") {
      submit.disabled = true
    } else {
      submit.disabled = false
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
        // Weiterleitung auf die Game Page  
        //location.href = "./game.html"
    }

})
