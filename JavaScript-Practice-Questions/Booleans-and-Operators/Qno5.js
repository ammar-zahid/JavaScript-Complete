// Password Validation: Write a function that takes a password as input and validates it based on the following criteria:

// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one numeric digit
// Return true if the password is valid, false otherwise.

function password(lock) {
    const hasUpperCase = /[A-Z]/.test(lock);
    const hasLowerCase = /[a-z]/.test(lock);
    const hasNumericDigit = /[0-9]/.test(lock);

    return lock.length >= 8 && hasUpperCase && hasLowerCase && hasNumericDigit;
}

console.log(password("Abcjei34kd"))