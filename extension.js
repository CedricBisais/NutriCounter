const Food= document.getElementById("Food");
const convert= document.getElementById("convert");
const result= document.getElementById("result");


const API_KEY="gw8vN5Dsy2J2rxiGbNqzzQ==lmV7Shksi5uMcvju"
const API_URL="https://api.api-ninjas.com/v1/nutrition?query="

convert.addEventListener('click',() =>{
    const foodtotal=Food.value;
    const convertTotal= convert.value;
    const url= API_URL + foodtotal

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
})
