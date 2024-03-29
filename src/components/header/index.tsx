import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ExpandMore } from '@mui/icons-material';
import Image from 'next/image';

import { StyledHeader, StyledMenu } from './styles';
import { LanguageModeContext, LanguageModeEnum } from './components/language-mode';
import flagUnitedStates from '../../../assets/img/flag-united-states.svg';
import flagSpain from '../../../assets/img/flag-spain.svg';
import flagBrazil from '../../../assets/img/flag-brazil.svg';
import { useTranslate } from '../../utils/use-translate.util';
import { MdClose, MdMenu } from 'react-icons/md';

export default function Header() {
    const router = useRouter();
    const languageContext = React.useContext(LanguageModeContext);
    const selectedFlag = {
        [LanguageModeEnum.ENGLISH]: flagUnitedStates,
        [LanguageModeEnum.ESPANOL]: flagSpain,
        [LanguageModeEnum.PORTUGUES]: flagBrazil
    }

    const [display, setDisplay] = React.useState('none');
    const [navigation, setNavigation] = React.useState(false);

    return (
        <>
            <StyledHeader display={display}>
                <div className='language-mode'>
                    <input type="radio" id="language_english" value="english" name="language" onChange={() => languageContext.setMode(LanguageModeEnum.ENGLISH)} />
                    <input type="radio" id="language_espanol" value="espanol" name="language" onChange={() => languageContext.setMode(LanguageModeEnum.ESPANOL)} />
                    <input type="radio" id="language_portugues" value="portugues" name="language" onChange={() => languageContext.setMode(LanguageModeEnum.PORTUGUES)} />

                    <div className='language-mode-select-box'>
                        <div className='language-mode-selected' onClick={() => setDisplay(display === 'none' ? 'flex' : 'none')}>
                            <Image src={selectedFlag[languageContext.mode]} alt='selected language flag' />
                            <ExpandMore />
                        </div>
                        <div className='language-mode-select-options'>
                            <label htmlFor='language_english' className='language-mode-option' onClick={() => setDisplay('none')}>
                                <Image src={flagUnitedStates} alt='united states flag' />
                                <span>English</span>
                            </label>
                            <label htmlFor='language_espanol' className='language-mode-option' onClick={() => setDisplay('none')}>
                                <Image src={flagSpain} alt='spain flag' />
                                <span>Español</span>
                            </label>
                            <label htmlFor='language_portugues' className='language-mode-option' onClick={() => setDisplay('none')}>
                                <Image src={flagBrazil} alt='brazil flag' />
                                <span>Português</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='navigation'>
                    <Link href="/home" className={router.asPath === '' || router.asPath === '/home' ? 'selected' : ''}>{useTranslate("header.home")}</Link>
                    <Link href="/portfolio" className={router.asPath === '/portfolio' ? 'selected' : ''}>{useTranslate("header.portfolio")}</Link>
                    <Link href="/contact" className={router.asPath === '/contact' ? 'selected' : ''}>{useTranslate("header.contact")}</Link>
                </div>
                
                <div className='navigation-mobile-hamburger'>
                    <button onClick={() => setNavigation(!navigation)}>
                        {!navigation && <MdMenu size={36} />}
                        {navigation && <MdClose size={36} />}
                    </button>
                </div>
            </StyledHeader>
            
            <StyledMenu>
                <div className={['navigation-mobile', navigation ? 'open' : ''].join(' ')}>
                    <Link
                        href="/home"
                        className={router.asPath === '' || router.asPath === '/home' ? 'selected' : ''}
                        onClick={() => setTimeout(() => setNavigation(false), 100)}>
                            {useTranslate("header.home")}
                    </Link>
                    <Link
                        href="/portfolio"
                        className={router.asPath === '/portfolio' ? 'selected' : ''}
                        onClick={() => setTimeout(() => setNavigation(false), 100)}>
                            {useTranslate("header.portfolio")}
                    </Link>
                    <Link
                        href="/contact"
                        className={router.asPath === '/contact' ? 'selected' : ''}
                        onClick={() => setTimeout(() => setNavigation(false), 100)}>
                            {useTranslate("header.contact")}
                    </Link>
                </div>
            </StyledMenu>
        </>
    )
}
