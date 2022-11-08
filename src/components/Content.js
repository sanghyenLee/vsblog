import React, { Component, useContext } from 'react'
import styled from 'styled-components'
import Appcontext from '../context/Appcontext'
import Accordion from './Accordion'

function Content({ type, title, children, path }) {
  const { setSelectedPost, setOpenPost, openPost, selectedPost } = useContext(
    Appcontext,
  )

  function selectFunction() {
    setSelectedPost(path)

    if (!openPost.includes(path)) {
      setOpenPost([...openPost, path])
    }
  }

  return type === 'directory' ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one, index) => (
        <Content {...one} key={index} />
      ))}
    </Accordion>
  ) : (
    <PostWrap
      onClick={selectFunction}
      className={selectedPost === path ? 'selected' : ''}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;📝{title}
    </PostWrap>
  )
}

export default Content

const PostWrap = styled.div`
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  &.selected {
    background-color: ${({ theme }) => theme.color.selected};
  }
`
