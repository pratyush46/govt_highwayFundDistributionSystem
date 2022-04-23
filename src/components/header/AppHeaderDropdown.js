import React from 'react'
// import { NavLink } from 'react-router-dom'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  // cilBell,
  // cilCreditCard,
  // cilCommentSquare,
  cilEnvelopeOpen,
  // cilFile,
  // cilLockLocked,
  // cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import connectToMetaMask from '../../index.js'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">New Contracts</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Contract 1
          <CBadge color="info" className="ms-2">
            50
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Contract 2
          <CBadge color="success" className="ms-2">
            45
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Contract 3
          <CBadge color="danger" className="ms-2">
            38
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Contract 4
          <CBadge color="warning" className="ms-2">
            50
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">Top Bidders</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Bidder Uno
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Bidder Dos
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Bidder Tres
          <CBadge color="secondary" className="ms-2">
            90
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Bidder Fourth
          <CBadge color="primary" className="ms-2">
            85
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          More Public Data
        </CDropdownItem>
        <CDropdownDivider />

        <CDropdownItem>
          <CButton onClick={connectToMetaMask}>Account</CButton>
        </CDropdownItem>
        <CDropdownItem>
          {/*<Link to="/register">
            <CButton color="primary" className="mt-3" active tabIndex={-1}>
              Register
            </CButton>
          </Link>*/}
          {/*<NavLink to="/register">anywords</NavLink>*/}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
