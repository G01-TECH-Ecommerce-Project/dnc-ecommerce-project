import './index.scss';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

const Login = () => {
    return (
        <>
            <HeaderMenu></HeaderMenu>

            <section className='section'>
                <h1>Acesse com seu login ou cadastre-se!</h1>
                <h2>você pode entrar com seu CPF</h2>
            </section>
            <form /*onSubmit={checkForm}*/ className="form" id="form">
                <label htmlFor="name" className='form__label'>Nome Completo:</label>

                <input className='form__input' type="text" id="name" name="name" placeholder="Nome ou CPF" autoComplete="off" />
                <span className='form__error'>*Campo obrigatório*</span>

                <label htmlFor="password" className='form__label'>Senha:</label>

                <input className='form__input' type="password" id="password" name="password" placeholder="•••••••••" autoComplete="off" />
                <span className='form__error'>*Campo obrigatório*</span>

                <button type="submit" value="Cadastrar" className='form__submit'>Entrar</button>
                <span className='form__error form__error--all'>*Preenche todos os campos*</span>
            </form>
        </>
    )
}

export default Login