import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar = props => {
  document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");

          //hide "navbar-burger" by clicking on the menu item 
          var $navbarItems = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-item"),
            0
          );
          $navbarItems.forEach(function($elItem) {
            $elItem.addEventListener("click", function() {
            if ($target.classList[1] === 'is-active') {
              $target.classList = 'navbar-menu'
              $el.classList = 'navbar-burger burger'
            }
            });
          });
        });
      });
    }
  });
  return (
    <nav className="navbar is-primary" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="navbar">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navbar-menu" id="navbar">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Main
          </Link>
          <Link className="navbar-item" to="/news">
            News
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/profile">
            Profile
          </Link>
          {!props.isAuth ? (
            <Link className="navbar-item" to="/login">
              Login
            </Link>
          ) : (
            <a className="navbar-item" onClick={() => props.Logout()}>
              Logout
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
