import './index.css'

const Banners = props => {
  const {cardList} = props
  const {headerText, description, className} = cardList
  return (
    <li className={className}>
      <h1 className="heading-element">{headerText}</h1>
      <p className="content">{description}</p>
      <div>
        <button className="butn"> Show More </button>
      </div>
    </li>
  )
}

export default Banners
