import './globals.css';import Shell from '@/components/Shell';
export default function RootLayout({children}:{children:React.ReactNode}){return <html><body><Shell>{children}</Shell></body></html>}
