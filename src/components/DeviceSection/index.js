import React, { Component } from 'react'
import { Body1, H2 } from '../../typography'
import Parallax from '../Parallax'
import Device from './Device'
import kolibri from './kolibri.jpg'
import './styles.css'

class DeviceSection extends Component {
  render() {
    const { device, copy, heading, image } = this.props
    return (
      <div className="DeviceSection">
        <div
          className="DeviceSection-copy"
        >
          {heading &&
            <H2 bottom="small">
              {heading}
            </H2>}
          <Body1>
            {copy}
          </Body1>
        </div>
        <Parallax clamp>
          <div className="DeviceSection-device">
            <Device image={kolibri} />
          </div>
        </Parallax>
      </div>
    )
  }
}

export default DeviceSection