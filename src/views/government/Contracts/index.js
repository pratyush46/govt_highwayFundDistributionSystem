// import React from 'react'

// const Contracts = (props) => {
//   return <div>Contracts as govt. data.</div>
// }

// export default Contracts
import React, { useState } from 'react'
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
  // CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
// import { DocsCallout, DocsExample } from 'src/components'
import {
  SetDetails,
  transferOwnership2,
  withdraw,
  reduceallowance,
  addallowance,
} from '../../../vikram'

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
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
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

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const [contractName, setContractName] = useState('')
  const [description, setDescription] = useState('')
  const [classState, setClassState] = useState('')
  const [contractNumber, setContractNumber] = useState('')
  const [warranty, setWarranty] = useState('')
  const [days, setDays] = useState('')
  const [budget, setBudget] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reputation, setReputation] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // calling the function
    SetDetails(
      contractName,
      description,
      classState,
      contractNumber,
      warranty,
      days,
      budget,
      endDate,
      reputation,
    ).then((res, err) => {
      if (err) {
        console.log(`Error in SetDetails`)
        console.error(err)
      } else {
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeContractName = (event) => {
    setContractName(event.target.value.toString())
  }
  const onChangeDescription = (event) => {
    setDescription(event.target.value.toString())
  }
  const onChangeClass = (event) => {
    setClassState(event.target.value.toString())
  }
  const onChangeContractNumber = (event) => {
    setContractNumber(event.target.value.toString())
  }
  const onChangeWarranty = (event) => {
    setWarranty(event.target.value.toString())
  }
  const onChangeDays = (event) => {
    setDays(event.target.value.toString())
  }
  const onChangeBudget = (event) => {
    setBudget(event.target.value.toString())
  }
  const onChangeEndDate = (event) => {
    setEndDate(event.target.value.toString())
  }
  const onChangeReputation = (event) => {
    setReputation(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">ContractName</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={contractName}
          onChange={onChangeContractName}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Description</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          required
          value={description}
          onChange={onChangeDescription}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Class</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">Class</CInputGroupText>
          <CFormInput
            type="text"
            id="validationTooltipUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
            value={classState}
            onChange={onChangeClass}
          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">ContractNumber</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip03"
          required
          value={contractNumber}
          onChange={onChangeContractNumber}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">Warranty</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip04"
          required
          value={warranty}
          onChange={onChangeWarranty}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      {/*<CCol md={6} className="position-relative">
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
*/}
      {/*<CCol md={3} className="position-relative">
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
*/}

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">Days</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={days}
          onChange={onChangeDays}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">Budget</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={budget}
          onChange={onChangeBudget}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">EndDate</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={endDate}
          onChange={onChangeEndDate}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">Reputation</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={reputation}
          onChange={onChangeReputation}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Update Info
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsOne = () => {
  const [validated, setValidated] = useState(false)
  const [addallowanceto, setAddAllowanceTo] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    addallowance(addallowanceto, amount).then((res, err) => {
      if (err) {
        console.log('Error in add allowance')
        console.log(err)
      } else {
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeAddAllowanceTo = (event) => {
    setAddAllowanceTo(event.target.value.toString())
  }
  const onChangeAmount = (event) => {
    setAmount(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">To</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={addallowanceto}
          onChange={onChangeAddAllowanceTo}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Amount</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          required
          value={amount}
          onChange={onChangeAmount}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Add Allowance
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsTwo = () => {
  const [validated, setValidated] = useState(false)
  const [reduceallowanceto, setReduceAllowanceTo] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    reduceallowance(reduceallowanceto, amount).then((res, err) => {
      if (err) {
        console.log('Error in reduce allowance')
        console.log(err)
      } else {
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeReduceAllowanceTo = (event) => {
    setReduceAllowanceTo(event.target.value.toString())
  }
  const onChangeAmount = (event) => {
    setAmount(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">To</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={reduceallowanceto}
          onChange={onChangeReduceAllowanceTo}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Amount2Rec</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          required
          value={amount}
          onChange={onChangeAmount}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Reduce
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsThree = () => {
  const [validated, setValidated] = useState(false)
  const [transferownershipto, setTransferOwnershipTo] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    transferOwnership2(transferownershipto).then((res, err) => {
      if (err) {
        console.log('Error in transferownershipto')
        console.log(err)
      } else {
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeTransferOwnershipTo = (event) => {
    setTransferOwnershipTo(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">TransferTo</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={transferownershipto}
          onChange={onChangeTransferOwnershipTo}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>

      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Transfer
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsFour = () => {
  const [validated, setValidated] = useState(false)
  const [withdrawto, setWithdrawTo] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    withdraw(withdrawto, amount).then((res, err) => {
      if (err) {
        console.log('Error in withdraw')
        console.log(err)
      } else {
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeWithdrawTo = (event) => {
    setWithdrawTo(event.target.value.toString())
  }
  const onChangeAmount = (event) => {
    setAmount(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">To</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={withdrawto}
          onChange={onChangeWithdrawTo}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Amount2Withdraw</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          required
          value={amount}
          onChange={onChangeAmount}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Withdraw
        </CButton>
      </CCol>
    </CForm>
  )
}

const Contracts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>government</strong> <small>contractsPage</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">basic contract infos</p>
            {Tooltips()}
            {/*<DocsExample href="forms/validation#tooltips"></DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>government</strong> <small>BidderAddAllowance</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">add bidder modify</p>
            {TooltipsOne()}
            {/*<DocsExample href="forms/validation#tooltips"></DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>government</strong> <small>bidder Reduce</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Reduce bidder modify</p>
            {TooltipsTwo()}
            {/*<DocsExample href="forms/validation#tooltips"></DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>government</strong> <small>Transfer own</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Transer bidder modify</p>
            {TooltipsThree()}
            {/*<DocsExample href="forms/validation#tooltips"></DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>government</strong> <small>withdraw</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">withdraw</p>
            {TooltipsFour()}
            {/*<DocsExample href="forms/validation#tooltips"></DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
//tooltips add reduce transfer withdraw->One Two Three Four
export default Contracts
