const email = document.getElementById("email")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname") 
const submit = document.getElementById("submit")
submit.disabled = true

function validateEmail(email) 
{ 
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log (re.test(email))
    return re.test(email);
 }

 function validateFirstname(firstname) 
{ 
  var re = /^[A-Za-z]+$/;
  console.log (re.test(firstname))
    return re.test(firstname);
 }

 function validateLastname(lastname) 
 { 
   var re = /^[A-Za-z]+$/;
   console.log (re.test(lastname))
     return re.test(lastname);
  }

const validate = () => {
    if (!validateEmail(email.value) || !validateFirstname(firstname.value) || !validateLastname(lastname.value)) {
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
        // Weiterleitung auf unsere Game Page  
        location.href = "./Game.html"
    }

})
