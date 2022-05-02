import { ReactFragment } from 'react'

const NavBar = () => {
  return (
    <div className="flex w-screen items-center bg-secondary-dark p-2 px-10">
      <div className="w-4/6 font-bold">734 RCACS</div>
      <div className="flex w-2/6 flex-row-reverse font-bold">
        <div className="rounded-md bg-primary-dark p-3 transition-colors duration-200 hover:bg-button-highlight">
          See what we are up to
        </div>
      </div>
    </div>
  )
}

export default NavBar
