import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <nav className='navbar bg-warning'>
      <div className='container-fluid'>
        <form onSubmit={onSubmitHandler} className='d-flex' role='search'>
                <input
                    onChange={props.onChange}
                    value={props.value}
                    className='search form-control me-2'
                    placeholder="Search"
                    type='search'
                    aria-label='Search' 
                />
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
