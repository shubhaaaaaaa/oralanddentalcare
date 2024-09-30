import Header from './components/Header'
import Footer from './components/Footer'
import ChatIcon from './components/ChatIcon'

export const metadata = {
  title: 'Oral and Dental Care',
  description: 'A dental clinic in Lalitpur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-clip'>
        <Header />
        {children}
        <Footer />

        <ChatIcon />
      </body> 
    </html >
  )
}
