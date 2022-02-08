const socket = io('ws://localhost:8080');

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    el.classList.add('list-group-item');
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text)
    document.querySelector('input').value = "";
}

document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        const text = document.querySelector('input').value;
        socket.emit('message', text)
        document.querySelector('input').value = "";
    }
});
