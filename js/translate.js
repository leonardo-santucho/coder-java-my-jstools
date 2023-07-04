async function traducir() {

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'b7d3653df4msh6f89b09c652e667p180931jsn51b8836124e4',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: 'I want to go my home, I feel very tired',
            target: 'es',
            source: 'en'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}


traducir();