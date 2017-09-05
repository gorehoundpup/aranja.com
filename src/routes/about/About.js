import React from 'react'
import { Editable } from 'tux'
import { Body1, H2, H3 } from '../../typography'
import Page from '../../components/Page'
import TeamGrid from '../../components/Team/Grid'
import FamilyGrid from '../../components/FamilyGrid'
import Section from '../../components/Section'
import SectionHero from '../../components/SectionHero'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import teamHeroPhoto2 from '../../components/Team/Aranja00557.jpg'
import teamHeroPhoto3 from '../../components/Team/Aranja00711-Edit.jpg'
import '../../components/Team/styles.css'

const About = ({ content, team, hero }) => (
  <Editable model={content}>
    <Page name="About">
      <Section noPadding top="medium" bottom="medium">
        <Intro
          text="About our company"
          description="We are a web development studio based out of beautiful Reykjavik, Iceland."
        />
      </Section>
      <Hero hero={hero} />
      <Section bottom="large">
        <div className="Team-copy">
          <Body1 top="xlarge" bottom="xlarge" center>
            Aranja is a small web studio based and raised in Iceland. Our goal,
            to improve the web, is only achieved with a passionate team that is
            motivated and happy. We believe that the community is what makes the
            web what it is and we intend to support that.
          </Body1>
        </div>
        <TeamGrid />
        <H2 top="xlarge" center>
          Focus on quality
        </H2>
        <Body1 bottom="large" center>
          We focus on doing quality work, keeping the <br />client happy and the
          community amazed.
        </Body1>
        <SectionHero img={teamHeroPhoto2} caption="Hard at work" />
        <div className="Team-copy">
          <Body1 top="medium" bottom="medium" center>
            Instead of being a group of coworkers that only work together, we
            are friends that just happen to also work together. Frequently, we
            meetup after work to see the latest Marvel movie, hack on a
            side-project or just to enjoy a dinner with our families.
          </Body1>
        </div>
        <SectionHero img={teamHeroPhoto3} caption="Hacking on a side-project" />
      </Section>
      <Section top="medium" bottom="medium">
        <H3 top="large" center>
          One Family
        </H3>
        <Body1 bottom="large" center>
          Looking forward to Mondays since 2013
        </Body1>
        <FamilyGrid />
      </Section>
    </Page>
  </Editable>
)

export default About
