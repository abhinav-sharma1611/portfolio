import React from 'react';
import {  AiOutlineCloudDownload } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hi There! <br />
        I'm ABHINAV SHARMA
        </SectionTitle>
        <SectionText>
        A passionate Web Developer (ReactJS)  having an experience of building Web applications with JavaScript / Reactjs  / Bootstrap / GraphQL / Redux / HTML / CSS / NextJS and some other cool libraries and frameworks.
        </SectionText>
        <Button onClick={props.handleClick}><SocialIcons download href="./pdf/Abhinav-ReactJS-Resume-3.10.pdf">
            <AiOutlineCloudDownload size="4rem" />
          </SocialIcons>CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;