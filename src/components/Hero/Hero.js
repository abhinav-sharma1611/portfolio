import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';

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
          A passionate Frontend Engineer (ReactJS & JavaScript)  having 5 yrs experience of building Web applications with JavaScript / React-js  / Bootstrap / GraphQL / Redux / HTML / CSS / NextJS and some other cool libraries and frameworks.
        </SectionText>
        <a download href="/pdf/Abhinav-ReactJS-Resume-3.10.pdf" target="_blank"><Button><SocialIcons >
          <AiOutlineCloudDownload size="4rem" />
        </SocialIcons>CV
        </Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;