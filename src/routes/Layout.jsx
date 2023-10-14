import { Link, Outlet } from 'react-router-dom'

let style = {
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
    padding: 'var(--padding)',
    backgroundColor: 'var(--background-color)',
  },
  header: {
    flex: '0 0 auto',
    paddingBottom: 'var(--padding)',
    '--color-link': 'var(--color-foreground)',
  },
  main: {
    flex: '1 1 auto',
  },
  footer: {
    textAlign: 'center',
    paddingTop: 'var(--padding)',
  },
}

function Layout() {
  return (
    <div style={style.wrapper}>
      <header style={style.header}>
        <Link to="/">
          <b>react + github pages</b>
        </Link>
      </header>
      <div style={style.main}>
        <Outlet />
      </div>
      <footer style={style.footer}>
        <small>🍄 created by orphandeity</small>
      </footer>
    </div>
  )
}

export default Layout
