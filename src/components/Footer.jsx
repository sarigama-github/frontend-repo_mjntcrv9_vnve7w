export default function Footer(){
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-neutral-300">© {new Date().getFullYear()} Alpine Carry Co.</div>
          <div className="flex items-center gap-6 text-sm">
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="mailto:support@alpinecarry.co">support@alpinecarry.co</a>
            <div className="flex items-center gap-3">
              <a className="hover:text-white" href="#">Twitter</a>
              <a className="hover:text-white" href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
