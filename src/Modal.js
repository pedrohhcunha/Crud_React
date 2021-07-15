import './styles/global.css'
import './styles/modal.css'

export function Modal(props) {
  return (
    <div className={`area-modal ${props.isOpen === true ? 'open' : null}`}>
      <div className="modal">
        <h1>{props.title}</h1>
        <form action="">
          <label htmlFor="">Name</label>
          <div className="area-input">
            <input type="text" value={props.dataForm ? props.dataForm.name : null} />
          </div>
          <label htmlFor="">Phone</label>
          <div className="area-input">
            <input type="text" value={props.dataForm ? props.dataForm.phone : null} />
          </div>
          <label htmlFor="">Email</label>
          <div className="area-input">
            <input type="email" value={props.dataForm ? props.dataForm.email : null} />
          </div>
          <button>{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}