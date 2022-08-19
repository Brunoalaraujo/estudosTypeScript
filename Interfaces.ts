interface Usuario{
    nome: string,
    email: string,
    address?: string
}

function getUser(): Usuario{
    return {
        nome: "Bruno",
        email: "bruno@gmail.com",
    }
}

function setUser(usuario: Usuario) {
    //...
}