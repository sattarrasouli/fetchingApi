import { useEffect } from "react"
import axios from "axios"
function Item(props) {
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get(`https://anapioficeandfire.com/api/houses?page=${props.num}&pageSize=12`)
        console.log(resp)
        const response = resp.data
        props.setPerson(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [props.num])

  return (
    <div className="container">
      {props.person.map(res => (
        <div id={res.name} className="item">
          <p>
            <span>Name: </span> {res.name}
          </p>
          <p>
            <span>Region: </span>
            {res.region != "" ? res.region : "No Region"}
          </p>
          <p>
            <span>CoatOfArms: </span>
            {res.coatOfArms != "" ? res.coatOfArms : "No CoatOfArms"}
          </p>
          <p>
            <span>Seats: </span>
            {res.seats != "" ? res.seats : "No Seat"}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Item
