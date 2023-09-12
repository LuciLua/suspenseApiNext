async function Membros({ path, time }) {

    const response = await fetch(path)
    const membros = await response.json()
    const membros_formated = await membros.membros

    interface MembroProps {
        fullname: string,
        shortname: string,
        tel: number,
        email: string,
        alimentacao: string,
        alimentacao_lactose: string,
        id: string
    }

    await new Promise(resolve => setTimeout(resolve, time))

    return (
        membros_formated.map((membro: MembroProps) => {
            return (
                <div className="card">
                    <p>Nome: {membro.fullname}</p>
                    <p>Apelido: {membro.shortname}</p>
                    <p>E-mail: {membro.email}</p>
                </div>
            )
        })
    )
}

export default Membros