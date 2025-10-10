import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6 text-center text-sm text-slate-600">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/termos" className="hover:text-secondary hover:underline">
            Termos de uso
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/politica" className="hover:text-secondary hover:underline">
            Política de Privacidade
          </Link>
          <span className="text-slate-400">•</span>
          <a
            href="mailto:suporte@trendlycorp.com"
            className="hover:text-secondary hover:underline"
          >
            Suporte Resenhai
          </a>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Resenhai — só WhatsApp, zero vergonha
        </p>

        <p>© {new Date().getFullYear()} Resenhai. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
