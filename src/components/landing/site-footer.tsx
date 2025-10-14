import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6 text-center text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/termos" className="hover:text-primary hover:underline">
            Termos de uso
          </Link>
          <span className="text-muted-foreground/60">•</span>
          <Link href="/politica" className="hover:text-primary hover:underline">
            Política de privacidade
          </Link>
          <span className="text-muted-foreground/60">•</span>
          <a href="mailto:suporte@trendlycorp.com" className="hover:text-primary hover:underline">
            suporte@trendlycorp.com
          </a>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/80">
          O Mago da Sedução — só WhatsApp, zero vergonha
        </p>

        <p>© {new Date().getFullYear()} O Mago da Sedução. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
