import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickChangeTab = () => {
    onChangeTab(tabId)
  }
  const styleTab = isActive ? 'active-tab' : ''
  return (
    <li className="tab-item">
      <button className={styleTab} type="button" onClick={onClickChangeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
