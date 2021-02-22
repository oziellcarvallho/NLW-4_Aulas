// UUID => Universally unique identifier.

/*function enviarEmail(para, id, assunto, texto){
    // Biblioteca de envio de email.
    console.log(para, id, assunto, texto)
}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail("name@gamil.com", 9999, "Olá", "Tudo bem?")
    }
}*/

interface DadosDeEnvioEmail{
    para: string
    id: string
    assunto: string
    texto: string
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
    console.log(para, id, assunto, texto)
}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail({
            para:"name@gamil.com", 
            id: 9999,
            assunto: "Olá", 
            texto: "Tudo bem?"})
}