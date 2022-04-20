import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        {/*<a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>*/}
        Government Highway Fund Distribution System
      </div>
      <div className="ms-auto">
        {/*<span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>*/}
        <span className="me-1">&copy; 2022 vikram;pratyush;</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
