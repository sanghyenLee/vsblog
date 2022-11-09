import React from 'react'

export default React.createContext({
  //현재 선택된 게시물
  selectedPost: '',
  setSelectedPost: () => {},

  //열여있는 게시물
  openPost: [],
  setOpenPost: () => {},

  //게시물 데이터
  postData: [],

  //테마 관련
  theme: '',
  setTheme: () => {},
})
