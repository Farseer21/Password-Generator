
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


const generatePassword =(length, characters) => {
  let passwordTxt = "";
  for (let i = 0; i < length; i++) {
    passwordTxt += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  } 
  return passwordTxt;
};


generateBtn.addEventListener("click",() => {
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
})
    


//generateBtn.addEventListener("click"); { 
  //var listItemEl = document.createElement("li"); 
  //listItemEl.className = "generate"; 
  //listItemEl.textContent = "how many characters in your password?"; 
  //generateEl.appendChild(listItemEl); 
//};
