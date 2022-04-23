// import React from 'react'

// const ApplyForContract = (props) => {
//   return <div>ApplyForContract</div>
// }

// export default ApplyForContract

import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  // CFormSelect,
  // CInputGroup,
  // CInputGroupText,
  CRow,
} from '@coreui/react'
// import { DocsExample } from 'src/components'

const ApplyForContract = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Contract</strong> <small>Form</small>
          </CCardHeader>
          <CCardBody>
            {/*<p className="text-medium-emphasis small">
              By adding <a href="https://coreui.io/docs/layout/gutters/">gutter modifier classes</a>
              , you can have control over the gutter width in as well the inline as block direction.
            </p>*/}
            {/* <DocsExample href="forms/layout#gutters">
              <CRow className="g-3">
                <CCol xs>
                  <CFormInput placeholder="First name" aria-label="First name" />
                  {console.log(value)};
                </CCol>
                <CCol xs>
                  <CFormInput placeholder="Last name" aria-label="Last name" />
                </CCol>
              </CRow>
            </DocsExample>*/}
            <p className="text-medium-emphasis small">
              Apply According to Contract Details, this will subject to validation and wrong input
              results penalty.
            </p>
            {/*<DocsExample href="forms/layout#gutters">*/}
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="inputNumber">UID</CFormLabel>
                <CFormInput type="number" id="inputNumber4" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputPassword4">ContractNumber</CFormLabel>
                <CFormInput type="number" id="inputNumber" />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="inputAddress">ContractName</CFormLabel>
                <CFormInput id="inputAddress" placeholder="nh22 contract" />
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="inputZip">Budget</CFormLabel>
                <CFormInput id="inputZip" />
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="inputZip">Warranty</CFormLabel>
                <CFormInput id="inputZip" />
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="inputZip">Time</CFormLabel>
                <CFormInput id="inputZip" />
              </CCol>
              {/*<CCol xs={12}>
                <CFormLabel htmlFor="inputAddress2">Transaction Address</CFormLabel>
                <CFormInput id="inputAddress2" placeholder="7c666f9d4ce550198da3654bd66431e" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputCity">City</CFormLabel>
                <CFormInput id="inputCity" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputState">State</CFormLabel>
                <CFormSelect id="inputState">
                  <option>Choose...</option>
                  <option>...</option>
                </CFormSelect>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="inputZip">UID</CFormLabel>
                <CFormInput id="inputZip" />
              </CCol>*/}
              <CCol xs={12}>
                <CFormCheck
                  type="checkbox"
                  id="gridCheck"
                  label="these are legally correct informations"
                />
              </CCol>
              <CCol xs={12}>
                <CButton type="submit">Apply this Contract</CButton>
              </CCol>
            </CForm>
            {/*</DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ApplyForContract
