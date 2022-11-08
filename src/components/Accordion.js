import React, { useState } from 'react'
import styled from 'styled-components'
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc'

function Accordion({ title, children, isBold, initialExpanded }) {
  const [expended, setExpended] = useState(initialExpanded || false)

  return (
    <>
      <AccordionWrap
        onClick={() => {
          setExpended(!expended)
        }}
      >
        {expended ? <VscChevronDown /> : <VscChevronRight />}
        <span>{title ? <strong>{title}</strong> : title}</span>
      </AccordionWrap>
      {
        <AccordionContentWrap expended={expended}>
          {children}
        </AccordionContentWrap>
      }
    </>
  )
}

export default Accordion

const AccordionWrap = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.8rem;
  padding: 4px 0px;

  cursor: pointer;

  > span {
    padding-left: 2px;
  }
`

const AccordionContentWrap = styled.div`
  max-height: ${({ expended }) => (expended ? '500px' : '0')};
  overflow: hidden;
  transition: ${({ expended }) =>
    expended ? 'max-height 0.25s ease-in' : 'max-height 0.15s ease-out'};

  user-select: none;
  margin-bottom: 5px;
  margin-left: 15px;
`
