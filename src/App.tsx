import { RouterProvider } from "react-router-dom"
import { router } from "./routes/AppRouter"

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
