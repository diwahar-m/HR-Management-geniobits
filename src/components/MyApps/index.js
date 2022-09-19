import {BiChevronLeft, BiChevronRight, BiSearch} from 'react-icons/bi'
import {BsCalendar} from 'react-icons/bs'
import PopupButton from '../PopupButton'
import SideBar from '../SideBar'
import List from '../List'
import Header from '../Header'
import './index.css'

const MyApps = () => (
  <div className="apps-container">
    <div className="side-bar">
      <SideBar /> {/* Using SideBar Component */}
    </div>
    <div className="main-container">
      <div className="header">
        <Header /> {/* Using Header Component */}
      </div>
      <div className="home-section">
        <div className="top-section">
          <div className="total-task">
            <div className="task-line-1">
              <h3>Tasks</h3>
              <div className="task-date">
                <BiChevronLeft color="" size="24" />
                <BsCalendar color="" size="24" />
                <p className="date"> May 9, 2022</p>
                <BiChevronRight color="" size="24" />
              </div>
            </div>
            <hr />
            <ul className="task-line-2">
              <li>
                <div className="ongoing">
                  <p className="total-task-para">66</p>
                  <p className="total-task-para">Ongoing</p>
                </div>
              </li>
              <li>
                <div className="delayed">
                  <p className="total-task-para">24</p>
                  <p className="total-task-para">Delayed</p>
                </div>
              </li>
              <li>
                <div className="completed">
                  <p className="total-task-para">10</p>
                  <p className="total-task-para">Completed</p>
                </div>
              </li>
              <li>
                <div className="assigned">
                  <p className="total-task-para">100</p>
                  <p className="total-task-para">Total Assigned</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="add-task-container">
            <PopupButton /> {/* Using PopupButton  Component */}
          </div>
        </div>

        <div className="sorting-section">
          <div className="sort-item">
            <h3>Sort by:</h3>
            <select className="sorting">
              <option value="All">All</option>
            </select>
          </div>
        </div>

        <div className="task-list-container">
          <div className="task-line-1">
            <h3>Task List</h3>
            <div className="task-filter">
              <div className="filter-all">
                <p className="filters">All</p>
              </div>
              <p className="filters-2">My Tasks</p>
            </div>
          </div>
          <div className="search-section">
            <BiSearch color="#292928" size="20" className="search-icon" />
            <input
              type="search"
              className="search"
              placeholder="     Search Tasks"
            />
          </div>
          <div className="list">
            <List /> {/* Using List Component */}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MyApps
