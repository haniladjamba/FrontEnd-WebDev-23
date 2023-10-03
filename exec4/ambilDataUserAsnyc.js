// nama : Ladjamba, Hani Jastin Giovanni
// subjek : Front-End Web Developtment
// Date : 20 - Sept - 2023

const ambilDataUserAsnyc = async () => {
  let response = await fetch("https://reqres.in/api/users");
  response = await response.json();
  const data = response.data;
  console.log(data);
}

export default ambilDataUserAsnyc;