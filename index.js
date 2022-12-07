


const fetchAdvice = async () => {
    // getting response from server
    const res = await fetch("https://api.adviceslip.com/advice");
    // getting a JSON string from the response from the server
    const data = await res.json();
    console.log(data);
    document.getElementById("advice-id").innerHTML = `Advice #${data.slip.id}`;
    document.getElementById("advice").innerHTML = `"${data.slip.advice}"`;
}

fetchAdvice();