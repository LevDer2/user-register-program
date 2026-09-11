export const mockRegister = async({name, email, password}) => {
    const user = {name, email, password}
    localStorage.setItem("user", JSON.stringify(user))
    return {
        name,
        email,
        token: "mock-token",
    }
}

export const mockLogin = async({email, password}) => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
        throw new Error("The wrong email or password")
    }
    return {
        name: savedUser.name,
        email: savedUser.email,
        token: "mock-token"
    }
}