

export default function login() {
  fetch(`http://localhost:3000/login?user=${userName}`)
    .then((res) => console.log("res", res), res.json())
    .then((data) => console.log("data", data))
    .catch((err) => {
      console.log("error", err);
    });
}

