import Popup from 'reactjs-popup'
import {BsCalendar} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import './index.css'

const PopupButton = () => (
  <div className="popup">
    <Popup
      modal
      trigger={
        <button type="button" className="add-task-button">
          + Add New Task
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-container">
            <h1>Add Task</h1>
            <div className="task-info">
              <div className="task-details">
                <h3 className="task-head">Task Name</h3>
                <div className="name-container">
                  <h3 className="name">Get Appointment Letter from HR</h3>
                </div>
                <h3 className="task-head">Description</h3>
                <input
                  type="text"
                  placeholder="Write Description"
                  className="description"
                />
                <h3 className="task-head">Related To</h3>
                <div className="name-container">
                  <h3 className="name">HR Department</h3>
                </div>
              </div>

              <div className="task-assigned">
                <h3 className="task-head">Assign to</h3>
                <div className="name-container-2">
                  <h3 className="name">Vish</h3>
                </div>
                <div className="name-1-container">
                  <p className="name-1">Gautam Sharma</p>
                  <AiOutlineClose
                    color="#02b2e3"
                    size="18"
                    className="close-button"
                  />
                </div>
                <div className="name-2-container">
                  <p className="name-2">Harshad Joshi</p>
                  <AiOutlineClose
                    color="#e30291"
                    size="18"
                    className="close-button"
                  />
                </div>
                <div className="name-3-container">
                  <p className="name-3">Kavish Sen</p>
                  <AiOutlineClose
                    color="#8d02e3"
                    size="18"
                    className="close-button"
                  />
                </div>
              </div>

              <div className="task-deadline">
                <h3 className="task-head">Set Deadline</h3>
                <div className="name-container-3">
                  <h3 className="name-3">Date</h3>
                  <BsCalendar color="#8a8281" size="18" className="calendar" />
                </div>
                <h3 className="task-head">Set Priority</h3>
                <div className="priority-container">
                  <div className="priority-value">
                    <input
                      type="radio"
                      id="high"
                      value="High"
                      name="priority"
                      checked
                    />
                    <label htmlFor="high" className="high">
                      High
                    </label>
                  </div>
                  <div className="priority-value">
                    <input
                      type="radio"
                      id="Medium"
                      value="Medium"
                      name="priority"
                    />
                    <label htmlFor="Medium">Medium</label>
                  </div>
                  <div className="priority-value">
                    <input type="radio" id="Low" value="Low" name="priority" />
                    <label htmlFor="Low">Low</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="button-container">
              <button type="button" className="popup-button">
                Cancel
              </button>
              <button type="button" className="popup-button-2">
                Add
              </button>
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default PopupButton
