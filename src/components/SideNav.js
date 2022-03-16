import ApplicationForm from "../Pages/ApplicationForm"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const SideNav = () => {
  return (
    <div> <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="#" className="brand-link">
    <img src="dist/img/logo4.png" alt="Admin Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Admin Dashboard</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/samy.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Fr. Anto </a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
                         </p>
          </a>
         </li>
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Archives Database
                         </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Library Database
                         </p>
          </a>
        </li>
            
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Tamil Section
                         </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Charts
              
            </p>
          </a>
          
        </li>
        <li className="nav-item">
          <a href= {ApplicationForm} className="nav-link">
          <i className="nav-icon fas fa-edit" />
            <p>
            Application Forms
                         </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
          <i className="nav-icon fas fa-list" />
            <p>
            Payments
                         </p>
          </a>
        </li>
        
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
          <i className="nav-icon fas fa-edit" />
            <p>
            Approvals
                         </p>
          </a>
        </li> 
        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
          <i className="nav-icon fas fa-edit" />
            <p>
            Accesed Materials
                         </p>
          </a>
        </li>

        <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
          <i className="nav-icon fas fa-edit" />
            <p>
            Logout
                         </p>
          </a>
        </li>
        </ul>
      </nav>
       </div>
  
  </aside>
</div>
  )
}

export default SideNav