import { ArrowUpAz } from 'lucide-react'

function Header() {
  return (
    <header className="grid grid-cols-1 items-center gap-4 border-b border-slate-200 bg-white px-6 py-4 md:grid-cols-[1fr_minmax(18rem,36rem)_1fr]">
      <h1 className='text-3xl text-titulo font-bold'>WOM<span className='text-lg'>Stylus</span></h1>

      <form className="flex w-full items-center gap-2" role="search">
        <input
          aria-label="Buscar"
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          placeholder="Buscar..."
          type="search"
        />
        <button
          className="flex-center rounded-lg bg-slate-900 px-4 py-2 flex gap-2 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          type="button"
          aria-label='Filtrar'
        >
          <ArrowUpAz size={18} />
        </button>
      </form>

      <div className="flex justify-start md:justify-end">
        <div
          aria-hidden="true"
          className="size-10 rounded-full bg-sky-600 ring-4 ring-sky-100"
        />
      </div>
    </header>
  )
}

export default Header;