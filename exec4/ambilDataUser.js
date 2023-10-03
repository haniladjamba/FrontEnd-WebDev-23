// nama : Ladjamba, Hani Jastin Giovanni
// subjek : Front-End Web Developtment
// Date : 20 - Sept - 2023

const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
        .then(function (response) {
        return response.json();
        })
        .then(function (users) {
        users = users.data;
        console.log(users);
        });};

export default ambilDataUser;