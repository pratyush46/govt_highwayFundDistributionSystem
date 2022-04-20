// import React from 'react'

// const Bidder = (props) => {
//   return <div>GovernmentBidders</div>adsf
// }

// export default Bidder

import React, { useState } from 'react'
import IncrementScore from '../../../vikram'
import DecrementScore from '../../../vikram'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const BrowserDefaults = () => {
  const [validated, setValidated] = useState(false)
  // const [address, number] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    // call the function from app.js
  }
  return (
    <CForm className="row g-3 needs-validation" validated={validated} onSubmit={handleSubmit}>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormInput type="text" id="validationDefault03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        <CFormSelect id="validationDefault04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormInput type="text" id="validationDefault05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsInc = () => {
  const [validated, setValidated] = useState(false)
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event) => {
    console.log(`Handle submit function is called`)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // call function from appWeb.js
    console.log(`Handle Submit before calling IncrementScore`)
    // call the fuction from app.js
    console.log(`address : ${address}`)
    console.log(`number : ${number}`)
    const result = IncrementScore(address, number)
    setResult(result)
    console.log(`Successfully called IncrementScore`)
  }
  const onChangeAddress = (event) => {
    setAddress(event.target.value.toString())
  }
  const onChangeNumber = (event) => {
    setNumber(event.target.value.toString())
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">Address</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip03"
          required
          value={address}
          onChange={onChangeAddress}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid address.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">number</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={number}
          onChange={onChangeNumber}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid number.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          incRep
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsDec = () => {
  const [validated, setValidated] = useState(false)
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event) => {
    console.log(`Handle submit function is called`)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // call function from appWeb.js
    console.log(`Handle Submit before calling IncrementScore`)
    // call the fuction from app.js
    console.log(`address : ${address}`)
    console.log(`number : ${number}`)
    const result = IncrementScore(address, number)
    setResult(result)
    console.log(`Successfully called IncrementScore`)
  }
  const onChangeAddress = (event) => {
    setAddress(event.target.value.toString())
  }
  const onChangeNumber = (event) => {
    setNumber(event.target.value.toString())
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">Address</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip03"
          required
          value={address}
          onChange={onChangeAddress}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid address.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">number</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={number}
          onChange={onChangeNumber}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid number.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          dec
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsWithdraw = () => {
  const [validated, setValidated] = useState(false)
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event) => {
    console.log(`Handle submit function is called`)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // call function from appWeb.js
    console.log(`Handle Submit before calling IncrementScore`)
    // call the fuction from app.js
    console.log(`address : ${address}`)
    console.log(`number : ${number}`)
    const result = IncrementScore(address, number)
    setResult(result)
    console.log(`Successfully called IncrementScore`)
  }
  const onChangeAddress = (event) => {
    setAddress(event.target.value.toString())
  }
  const onChangeNumber = (event) => {
    setNumber(event.target.value.toString())
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">Address</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip03"
          required
          value={address}
          onChange={onChangeAddress}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid address.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">number</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={number}
          onChange={onChangeNumber}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid number.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          withdraw
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsAllowance = () => {
  const [validated, setValidated] = useState(false)
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event) => {
    console.log(`Handle submit function is called`)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // call function from appWeb.js
    console.log(`Handle Submit before calling IncrementScore`)
    // call the fuction from app.js
    console.log(`address : ${address}`)
    console.log(`number : ${number}`)
    const result = IncrementScore(address, number)
    setResult(result)
    console.log(`Successfully called IncrementScore`)
  }
  const onChangeAddress = (event) => {
    setAddress(event.target.value.toString())
  }
  const onChangeNumber = (event) => {
    setNumber(event.target.value.toString())
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">Address</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip03"
          required
          value={address}
          onChange={onChangeAddress}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid address.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">number</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={number}
          onChange={onChangeNumber}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid number.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          checkAllowance
        </CButton>
      </CCol>
    </CForm>
  )
}

const Bidder = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Increase</strong> <small>reputation;</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              goverment to put the status here after which there will be physical verification
            </p>
            <DocsExample href="forms/validation#tooltips">{TooltipsInc()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Decrease</strong> <small>reputation;</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              goverment to put the status here after which there will be physical verification
            </p>
            <DocsExample href="forms/validation#tooltips">{TooltipsDec()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Withdraw</strong> <small>money;</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              goverment to put the status here after which there will be physical verification
            </p>
            <DocsExample href="forms/validation#tooltips">{TooltipsWithdraw()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Allowance</strong> <small>money;</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              goverment to put the status here after which there will be physical verification
            </p>
            <DocsExample href="forms/validation#tooltips">{TooltipsAllowance()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Bidder
