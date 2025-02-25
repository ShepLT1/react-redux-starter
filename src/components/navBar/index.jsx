import * as React from "react"
import { Link } from "react-router-dom"
import "./style.css"

// Any new pages to route to should be added to this array and in the browser router
const pages = ["Home", "Counter"]

export function NavBar() {

  return (
    <div>
      {pages.map((page) => (
        <Link className={"link"} key={page} to={(page === "Home" ? "/" : page.toLowerCase())}>
          {page}
        </Link>
      ))}
    </div>
  );
  
}