this.onmessage = (e) => {
    if (e.data !== undefined) {

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
        
            if (xhr.readyState === 4) {
        
                if (xhr.status === 200) {
                    this.postMessage(JSON.parse(xhr.responseText));
                }
        
                if (xhr.status === 404) {
                    console.log('Ops');
                }
            }
        }
        
        xhr.open('get', 'https://pokeapi.co/api/v2/pokemon/7', true);
        xhr.send();
    }
}


