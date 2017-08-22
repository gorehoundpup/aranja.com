import React from 'react'
import { Body1, H1, H2, H3 } from '../../../typography'
import Link from '../../Link'
import './styles.css'

const IntroKey = ({ children }) =>
  <Body1 className="IntroSection-key">
    {children}
  </Body1>

const IntroValue = ({ children }) =>
  <Body1 className="IntroSection-value">
    {children}
  </Body1>

const IntroSection = ({ partners, period, awards }) =>
  <div className="IntroSection">
    {partners &&
      partners.map(partner =>
        <div className="IntroSection-item">
          <IntroKey>Partner:</IntroKey>
          <IntroValue>
            {partner}
          </IntroValue>
        </div>
      )}
    {period &&
      <div className="IntroSection-item">
        <IntroKey>Period:</IntroKey>
        <IntroValue>
          {period}
        </IntroValue>
      </div>}
    {awards &&
      <div className="IntroSection-item">
        <IntroKey>Recognitions:</IntroKey>
        <div>
          {awards.map(award =>
            <IntroValue key={award.fields.awardName}>
              {award.fields.awardName} –{' '}
              <Link href={award.fields.awardLink}>
                {award.fields.awardSite}
              </Link>
            </IntroValue>
          )}
        </div>
      </div>}
  </div>

export default IntroSection
