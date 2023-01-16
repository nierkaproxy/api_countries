const button = document.querySelector('button');
const input = document.querySelector('input');



async function search(){
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${input.value}`);
        const data = await response.json();

        console.log(data);

        if(data.status == 404){

        console.log('Not found')
    } else {
        for (let i in data){
            const country = document.createElement('div');
            country.classList.add('klase')
            document.body.appendChild(country);
            console.log(data[i].flags.png);
            const img = document.createElement('img');
            country.appendChild(img);
            img.setAttribute('src', data[i].flags.png);


            const country_name = document.createElement('p');
            country.appendChild(country_name);
            country_region = document.createElement('p');
            country.appendChild(country_region);
            const country_population = document.createElement('p');
            country.appendChild(country_population);
            country_name.innerText = `Country: ${data[i].name.common}`;
            country_region.innerText = `Continent: ${data[i].region}`;
            country_population.innerText = `Population: ${data[i].population}`;
        }
    }

    } catch (error) {
        console.log(error)
    }
}




button.addEventListener('click', search);