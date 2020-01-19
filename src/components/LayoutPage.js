import React from 'react'
import './LayoutPage.sass'

const LayoutPage = ({children}) => {

  return (
    <div className="container">
      <main className="content">{children}</main>
      <footer className="footer">
        <p className="footer__copyright">© 2019</p>
      </footer>
    </div>
  )
}

export default LayoutPage