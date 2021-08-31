/* Global Variables */
const generateBtn = document.getElementById("generate");

// Helper function
// Handles GET/POST HTTP requests
async function sendHttpRequest(url, body) {
  const method = body ? "POST" : "GET";
  const request = await fetch(url, {
    method: method,
    body: body && JSON.stringify(body),
    headers: {
      "Content-Type": method === "GET" ? "text/plain" : "application/json",
    },
  });
  return await request.json();
}

// Event handler
async function generate() {
  // Create a new date instance dynamically with JS
  let d = new Date();
  let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

  const userFeelings = document.getElementById("feelings").value;
  const zipCode = document.getElementById("zip").value;
  const apiKey = "b3130673f45f4b6775b90cb7bda077f4";

  //Sends a GET request to the API to obtain temperature
  const data = await sendHttpRequest(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=metric`
  );
  const temp = data.main.temp;

  //Sends a POST request to the server including the obtained data
  const projectData = await sendHttpRequest("http://localhost:8000/add-entry", {
    temp,
    newDate,
    userFeelings,
  });

  //Updates UI 
  const dateHolder = document.getElementById("date");
  dateHolder.innerHTML = "Date: " + projectData.newDate;
  const tempHolder = document.getElementById("temp");
  tempHolder.innerHTML = "Temperature: " + projectData.temp + " °C";
  const contentHolder = document.getElementById("content");
  contentHolder.innerHTML = "Your feelings: " + projectData.userFeelings;
}

// Adds event listener to the generate button
generateBtn.addEventListener("click", generate);
