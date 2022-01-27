let password = "20_22"

password.length >= 4 && (password.includes("-") || password.includes("_")) ? console.log("Пароль надежный") : console.log("Пароль недостаточно надежный")