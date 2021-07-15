import './styles/global.css'
import './styles/crud.css'
import './styles/modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faTrash, faPen, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Modal } from './Modal'
import { useState } from 'react'

export function Crud() {
  const [stateModal, setStateModal] = useState({
    title: "",
    textButton: "",
    dataForm: {
      name: "",
      phone: "",
      email: ""
    },
    isOpen: false
  })

  const openModal = (titleInput, textButtonInput, dataFormInput) => {
    setStateModal({
      title: titleInput,
      textButton: textButtonInput,
      dataForm: dataFormInput ? dataFormInput : null,
      isOpen: true
    })
  }
  return (
    <main>
      <div className="clientes">
        <div className="top-area">
          <h1>Clients</h1>
          <div className="controls">
            <div className="search-area">
              <input type="text" placeholder="Search Client" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <button
              onClick={() => {
                openModal("Add cliente", "Register")
              }
              }>
              <FontAwesomeIcon className="icon-plus" icon={faPlus} />
              Add Client</button>
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Last Modify</th>
              <th>To Do</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>Pedro Henrique</td>
              <td>(49) 98838-7890</td>
              <td>phhcpedrohhcunha@gmail.com</td>
              <td>10 Apr 2021</td>
              <td>
                <div>
                  <div className="to-do">Send Email</div>
                  <div className="to-do">Cell</div>
                </div>
              </td>
              <td>
                <div>
                  <button
                    onClick={() => {
                      openModal("Edit Client", "Update", {
                        name: "Pedro Henrique",
                        phone: "(49) 98838-7890",
                        email: "phhcpedrohhcunha@gmail.com"
                      })
                    }}
                    className="action">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <div className="action">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Vinicios Azambuja</td>
              <td>(49) 98876-0288</td>
              <td>viniaaz@gmail.com</td>
              <td>04 Jan 2021</td>
              <td>
                <div>
                  <div className="to-do">Cell</div>
                </div>
              </td>
              <td>
                <div>
                  <button
                    onClick={() => {
                      openModal("Edit Client", "Update", {
                        name: "Vinicios Azambuja",
                        phone: "(49) 98876-0288",
                        email: "viniaaz@gmail.com"
                      })
                    }}
                    className="action">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <div className="action">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <div className="pagination">
            <button>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button>1</button>
            <button>2</button>
            <button className="active">3</button>
            <button>4</button>
            <button>5</button>
            <button>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <Modal
        title={stateModal.title}
        buttonText={stateModal.textButton}
        dataForm={stateModal.dataForm}
        isOpen={stateModal.isOpen}
      />
    </main>
  );
}