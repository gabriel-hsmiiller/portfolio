import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { DiAngularSimple, DiGit, DiReact } from 'react-icons/di';
import { SiFlutter, SiMysql, SiNestjs, SiNodedotjs } from 'react-icons/si';
import { SlSpeech } from 'react-icons/sl';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdGroup, MdWork } from 'react-icons/md';
import { RiBook2Fill } from 'react-icons/ri';

import { StyledHome } from "./style";
import mainPicture from '../../assets/img/main-picture.svg'
import { useTranslate } from '../../src/utils/use-translate.util';
import { useRef } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import Translate from '../../src/components/translate';

function Home() {
    const commonInformationViewRef = useRef(null);
    const topRef = useRef(null);

    const scrollToView = (viewRef) => {
        viewRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <StyledHome>
            <div className="go-to-top" onClick={() => scrollToView(topRef)}>
                <ArrowUpward sx={{ color: '#2A2A2A', fontSize: 40 }} />
            </div>
            <div className="face" ref={topRef}>
                <Image src={mainPicture} alt='Main picture' className="face-image" />
                <h1><Translate value="home.firstSection.greetings" /></h1>
                <h2><Translate value="home.firstSection.title" /></h2>
                <div className="arrow-container" onClick={() => scrollToView(commonInformationViewRef)}>
                    <ArrowDownwardIcon sx={{ color: '#7E57C2', fontSize: 32 }} />
                </div>
            </div>
            <hr />
            <div className="common-informations" ref={commonInformationViewRef}>
                <h2>
                    <Translate value="home.secondSection.brazilian" />
                    <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                    <Translate value="home.secondSection.yearsOld" />
                    <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                    <Translate value="home.secondSection.frontEndDesign" />
                </h2>
                <div className='letter-container'>
                    <h3><Translate value="home.secondSection.greetings" /></h3>
                    <article><Translate value="home.secondSection.letter" /></article>
                </div>

                <h2><Translate value="home.thirdSection.hardSkills" /></h2>
                <div className='skill-gauges-container'>
                    <div className="skill-gauges" title="Angular">
                        <div className="skill-gauges-range" style={{transform: 'rotateZ(-45deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(45deg)'}}>
                                <DiAngularSimple size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-gauges" title="React">
                        <div className="skill-gauges-range-medium" style={{transform: 'rotateZ(-100deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(100deg)'}}>
                                <DiReact size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-gauges" title="NestJS">
                        <div className="skill-gauges-range-medium" style={{transform: 'rotateZ(-135deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(135deg)'}}>
                                <SiNestjs size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-gauges" title="Flutter">
                        <div className="skill-gauges-range-medium" style={{transform: 'rotateZ(-180deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(180deg)'}}>
                                <SiFlutter size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-gauges" title="Node.JS">
                        <div className="skill-gauges-range" style={{transform: 'rotateZ(-90deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(90deg)'}}>
                                <SiNodedotjs size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-gauges" title="MySQL">
                        <div className="skill-gauges-range-medium" style={{transform: 'rotateZ(-135deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(135deg)'}}>
                                <SiMysql size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-gauges" title="Git">
                        <div className="skill-gauges-range-medium" style={{transform: 'rotateZ(-145deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(145deg)'}}>
                                <DiGit size={48} />
                            </div>
                        </div>
                    </div>
                </div>

                <h2><Translate value="home.thirdSection.softSkills" /></h2>
                <div className='skill-gauges-container'>
                    <div className="skill-gauges" title={useTranslate('home.thirdSection.tooltips.communication')}>
                        <div className="skill-gauges-range-medium" style={{transform: 'rotateZ(-180deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(180deg)'}}>
                                <SlSpeech size={48} />
                            </div>
                        </div>
                    </div>

                    <div className="skill-gauges" title={useTranslate('home.thirdSection.tooltips.teaching')}>
                        <div className="skill-gauges-range" style={{transform: 'rotateZ(-90deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(90deg)'}}>
                                <FaChalkboardTeacher size={48} />
                            </div>
                        </div>
                    </div>

                    <div className="skill-gauges" title={useTranslate('home.thirdSection.tooltips.teamWork')}>
                        <div className="skill-gauges-range" style={{transform: 'rotateZ(-45deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(45deg)'}}>
                                <MdGroup size={48} />
                            </div>
                        </div>
                    </div>
                </div>

                <h2><Translate value="home.thirdSection.languages" /></h2>
                <div className='skill-gauges-container'>
                    <div className="skill-gauges" title={useTranslate('home.thirdSection.tooltips.english')}>
                        <div className="skill-gauges-range" style={{transform: 'rotateZ(-45deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(45deg)'}}>
                                <span className='skill-language'>EN</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-gauges" title={useTranslate('home.thirdSection.tooltips.portuguese')}>
                        <div className="skill-gauges-range">
                            <div className='skill-gauges-mask'>
                                <span className='skill-language'>PT</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-gauges" title={useTranslate('home.thirdSection.tooltips.spanish')}>
                        <div className="skill-gauges-range-medium" style={{transform: 'rotateZ(-180deg)'}}>
                            <div className='skill-gauges-mask' style={{transform: 'rotateZ(180deg)'}}>
                                <span className='skill-language'>ES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="education-experience">
                <h2><Translate value="home.fourthSection.sectionTitle" /></h2>
                <div className='education'>
                    <div className='education-experience-item'>
                        <RiBook2Fill size={40} />
                        <div>
                            <h3><Translate value="home.fourthSection.education.itTechnician.formation" /></h3>
                            <Translate value="home.fourthSection.education.itTechnician.institute" /><br/>
                            <Translate value="home.fourthSection.education.itTechnician.period" />
                        </div>
                    </div>
                    <div className='education-experience-item'>
                        <RiBook2Fill size={40} />
                        <div>
                            <h3><Translate value="home.fourthSection.education.ADS.formation" /></h3>
                            <Translate value="home.fourthSection.education.ADS.institute" /><br/>
                            <Translate value="home.fourthSection.education.ADS.period" />
                        </div>
                    </div>
                </div>
                <div className='experience'>
                    <div className='education-experience-item'>
                        <MdWork size={40} />
                        <div>
                            <h3><Translate value="home.fourthSection.experience.onApp.company" /></h3>
                            <Translate value="home.fourthSection.experience.onApp.position" /><br/>
                            <Translate value="home.fourthSection.experience.onApp.period" />
                        </div>
                    </div>
                    <div className='education-experience-item'>
                        <MdWork size={40} />
                        <div>
                            <h3><Translate value="home.fourthSection.experience.ootb.company" /></h3>
                            <Translate value="home.fourthSection.experience.ootb.position" /><br/>
                            <Translate value="home.fourthSection.experience.ootb.period" />
                        </div>
                    </div>
                    <div className='education-experience-item'>
                        <MdWork size={40} />
                        <div>
                            <h3><Translate value="home.fourthSection.experience.hausz.company" /></h3>
                            <Translate value="home.fourthSection.experience.hausz.position" /><br/>
                            <Translate value="home.fourthSection.experience.hausz.period" />
                        </div>
                    </div>
                    <div className='education-experience-item'>
                        <MdWork size={40} />
                        <div>
                            <h3><Translate value="home.fourthSection.experience.eld.company" /></h3>
                            <Translate value="home.fourthSection.experience.eld.position" /><br/>
                            <Translate value="home.fourthSection.experience.eld.period" />
                        </div>
                    </div>
                    <div className='education-experience-item'>
                        <MdWork size={40} />
                        <div>
                            <h3><Translate value="home.fourthSection.experience.ciandt.company" /></h3>
                            <Translate value="home.fourthSection.experience.ciandt.position" /><br/>
                            <Translate value="home.fourthSection.experience.ciandt.period" />
                        </div>
                    </div>
                </div>
            </div>
        </StyledHome>
    )
}

export default Home;