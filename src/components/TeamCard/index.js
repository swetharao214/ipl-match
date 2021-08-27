import './index.css'

const TeamCard = props => {
  const {blogData} = props
  const {id, name, teamImageUrl} = blogData

  return (
    <div className="card-container">
      <img src={teamImageUrl} alt={`teamImageUrl${id}`} />
      <h1 className="heading">{name}</h1>
    </div>
  )
}
export default TeamCard
