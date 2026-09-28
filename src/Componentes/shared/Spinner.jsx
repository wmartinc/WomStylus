function Spinner({ size = 50, label = 'Cargando' }) {
  return (
    <div
      aria-label={label}
      className="flex-center gap-3"
    >
      <span
        aria-hidden="true"
        className="inline-block animate-spin rounded-full border-2 border-slate-200 border-t-sky-600"
        style={{ height: size, width: size }}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default Spinner
