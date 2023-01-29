import Header from './header'

export default function Layout({ children } : { children:JSX.Element }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}   