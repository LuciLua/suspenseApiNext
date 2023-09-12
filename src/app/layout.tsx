import "./styles/globals.scss"
import { Inter } from "next/font/google"

const inter = Inter({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export default function Root_Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Server Components</title>
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}