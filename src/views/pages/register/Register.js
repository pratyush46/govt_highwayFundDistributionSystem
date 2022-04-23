import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register As New Bidder</h1>
                  <p className="text-medium-emphasis">Setup Account to Apply For Contracts</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>{/*<CIcon icon={cilUser} />*/}$</CInputGroupText>
                    <CFormInput placeholder="name" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>#</CInputGroupText>
                    <CFormInput placeholder="Class" autoComplete="class" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@{/*<CIcon icon={cilLockLocked} />*/}</CInputGroupText>
                    <CFormInput type="number" placeholder="UID" autoComplete="new-UID" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>t{/*<CIcon icon={cilLockLocked} />*/}</CInputGroupText>
                    <CFormInput type="number" placeholder="warrantyPeriod" autoComplete="period" />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
