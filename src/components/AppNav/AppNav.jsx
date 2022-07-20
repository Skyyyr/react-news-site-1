function AppNav(props) {

  const makeNavItems = () => {
    let htmlContent = []
    props.navItems.map((elem, index)  => {
      console.log("ELEM:", elem)
      console.log("PROP:", props.navItems[index])
      htmlContent.push(
        <li className="nav-item" key={index}>
          <a className="nav-link active" onClick={() => props.handleNavClick(index)} href="#">
            {elem.label}
          </a>
        </li>
      )
    });
    return htmlContent
  }

  return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {makeNavItems()}
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default AppNav;
