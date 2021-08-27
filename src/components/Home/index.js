// Write your code here
import {Component} from 'react'
// import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    // const updatedData = data.map(eachItem => ({
    // name: eachItem.name,
    // id: eachItem.id,
    // teamImageUrl: eachItem.team_image_url,

    // console.log(updatedData)

    this.setState({blogsData: updatedData})
  }

  render() {
    const {blogsData} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="pic"
          className="cricket"
        />
        <h1 className="heading">IPL Dashboard</h1>

        <div>
          {blogsData.map(item => (
            <TeamCard blogsData={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default Home
