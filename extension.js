document.addEventListener('DOMContentLoaded', function () {
    const Food = document.getElementById("Food");
    const convert = document.getElementById("convert");
    const query = document.getElementById("query");

    const apiKey = "aodQTDcVETHdbLN50Tg52A9wvzmpQVEELM9akRnX";
    const apiUrl = "https://api.api-ninjas.com/v1/nutrition?query=";

    convert.addEventListener("click", () => {
        const foodtotal = Food.value;
        const url = apiUrl + foodtotal;

        fetch(url, {
            headers: {
                "X-API-KEY": apiKey,
            },
        })
        .then(response => response.json())
        .then(dataArray => {
            // Assuming the API returns an array, use the first item in the array
            const data = dataArray[0];

            if (data) {
                const namef = data.name;
                const calories = data.calories;
                const serving = data.serving_size_g;
                const fatTotal = data.fat_total_g;
                const fatSaturated = data.fat_saturated_g;
                const protein = data.protein_g;
                const sodium = data.sodium_mg;
                const potassium = data.potassium_mg;
                const cholesterol = data.cholesterol_mg;
                const carbohydrates = data.carbohydrates_total_g;
                const fiber = data.fiber_g;
                const sugar = data.sugar_g;

                query.innerHTML = `Nutritional Facts for ${namef}: 
                  Calories - ${calories || 'Unknown'}, 
                  Serving Size - ${serving || 'Unknown'}, 
                  Fat - ${fatTotal || 'Unknown'}, 
                  Saturated Fat - ${fatSaturated || 'Unknown'},
                  Protein - ${protein || 'Unknown'}, 
                  Sodium - ${sodium || 'Unknown'}, 
                  Potassium - ${potassium || 'Unknown'}, 
                  Cholesterol - ${cholesterol || 'Unknown'}, 
                  Carbohydrates - ${carbohydrates || 'Unknown'}, 
                  Fiber - ${fiber || 'Unknown'}, 
                  Sugar - ${sugar || 'Unknown'}`;
            } else {
                console.error('No data found for the given food.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching data. Please try again later.');
        });
    });
});