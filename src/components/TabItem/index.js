// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsListDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabsListDetails

  const clickTabItemGet = () => {
    clickTabItem(tabId)
  }

  const isActiveClassName = isActive ? 'button' : ' '

  return (
    <li className="items">
      <button
        type="button"
        onClick={clickTabItemGet}
        className={`${isActiveClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
