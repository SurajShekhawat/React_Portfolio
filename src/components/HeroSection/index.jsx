import React from 'react';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/IMG_0074.jpeg';
import HeroBgAnimation from '../HeroBgAnimation';

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
        <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br />{Bio.name}</Title>
            <TextLoop>I am a <span><Typewriter 
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
            /></span></TextLoop>
            <SubTitle>{ Bio.description }</SubTitle>
            <ResumeButton href={ Bio.resume } target="_blank">Check CV</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
          <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero