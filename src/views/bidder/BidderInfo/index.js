import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import {
  AllBidders,
  RegisteredBiddersUid,
  scorebyUID,
  numberofprojectsapplied,
} from '../../../vikram'

const BidderInfo = (props) => {
  // use state for storing data fetched from functions
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [scoreUID, setscoreUID] = useState('')
  const [projectsApplied, setprojectsApplied] = useState('')
  const [classDetails, setclassDetails] = useState('')

  let accounts

  // fetching accounts from metamask

  window.ethereum
    .request({
      method: 'eth_requestAccounts',
    })
    .then((acc, err) => {
      if (err) {
        console.log(`Error fetching accounts`)
        console.error(err)
      } else {
        // console.log(acc)
        RegisteredBiddersUid(acc[0]).then((res) => {
          AllBidders(res).then((resArr) => {
            console.log(resArr)
            // updating name and address
            setName(resArr[0])
            setAddress(resArr[4])
            setclassDetails(resArr[1])
          })
          scorebyUID(res).then((result) => {
            setscoreUID(result)
            console.log('Score is ', result)
          })
          numberofprojectsapplied(acc[0]).then((res) => {
            setprojectsApplied(res)
            console.log('Number of projects applied is', res)
          })
        })
      }
    })

  // let result = RegisteredBiddersUid(accounts[0])
  // setRes(result)
  // console.log(result)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Your Details</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              You are currently in <code>Class {classDetails.toUpperCase()}</code>
              {/*<code>&lt;CTableBody&gt;</code>.*/}
            </p>
            <DocsExample href="components/table#hoverable-rows">
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    {/*<CTableHeaderCell scope="col">#</CTableHeaderCell>*/}
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Score</CTableHeaderCell>
                    <CTableHeaderCell scope="col">No. of Projects</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    {/*<CTableHeaderCell scope="row">1</CTableHeaderCell>*/}
                    <CTableDataCell>{name}</CTableDataCell>
                    <CTableDataCell>{address}</CTableDataCell>
                    <CTableDataCell>{scoreUID}</CTableDataCell>
                    <CTableDataCell>{projectsApplied}</CTableDataCell>
                  </CTableRow>
                  {/*<CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
*/}{' '}
                </CTableBody>
              </CTable>
            </DocsExample>
            {/*<DocsExample href="components/table#hoverable-rows">
              <CTable color="dark" hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#hoverable-rows">
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Physical Verification</strong> <small>Of last contract</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Your status is <code>good</code> (fetch) and you can improve more;
              {/*try to pass this also as parameters from data*/}
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Physical Checkup Writeup</CAccordionHeader>
                  <CAccordionBody>
                    <strong>That physical status</strong> subjective value<code>.asdf</code>(Null
                    incase of none)
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Check Allowance</CAccordionHeader>
                  <CAccordionBody>
                    <strong>Allowance data</strong> value here<code>.asdf</code>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Withdraw</CAccordionHeader>
                  <CAccordionBody>
                    <strong>Withdraw data</strong> value here<code>.asdf</code>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default BidderInfo
