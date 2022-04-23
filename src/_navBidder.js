import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _navBidder = [
  {
    component: CNavItem,
    name: 'HighwayFunds',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'danger',
      text: '₹',
    },
  },
  {
    component: CNavGroup,
    name: 'Bidder',
    to: '/bidder',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'BidderInfo',
        to: '/bidder/bidderInfo',
      },
      {
        component: CNavItem,
        name: 'ApplyForContract',
        to: '/bidder/ApplyForContract',
      },
      {
        component: CNavItem,
        name: 'ApplyAsBidder',
        to: '/bidder/ApplyAsBidder',
      },
    ],
  },
]

export default _navBidder
