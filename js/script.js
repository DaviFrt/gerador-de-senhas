const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector(".button-generator");
const sizePassword = document.querySelector("#value");
const password = document.querySelector("#password");
const containerPassword = document.querySelector(".container-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$0123456789";
let newPassword = "";

sizePassword.innerText = sliderElement.value;

sliderElement.oninput = () => {
  sizePassword.innerText = sliderElement.value;
};

buttonElement.addEventListener("click", () => {
  let pass = "";

  for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  };

  containerPassword.classList.remove("hide")

  password.innerText = pass;
  newPassword = pass;
});

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(newPassword);
}