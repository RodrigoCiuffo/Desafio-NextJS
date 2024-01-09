import { useState } from 'react';
import styles from './index.module.css';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Header from '@/components/header';

const Form = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false); //Estado inicial para o Modal

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const [formData, setFormData] = useState({ //Objeto referente aos dados do formulário
        name: '',
        email: '',
        portfolio: '',
        question: ''
    });

    const handleInputChange = (e) => { //Aqui, "e" é o evento de alteração em um dos inputs
        const { id, value } = e.target; //O valor do input de ID "id" passa a ser o "value" digitado atualmente
        setFormData((prevData) => ({ //Dados do objeto do formulário são atualizados
            ...prevData,
            [id]: value
        }));
    };

    const isPortfolioLinkValid = (link) => { //Checagem básica para validação do formato de link
        return link.startsWith('http://') || link.startsWith('https://');
    };

    const isEmailValid = (email) => { //Checagem básica para validação do formato de email
        return email.includes('@') && email.includes('.com');
    };

    const handleSubmit = (e) => { //Prevenção de evento padrão, validação dos campos e submit do form
        e.preventDefault();
        const isNameValid = formData.name.trim() !== '';
        const emailValid = isEmailValid(formData.email);
        const portfolioValid = isPortfolioLinkValid(formData.portfolio);
        const isQuestionValid = formData.question.trim() !== '';

        if (isNameValid && emailValid && portfolioValid && isQuestionValid) {
            openModal() //Em caso de sucesso nas validações, o Modal é mostrado na tela
            setFormData({
                name: '',
                email: '',
                portfolio: '',
                question: ''
            });
        } else {
            alert('Entrada inválida!'); //Este alert é exibido em caso de falha em uma ou mais validações
        }
    };

    const router = useRouter()

    return (
        <div className={router.pathname === '/form' ? styles.formContainer : styles.formContainerLP}>
            {router.pathname === '/form' ? <Header /> : null}
            <h1 className={router.pathname === '/form' ? styles.formTitlePath : styles.formTitle}>Formulário de Vaga</h1>
            <section className={router.pathname === '/form' ? styles.formSecPath : styles.formSec}>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <div className={styles.first}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name} //Associando os inputs aos devidos campos do objeto do formulário
                            onChange={handleInputChange} //Associando o evento onChange à função de mudança do valor do input e atualização do form
                        />
                    </div>
                    <div className={styles.second}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.third}>
                        <label htmlFor="portfolio">Link para portfólio:</label>
                        <input
                            type="url"
                            id="portfolio"
                            value={formData.portfolio}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.fourth}>
                        <label htmlFor="question">Por que você quer fazer parte da Jojos?</label>
                        <input
                            type="text"
                            id="question"
                            value={formData.question}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className={styles.formButton}> {/* Botão para envio do formulário */}
                        Enviar formulário
                    </button>
                </form>
                {/* Especificações do Modal */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal de sucesso"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                            margin: 'auto',
                            width: '809px',
                            height: '364px',
                            padding: '0px',
                        },
                    }}
                >
                    <img src="/Modal.png" style={{ width: '100%', height: 'auto' }} alt='Modal de sucesso'/>
                </Modal>
            </section>
        </div>
    );
};

export default Form;