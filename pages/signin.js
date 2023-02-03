import cx from 'classnames';
import styles from '../styles/Signin.module.css'
import Layout from '@/components/Layout'

export default Signin;

function Signin() {
  return (
    <>
    <Layout>

      <main className={cx(styles["form-signin"],"text-center","mt-4","white")}>
        <form>
          <h1 className="h3 mb-5 fw-small">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={cx(styles.checkbox,"mb-5")}>    {/*sign in button*/}
            <label>
              <input type="checkbox" value="remember-me" /> Remember me     
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </Layout>
    </>
  )
}
