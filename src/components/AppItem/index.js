import './index.css'

const AppItem = props => {
  const {apps} = props
  const {appName, imageUrl} = apps

  return (
    <li className="apps-container">
      <img src={imageUrl} alt={appName} className="image" />

      <p className="heading">{appName}</p>
    </li>
  )
}

export default AppItem
