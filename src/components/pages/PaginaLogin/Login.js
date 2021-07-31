import '../../common/colors/colors.css'
import './Login.css'

export function Login() {
    return (
        <div className="background-login back-verde">
            <div className="card-login back-preto">
                <form className="form">
                    
                    <label className="txt-login branco" for="usuario">Usuário:</label>
                    <input  className="input-usuario back-branco" type="text" name="campo-usuario" ></input>
                    <label className="txt-login branco" for="passoword">Senha:</label>
                    <input className="input-senha back-branco" type="password" name="password"></input>
                    <div className="sub-opcoes"> 
                        <input className="check " type="checkbox" ></input>
                        <p className="lembrar branco" >Lembrar de mim </p>
                        <a className="esqueceu-senha branco">Esqueceu a senha?</a>
                    </div>
                    <button type="submit" className="botao-entrar back-laranja preto">Entrar</button>
                </form>

            </div>
        </div>
    )
}
//                    <a className="cadastro branco" href="">Cadastre-se!</a>
