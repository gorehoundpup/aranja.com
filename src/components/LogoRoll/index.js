import React from 'react'
import './styles.css'

import logoAndroid from './android.svg'
import logoFacebook from './facebook.svg'
import logoGithub from './github.svg'
import logoKolibri from './kolibri.svg'
import logoLandsbankinn from './lsb.svg'
import logoNest from './nest.svg'
import logoUpperquad from './uq.svg'

const logoGroups = [
  [logoAndroid, logoFacebook, logoGithub],
  [logoKolibri, logoLandsbankinn, logoNest],
  [logoFacebook, logoKolibri, logoUpperquad],
]

const LogoRoll = () => {
  return (
    <div className="LogoRoll">
      {logoGroups.map((group, index) =>
        <div className="LogoRoll-row" key={`group${index}`}>
          {group.map((logo, index) =>
            <div className="LogoRoll-image" key={`image${index}`}>
              <img src={logo} alt="" />
            </div>,
          )}
        </div>,
      )}
    </div>
  )
}

export default LogoRoll
