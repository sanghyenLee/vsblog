import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { HiOutlineDocument } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import Accordion from '../components/Accordion'
import Content from '../components/Content'
import Appcontext from '../context/Appcontext'
import { getPostOne } from '../common/common.function'
import PostWrap from '../components/PostWrap'

function Main() {
  const [selected, setSelected] = useState(null)
  const {
    Theme,
    setTheme,
    selectedPost,
    postData,
    openPost,
    setSelectedPost,
    setOpenPost,
  } = useContext(Appcontext)

  const listArr = [
    {
      icon: <HiOutlineDocument size={24} />,
      path: 'EXPLORER',
      content: (
        <>
          <Accordion title="OPEN POSTS" isBold={true} initialExpanded={true}>
            {openPost.map((one, index) => {
              const data = getPostOne(postData, one)
              return (
                <PostWrap
                  path={data.path}
                  title={data.title}
                  key={index}
                  isClose={true}
                />
              )
            })}
          </Accordion>
          <Accordion title="VSCODE" isBold={true}>
            {postData.map((one, index) => (
              <Content {...one} key={index} />
            ))}
          </Accordion>
        </>
      ),
    },
    {
      icon: <AiOutlineSearch size={24} />,
      path: 'SEARCH',
      content: <p>111</p>,
    },
  ]

  return (
    <Wrap>
      <LeftBar>
        <div>
          {listArr.map((one, index) => (
            <IconWrap
              selected={selected === index}
              onClick={() => {
                setSelected(selected === index ? null : index)
              }}
              key={index}
            >
              {one.icon}
            </IconWrap>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              setTheme(Theme === 'dark' ? 'light' : 'dark')
            }}
          >
            테마 변경
          </button>
        </div>
      </LeftBar>

      {selected !== null && listArr[selected] && (
        <LeftContent>
          <p>{listArr[selected].path}</p>
          {listArr[selected].content}
        </LeftContent>
      )}
      <RightWrap selected={selected}>
        <RightHeader>
          {openPost.map((one, index) => {
            const data = getPostOne(postData, one)

            return (
              <div
                className={selectedPost === one ? 'selected' : ''}
                onClick={() => {
                  setSelectedPost(data.path)
                }}
                key={index}
              >
                📝{data.title}
                <span
                  onClick={(e) => {
                    e.stopPropagation()
                    const openPostFilter = openPost.filter(
                      (one) => one !== data.path,
                    )
                    setOpenPost(openPost.filter((one) => one !== data.path))

                    setSelectedPost(
                      openPostFilter.length !== 0 ? openPostFilter[0] : null,
                    )
                  }}
                >
                  x
                </span>
              </div>
            )
          })}
        </RightHeader>
        <RightContent selected={selected}>{selectedPost}</RightContent>
      </RightWrap>
    </Wrap>
  )
}

export default Main

const RightHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.color.secondary};

  > div {
    width: 150px;
    min-width: 150px;
    padding: 5px 10px;
    background-color: #${({ theme }) => theme.color.secondary};
    border-right: 2px solid #1e1e1e;
    position: relative;
    cursor: pointer;
    &.selected {
      background-color: ${({ theme }) => theme.color.primary};
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }

    &:hover::-webkit-scrollbar-thumb {
      display: block;
    }

    &:not(.selected) > span {
      display: none;
    }

    &:hover > span {
      display: block;
    }

    > span {
      position: absolute;
      right: 15px;
      top: 10px;
    }
  }
`

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;

  border-left: ${({ theme, selected }) =>
    `${selected ? 2 : 0}px solid ${theme.color.text}`};

  > svg {
    color: ${({ theme, selected }) =>
      selected ? theme.color.text : '#7a7a7a'};
  }
`

const Wrap = styled.div`
  display: flex;
  height: 100vh;
`

const LeftBar = styled.div`
  width: 50px;
  min-width: 50px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.third};

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > div:last-child {
    padding-bottom: 30px;
  }
`

const LeftContent = styled.div`
  width: 320px;
  min-width: 320px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 10px;

  > p {
    padding-bottom: 10px;
    color: #${({ theme }) => theme.color.hover};
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`

const RightContent = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background-color: ${({ theme }) => theme.color.primary};
`

const RightWrap = styled.div`
  width: ${({ selected }) =>
    selected === null ? 'calc(100% - 50px)' : 'calc(100% - 320px - 50px)'};

  @media (max-width: 520px) {
    display: ${({ selected }) => (selected === null ? 'block' : 'none')};
  }
`
