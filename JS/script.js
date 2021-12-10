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




function createMessage() {
    let submitButton = document.querySelector('button')
    submitButton.addEventListener('click', (e) => {
        newContact = {
            email: '',
            name: '',
            service: '',
            message: '',
        }
        newContact.email = inputContactEmail.value
        newContact.name = inputContactName.value
        newContact.service = inputContactService.value
        newContact.message = inputContactMessage.value 
        console.log(newContact)
    } )
}




