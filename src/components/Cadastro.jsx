
import { useState } from "react";
import "./Cadastro.css";

const estadoInicial = {
    nome: "",
    email: "",
    telefone: "",
    modalidade: ""
};

export default function Cadastro() {

    const [formulario, setFormulario] = useState(estadoInicial);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        });

        setMensagem("");
    }

    function handleSubmit(event) {
        event.preventDefault();

        const camposVazios = Object.values(formulario).some(
            valor => valor.trim() === ""
        );

        if (camposVazios) {
            setTipoMensagem("erro");
            setMensagem("Preencha todos os campos!");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
            setTipoMensagem("erro");
            setMensagem("Digite um e-mail válido!");
            return;
        }

        setTipoMensagem("sucesso");
        setMensagem(
            `Cadastro realizado com sucesso, ${formulario.nome.split(" ")[0]}!`
        );

        setFormulario(estadoInicial);
    }

    return (
        <section className="registration" id="cadastro">

            <div className="registration-card">

                <h2>Cadastre-se</h2>

                <p className="registration-description">
                    Faça parte da Arena Sol & Areia!
                </p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="nome">Nome completo</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        value={formulario.nome}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">E-mail</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="seuemail@exemplo.com"
                        value={formulario.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="telefone">Telefone</label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        value={formulario.telefone}
                        onChange={handleChange}
                    />

                    <label htmlFor="modalidade">
                        Modalidade de interesse
                    </label>

                    <select
                        id="modalidade"
                        name="modalidade"
                        value={formulario.modalidade}
                        onChange={handleChange}
                    >
                        <option value="">Selecione uma modalidade</option>
                        <option value="Beach Tennis">Beach Tennis</option>
                        <option value="Vôlei de Praia">Vôlei de Praia</option>
                        <option value="Futevôlei">Futevôlei</option>
                    </select>

                    <button type="submit">
                        Cadastrar informações
                    </button>

                    {mensagem && (
                        <p className={`form-message ${tipoMensagem}`} role="status">
                            {mensagem}
                        </p>
                    )}

                </form>

                <p className="registration-footer">
                    Arena Sol & Areia - Esporte e qualidade de vida.
                </p>

            </div>

        </section>
    );
}
