import logo from "./img/logo.svg"
export default function Logo() {
  return (
    <>
      <h1 className="header">
        <img src={logo} alt="brand" width={82} />
        <span>
          Make Your Trip Notes Real
          <span className="dot">.</span>
        </span>
      </h1>
    </>
  )
}
