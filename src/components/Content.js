import React, { Component, useContext } from 'react'
import Appcontext from '../context/Appcontext'
import Accordion from './Accordion'

function Content({ type, title, children }) {
  const { setSelectedPost, setOpenPost, openPost } = useContext(Appcontext)

  function selectFunction() {
    setSelectedPost(title)
    setOpenPost([...openPost, title])
  }

  return type === 'directory' ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one, index) => (
        <Content {...one} key={index} />
      ))}
    </Accordion>
  ) : (
    <div onClick={selectFunction}>&nbsp;&nbsp;&nbsp;&nbsp;📝{title}</div>
  )
}

export default Content
