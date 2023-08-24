import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">Textutils</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Disable/Enable</label>
            <button type="button" className="btn btn-success" onClick={props.changeGreen}></button>
            <button type="button" className="btn btn-warning" onClick={props.changeYellow}></button>
            <button type="button" className="btn btn-danger" onClick={props.changeDanger}></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// PropTypes
Header.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  changeGreen: PropTypes.func.isRequired,
  changeYellow: PropTypes.func.isRequired,
  changeDanger: PropTypes.func.isRequired
};
