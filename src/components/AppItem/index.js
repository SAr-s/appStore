// Write your code here

import './index.css'

const AppItem = props => {
  const {projectDetails} = props
  const {imageUrl, appName} = projectDetails

  return (
    <li className="project-item">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
