import { Meta, Story } from '@storybook/react'

const meta: Meta = {
  title: 'All Components'
}

export default meta

const Pages: Story<{}> = () => (
   <>
     <form className="w-100">
       <div className="form-group">
         <label className="form-label" htmlFor="formFile">default file input</label>
         <input className="form-control" type="file" id="formFile" />
       </div>
       <div className="form-group">
         <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
         <div className="input-group">
           <div className="input-group-text">@</div>
           <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
         </div>
       </div>
     </form>

     <div className="mb-3">
       <div className="btn-group" role="group" aria-label="Basic example">
         <button type="button" className="btn btn-danger active">Left</button>
         <button type="button" className="btn btn-warning">Middle</button>
         <button type="button" className="btn btn-success">Right</button>
       </div>
     </div>

     <div className="dropdown">
       <button
         id="dropdown"
         type="button"
         className="btn btn-primary dropdown-toggle"
         data-bs-toggle="dropdown"
         aria-expanded="false"
       >Dropdown</button>
       <ul className="dropdown-menu" aria-labelledby="dropdown">
         <li><a className="dropdown-item" href="#">Dropdown link</a></li>
         <li><a className="dropdown-item" href="#">Dropdown link</a></li>
       </ul>
     </div>

   </>
)

export { Pages }
