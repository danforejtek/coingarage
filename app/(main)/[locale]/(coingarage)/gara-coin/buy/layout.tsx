export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-hidden">
      <div className="bg-background/50 backdrop-blur-2xl dark:bg-black/50">{children}</div>
      <div className="animate-slow-pulse absolute top-[30px] -z-10 hidden size-[200px] rounded-full bg-primary md:right-[20%] md:top-[80px] md:block md:size-[400px]"></div>
      <div className="animate-slow-pulse absolute left-[30%] -z-10 hidden size-[200px] rounded-full bg-tertiary delay-75 md:block lg:top-[500px]"></div>
    </div>
  )
}
