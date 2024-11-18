

export function(api){

    const url = 'https://odds-api1.p.rapidapi.com/bookmakers';
    const options = {
        method: 'GET',
        headers: {
            'apiKey': '1abc3a4f5a5e23e5c87fcb40baf1666a',
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}


