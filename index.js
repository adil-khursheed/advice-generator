// fetch("https://api.adviceslip.com/advice")
// .then((response) => response.json())
// .then((json) => console.log(json));

const numberAdvice = document.getElementById("advice-id");
const textAdvice = document.getElementById("advice");
const adviceButton = document.getElementById("dice-btn");


async function getAdvice() {
    // getting response from server
    let myResponse = await fetch("https://api.adviceslip.com/advice");
    // getting a JSON string from the response from the server
    let myString = await myResponse.text();
    // getting an object from JSON string
    let myObject = JSON.parse(myString);
    // getting a advice number
    let numAdv = myObject.slip["id"];
    // getting advice text
    let advice = myObject.slip["advice"];
    // set content
    numberAdvice.innerHTML = `${numAdv}`;
    textAdvice.innerHTML = `${advice}`;
}

getAdvice();

adviceButton.addEventListener("click", getAdvice);