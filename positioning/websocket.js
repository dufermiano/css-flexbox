const url = 'ws://localhost:8080/echo';

const w = new WebSocket(url);

w.onopen = () => {
    console.log('opening websocket');
     w.send('Hello world');
}
w.onmessage = (e) => {
    console.log(e.data.toString());
}
w.onclose = (e) => {
    console.log('Closed');
}

w.onerror = (e) => {
    console.log(e);
}

window.onload = () => {
    document.getElementById('btnSocket').onclick = () => {
        w.send(document.getElementById('inputMessage').value);
    }
}