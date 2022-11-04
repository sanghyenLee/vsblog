import React, { useState } from 'react'
import styled from 'styled-components'
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc'

export default function Accordion({ title, children, isbold }) {
  const [expended, setExpended] = useState(false)
  return (
    <>
      <AccordionWrap
        onClick={() => {
          setExpended(!expended)
        }}
      >
        {expended ? <VscChevronDown /> : <VscChevronRight />}
        <span>{isbold ? <strong>{title}</strong> : title}</span>
      </AccordionWrap>
      {expended && <AccordionContentWrap>{children}</AccordionContentWrap>}
    </>
  )
}

const AccordionWrap = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.8rem;
  padding: 5px 0;
  cursor: pointer;

  > span {
    padding-left: 5px;
    user-select: none;
  }
`
const AccordionContentWrap = styled.div`
  user-select: none;
  padding-top: 5px;
  padding-left: 15px;
`
