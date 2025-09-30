import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Links de Política */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <Link href="/termos" className="hover:text-secondary hover:underline">
            Política de Privacidade
          </Link>
          <span className="text-slate-400">-</span>
          <Link href="/termos" className="hover:text-secondary hover:underline">
            Privacy Policy
          </Link>
          <span className="text-slate-400">-</span>
          <Link href="/termos" className="hover:text-secondary hover:underline">
            Termos de uso
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Foquinha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
