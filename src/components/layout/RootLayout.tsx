import { Outlet } from "react-router-dom"

export const RootLayout = () => {
  return (
    <>
    <main className="w-screen h-screen bg-background overflow-x-hidden scroll-smooth select-none">
        <Outlet/>
    </main>
    </>
  )
}
