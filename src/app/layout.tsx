import Footer from '../components/Footer/Footer'
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import * as React from 'react'
import 'tailwindcss/tailwind.css'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ visibility: 'hidden' }}>
        <div
          style={{ minWidth: '20rem' }}
          className="flex flex-col min-h-screen"
        >
          <ld-header site-name="Liquid Oxygen" logo-title="Home" logo-url="/">
            <ld-button slot="end" type="button">
              <ld-icon name="pen" size="sm"></ld-icon>
              Register
            </ld-button>
            <ld-button mode="ghost" slot="end" title="Login" type="button">
              <ld-icon aria-label="Login" name="user" size="lg"></ld-icon>
            </ld-button>
            <ld-button mode="secondary" slot="end" type="button">
              <ld-icon name="user" size="sm"></ld-icon>
              Login
            </ld-button>
          </ld-header>

          <main style={{ minHeight: '80vh' }}>{props.children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
