export default function Layout({ children, locale }: { children: React.ReactNode; locale: string }) {
  return (
    <>
      <div className="primary-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full overflow-x-hidden"></div>
      {children}
    </>
  )
}
