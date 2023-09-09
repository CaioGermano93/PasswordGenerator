document.addEventListener("DOMContentLoaded", function() {
  let passwordlength = 5
    function generatePassword(){
      const chars = "abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ123456789!@#$%¨&*()[]"
      
      let password = ""

      for(let i=0; i<passwordlength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
      }

      const inputEl = document.querySelector("#password")
      inputEl.value = password
      console.log(password)
    
    }

    const passwordlengthEl = document.querySelector("#password-length")
    passwordlengthEl.addEventListener('input', function(){
      passwordLength = passwordlengthEl.value
      console.log(passwordLength)
      generatePassword()
    })

    generatePassword()
});