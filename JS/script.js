const toggleSwitch = document.querySelector('toggle');

function changeMode(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('theme', '.--light-theme');
    }
    else {
        document.documentElement.setAttribute('theme', 'light')
    }
}
toggleSwitch.addEventListener('click', changeMode);




