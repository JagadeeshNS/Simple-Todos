// Write your code here

import './index.css'

const TodoItem = props => {
  const {TodoListDetails, deleteButton} = props
  const {title, id} = TodoListDetails

  const DeleteButton = () => {
    deleteButton(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <div>
        <button type="button" className="button" onClick={DeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
