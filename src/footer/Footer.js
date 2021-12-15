import React from 'react'
import {Link} from "react-router-dom"
function Footer() {
    return (
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Notes</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Github</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Personal Site</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p className="text-center text-muted">Yassine Dahlek</p>
  </footer>
</div>
    )
}

export default Footer
