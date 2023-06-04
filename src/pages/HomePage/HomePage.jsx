import Section from 'modules/Section/Section';
import logo from '../../assets/images/Logo.png';
import styled from './HomePage.module.scss';

const HomePage = ()=> {
    return (
        <>
        <Section className={styled.searchWrapper}>
            <div className={styled.logoBox}>
                <div className={styled.logoWrapper}>
                    <img className={styled.logo}
                    src={logo}
                    alt='Logo'
                    width='300'
                    height='88'    
                    />
                </div>
                <div className={styled.textWrapper}>
                    <h2 className={styled.text}>
                        Just learning a new skill can make me happy!
                    </h2>
                </div>
            </div>
        </Section>
        
        </>
    )
}

export default HomePage;