import React from 'react'
// import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  // CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
// import { DocsExample } from 'src/components'

const PendingBidders = (props) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>BidderInfos</strong> <small>Variants</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Select the bidder and approve or reject for the contracts;
            </p>
            {/*<DocsExample href="components/table#variants">*/}
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Bidder</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow color="success">
                  <CTableHeaderCell scope="row">Bidder1</CTableHeaderCell>
                  <CTableDataCell>renderVal</CTableDataCell>
                  <CTableDataCell>Promoted</CTableDataCell>
                </CTableRow>
                <CTableRow color="danger">
                  <CTableHeaderCell scope="row">Bidder2</CTableHeaderCell>
                  <CTableDataCell>renderVal</CTableDataCell>
                  <CTableDataCell>Demoted</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
            {/*</DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      {/*<CCol xs={12}>*/}
    </CRow>
  )
}

export default PendingBidders
