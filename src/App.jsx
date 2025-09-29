import "./styles.css"

export default function App() {
  return ( 
  <div>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">ToDo List</h1>
  </div>
  )
}