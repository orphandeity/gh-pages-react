function Home() {
  return (
    <div style={{ maxWidth: '750px', display: 'grid', gap: 'var(--padding)' }}>
      <h1>Welcome to the Extended React + Vite Template</h1>
      <h2>Supercharge your React Projects with React Router and CI/CD</h2>
      <p>
        This live example showcases the power of the extended React + Vite
        template. We&apos;ve gone a step further by including React Router for
        seamless navigation and a robust CI/CD workflow with GitHub Actions for
        automated deployment to GitHub Pages.
      </p>
      <section>
        <h3>Key Features:</h3>
        <ul
          style={{
            marginLeft: 'var(--margin-sm)',
            display: 'grid',
            gap: 'var(--padding-sm)',
          }}
        >
          <li>
            <b>React + Vite:</b> Kickstart your React projects with Vite&apos;s
            speed and efficiency.
          </li>
          <li>
            <b>React Router:</b> Effortlessly manage navigation and routing in
            your applications.
          </li>
          <li>
            <b>CI/CD with GitHub Actions:</b> Automate your deployment process
            for GitHub Pages.
          </li>
        </ul>
      </section>
      <p>
        Take your React projects to the next level with this extended template.
        Happy coding! ✌️
      </p>
      <a href="https://github.com/orphandeity/gh-pages-react.git">
        GitHub Repository
      </a>
    </div>
  )
}

export default Home
