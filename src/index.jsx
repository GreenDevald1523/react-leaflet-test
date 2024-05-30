import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createTheme, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { Notifications } from "@mantine/notifications"

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <MantineProvider theme={theme}>
    <Notifications />
    <App />
  </MantineProvider>
)
