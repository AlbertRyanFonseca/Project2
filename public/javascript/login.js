async function loginUser(e) {
    e.preventDefault();

    const email = $("#email-login").val().trim();
    const password = $("#password-login").val().trim();

    console.log(email, password)

    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {"Content-Type": "application/json"}

        });
        if (response.ok) {
            alert("Logged in!")
        } else {
            alert(response.statusText)
        }
    }
}
$("#login-btn").on("click", loginUser);