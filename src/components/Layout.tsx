import { Outlet, Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import type { Language } from "../i18n/translations";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
];

export function Layout() {
  const { language, setLanguage, t } = useI18n();
  return (
    <div className="min-h-screen bg-pf-petrol-1 dark:bg-pf-petrol-11 flex flex-col font-grostek">
      <div className="bg-pf-red-3 text-white text-center text-xs font-bold px-3 py-2">
        {t("demoBanner")}
      </div>
      <header className="sticky top-0 z-50 flex justify-center bg-pf-petrol-8 h-[13vw] min-h-[50px] max-h-20 md:h-20">
        <div className="flex items-center gap-3 sm:gap-5 w-full max-w-6xl mx-3 sm:mx-5 xl:mx-auto justify-between">
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              className="flex h-[13vw] min-h-[50px] max-h-20 md:h-[80px] items-center justify-center text-white font-bold text-lg"
              aria-label="Accueil"
            >
              POST FINANCE
            </Link>
          </div>
          <div className="flex-1" />
          <nav className="flex items-center gap-1" aria-label="Changer de langue">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
                  language === lang.code
                    ? "bg-pf-yellow-3 text-pf-petrol-8"
                    : "text-white hover:bg-pf-petrol-9"
                }`}
                aria-label={lang.label}
              >
                {lang.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <div className="flex-grow bg-pf-petrol-1 dark:bg-pf-petrol-11 px-2 sm:px-5 pt-5 pb-32">
        <main className="flex flex-col flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}