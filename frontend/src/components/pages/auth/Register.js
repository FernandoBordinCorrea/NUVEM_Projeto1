import Input from '../../form/Input'
import styles from '../../form/Form.module.css'

import {Link} from 'react-router-dom'
function Register() {

    function handleOnChange(e) {
        
    }

    return (
        <section className={styles.form_container}>
            <h1>Registrar</h1>
            <form>
                <Input type="text" text="Nome" name="name" placeholder="Digite o seu nome" handleOnChange={handleOnChange}/>
                <Input type="text" text="Telefone" name="phone" placeholder="Digite o seu telefone" handleOnChange={handleOnChange}/>
                <Input type="E-mail" text="email" name="email" placeholder="Digite o seu email" handleOnChange={handleOnChange}/>
                <Input type="password" text="senha" name="password" placeholder="Digite a sua senha" handleOnChange={handleOnChange}/>
                <Input type="password" text="Confirmacao de senha" name="confirmpassword" placeholder="Confirme a sua senha" handleOnChange={handleOnChange}/>
                <input type="submit" value="Cadastrar"/>
            </form>
            <p>
                Ja tem conta? <Link to="/login">Clique aqui.</Link> 
            </p>
        </section>
    )
}

export default Register