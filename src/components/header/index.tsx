import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ExpandMore } from '@mui/icons-material';
import Image from 'next/image';

import { StyledHeader } from './styles';
import { LanguageModeContext, LanguageModeEnum } from './components/language-mode';
import flagUnitedStates from '../../../assets/img/flag-united-states.svg';
import flagSpain from '../../../assets/img/flag-spain.svg';
import flagBrazil from '../../../assets/img/flag-brazil.svg';
import { useTranslate } from '../../utils/use-i18n.util';
import Translate from '../translate';

export default function Header() {
    const router = useRouter();
    const languageContext = React.useContext(LanguageModeContext);
    const selectedFlag = {
        [LanguageModeEnum.ENGLISH]: flagUnitedStates,
        [LanguageModeEnum.ESPANOL]: flagSpain,
        [LanguageModeEnum.PORTUGUES]: flagBrazil
    }

    const [display, setDisplay] = React.useState('none');

    return (
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
                <Link href="/home" className={router.asPath === '' || router.asPath === '/home' ? 'selected' : ''}><Translate value="header.home" /></Link>
                <Link href="/portfolio" className={router.asPath === '/portfolio' ? 'selected' : ''}><Translate value="header.portfolio" /></Link>
                <Link href="/contact" className={router.asPath === '/contact' ? 'selected' : ''}><Translate value="header.contact" /></Link>
            </div>
        </StyledHeader>
    )
}
