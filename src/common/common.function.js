// 1개의 게시물 데이터 가져오기
export const getPostOne = (postData, path) => {
  const patharr = path.split('/').filter(Boolean)

  const data = patharr.reduce((sum, current, index) => {
    const lastPath = patharr.length - 1 === index

    const target = sum.find(
      (one) =>
        one.title === current && one.type === (lastPath ? 'post' : 'directory'),
    )
    return lastPath ? target : target?.children
  }, postData)

  return data
}
