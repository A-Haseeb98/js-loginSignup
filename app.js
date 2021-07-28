var data = {
    emails: [],
    passwords: []
}

function getData() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    var data = JSON.parse(localStorage.getItem('data'))
    console.log()
    var Found = false;
    for (var i = 0; i < data.emails.length; i++) {

        if (email.value === data.emails[i] && password.value === data.passwords[i]) {
            Found = true;
        }
    }
    if (Found) {
        alert('login Successfull')
        //   window.location.href = './home.html'
    }
    else {
        alert('Email or Password Incorrect')
    }
}
function setData() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    data.emails.push(email.value)
    data.passwords.push(password.value)
    localStorage.setItem('data', JSON.stringify(data))
}


