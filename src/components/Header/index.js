import {RiNotification2Line} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import './index.css'

const Header = () => (
  <div className="header-container">
    <ul>
      <li>
        <h1>My Apps /> </h1>
      </li>
      <li>
        <h1 className="tasks">Tasks</h1>
      </li>
    </ul>
    <ul className="icon-container">
      <li>
        <div className="header-icon-container">
          <RiNotification2Line color="#666152" size="24" />
        </div>
      </li>
      <li>
        <div className="header-icon-container">
          <CgProfile color="#666152" size="24" />
        </div>
      </li>
    </ul>
  </div>
)

export default Header
