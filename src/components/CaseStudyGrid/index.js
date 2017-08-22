// TODO: CaseStudyGrid should have a scroll functionality, via button, to see older studies.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import classnames from 'classnames'
import { EditInline } from 'tux'
import { H3, Body1 } from '../../typography'
import './styles.css'

// Todo: fill this dynamically.

import image1 from './kolibri-placeholder.jpg'
import image2 from './dschool-placeholder.jpg'
import image3 from './sprotarnir-placeholder.png'

let defaultItems = [
  { title: 'Stanford d.school', image: image2, href: '/work/dschool', year: undefined },
  { title: 'Kolibri', image: image1, href: '/work/kolibri', year: undefined },
  { title: 'Sprotarnir', image: image3, href: '/work/sprotarnir', year: undefined },
]

class CaseStudyGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  onChange(isVisible) {
    this.setState({
      isVisible,
    })
  }

  render() {
    const { isVisible } = this.state
    const { items = defaultItems } = this.props
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={250}
        minTopValue={400}
        partialVisibility
      >
        <div className={classnames('CaseStudyGrid', 'is-visible')}>
          <H3 component="div" className="CaseStudyGrid-heading" bottom="xsmall">
            <EditInline format="plain" field="fields.content.portfolioHeading">Latest case studies</EditInline>
          </H3>
          <Body1 component="div" className="CaseStudyGrid-subheading" bottom="medium">
            <EditInline format="plain" field="fields.content.portfolioText">
              Have a look at our recently published work
            </EditInline>
          </Body1>
          <div className="wrap">
            {items.map((item, index) =>
              <a
                href={item.href}
                key={index}
                className={classnames('CaseStudyGrid-itemWrap', item.title && 'has-content')}
              >
                {item.title &&
                  <p className="CaseStudyGrid-caption">
                    {item.title}
                  </p>}
                <div className="CaseStudyGrid-item">
                  {item.year &&
                    <p className="CaseStudyGrid-itemText">
                      {item.year}
                    </p>}
                  <div
                    className="CaseStudyGrid-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />
                </div>
              </a>,
            )}
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

CaseStudyGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      href: PropTypes.string,
      year: PropTypes.string || PropTypes.number,
    }),
  ),
}

export default CaseStudyGrid
