import './index.scss';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/logo.png';

const Login = () => {

    function checkForm(event) {
        event.preventDefault();
        
        const inputs = Array.from(document.querySelectorAll("input"));
        const error = document.querySelector('.form__error--all');
        let camposVazios = true;

        inputs.forEach(input => {
            if (input.value === "") {
                input.style.border = "2px solid red"
                if (input.nextSibling && input.nextSibling.nodeName === 'SPAN') {
                    camposVazios = false;
                    const span = input.nextSibling;

                    span.style.opacity = "1";
                }
            } else {
                input.style.border = "2px solid black"
                const span = input.nextSibling;
                span.style.opacity = "0";
            }
        });

        console.log(camposVazios);
        if (camposVazios) {
            error.innerHTML = 'Sucesso!'
            error.style.color = 'green';
        } else {
            error.style.opacity = '1';
        }
    };

    return (
        <>
            <header className="header__login">
                <img src={Logo} alt="" />
            </header>
            <section className='section'>
                <h1>Acesse com seu login ou cadastre-se!</h1>
                <h2>você pode entrar com seu CPF</h2>
            </section>
            <form onSubmit={checkForm} className="form" id="form">
                <div className="form__field">
                    <label htmlFor="name" className='form__label'>Digite seu CPF:</label>
                    <input className='form__input' type="text" id="name" name="name" placeholder="Nome ou CPF" autoComplete="off" />
                    <span className='form__error'>*Campo obrigatório*</span>
                </div>
                <div className="form__field">
                    <label htmlFor="password" className='form__label'>Senha:</label>
                    <input className='form__input' type="password" id="password" name="password" placeholder="•••••••••" autoComplete="off" />
                    <span className='form__error'>*Campo obrigatório*</span>
                </div>
                <div className="form__field">
                <button type="submit" value="Cadastrar" className='form__submit'><Link to='/home'>Entrar</Link></button>
                <span className='form__error form__error--all'>*Preenche todos os campos*</span>
                </div>
            </form>
        </>
    )
}

export default Login