import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineLogout,
} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import './index.css'

const SideBar = () => (
  <div className="sidebar-container">
    <img
      src="https://res.cloudinary.com/dx1hxk1dn/image/upload/v1663594925/1624259054779_dbwocb.jpg"
      alt="logo"
      className="logo"
    />
    <ul className="middle-section">
      <li>
        <div className="apps">
          <AiOutlineAppstore color="#f2511f" size="24" />
          <p className="para1">My Apps</p>
        </div>
      </li>
      <li className="resources">
        <BsFillPeopleFill color="" size="24" />
        <p className="para">Resources</p>
      </li>
    </ul>
    <ul className="bottom-section">
      <li className="resources">
        <AiOutlineHome color="" size="24" />
        <p className="para">My Organization</p>
      </li>
      <li className="resources">
        <AiOutlineSetting color="" size="24" />
        <p className="para">Settings</p>
      </li>
      <li className="resources">
        <AiOutlineLogout color="" size="24" />
        <p className="para">Logout</p>
      </li>
    </ul>
  </div>
)

export default SideBar
