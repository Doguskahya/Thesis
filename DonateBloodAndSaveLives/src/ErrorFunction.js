export function errorResolve(code) {
    switch (code) {
        case "auth/weak-password":
            return "Password is invalid"

        case "auth/email-already-in-use":
            return "Account has been already used "

        default:
            break;
    }
}