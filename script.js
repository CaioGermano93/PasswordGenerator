document.addEventListener("DOMContentLoaded", function() {
  const inputEl = document.querySelector("#password")
  let passwordlength = 16
    function generatePassword(){
      const chars = "abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ123456789!@#$%¨&*()[]"
      
      let password = ""

      for(let i=0; i<passwordlength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
      }

      
      inputEl.value = password
      console.log(password)
    
    }

    function copy(){
      navigator.clipboard.writeText(inputEl.value)
    }

    const passwordlengthEl = document.querySelector("#password-length")
    passwordlengthEl.addEventListener('input', function(){
      passwordLength = passwordlengthEl.value
      console.log(passwordLength)
      generatePassword()
    })

     document.querySelector("#copy-1").addEventListener('click', copy)
     document.querySelector("#copy-2").addEventListener('click', copy)
     
     generatePassword()
});