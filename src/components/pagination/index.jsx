function Pagination(props) {
  function next() {
    if (props.num < 31) {
      props.setNum(props.num + 1)
    }
  }
  function previous() {
    if (!props.num < 1) {
      props.setNum(props.num - 1)
    }
  }
  return (
    <div className="pagination">
      <a onClick={previous}>Previous</a>
      <a onClick={next}>Next</a>
    </div>
  )
}

export default Pagination
