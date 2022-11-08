import React, { useContext } from 'react'
import styled from 'styled-components'
import Appcontext from '../context/Appcontext'

export default function PostWrap({ path, title, isClose }) {
  const {
    selectedPost,
    postData,
    openPost,
    setSelectedPost,
    setOpenPost,
  } = useContext(Appcontext)
  function selectedFunction() {
    setSelectedPost(path)
    if (!openPost.includes(path)) {
      setOpenPost([...openPost, path])
    }
  }
  return (
    <PostWrapStyled
      onClick={selectedFunction}
      className={selectedPost === path ? 'selected' : ''}
    >
      <span
        className={isClose && selectedPost === path ? 'visible' : ''}
        onClick={(e) => {
          e.stopPropagation()
          const openPostFilter = openPost.filter((one) => one !== path)
          setOpenPost(openPost.filter((one) => one !== path))

          setSelectedPost(
            openPostFilter.length !== 0 ? openPostFilter[0].path : null,
          )
        }}
      >
        x
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;📝{title}
    </PostWrapStyled>
  )
}

const PostWrapStyled = styled.div`
  cursor: pointer;
  padding: 5px 0;
  position: relative;

  > span {
    position: absolute;
    left: 5px;
    top: 3px;
    display: none;

    &.visible {
      display: block;
    }
  }

  &:hover > span {
    display: block;
  }

  &:not(.selected):hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  &.selected {
    background-color: ${({ theme }) => theme.color.selected};
  }
`
