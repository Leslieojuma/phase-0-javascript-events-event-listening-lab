function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('You Clicked Me!');
}
input.addEventListener('click', clickAlert);
}

