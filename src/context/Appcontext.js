import React from 'react'
export default React.createContext({
  selectedPost: 'test',
  setSelectPost: () => {},

  // 열려있는 게시물
  openPost: [],
  setOpenPost: () => {},

  postData: [],
  setPostData: () => {},
})
