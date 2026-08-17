import { MenuIcon } from "./icons";
import { PostFinanceLogo } from "./PostFinanceLogo";
import { useI18n } from "../i18n/I18nContext";
import type { Language } from "../i18n/translations";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
];

export function Header() {
  const { language, setLanguage } = useI18n();

  return (
    <header className="relative sticky top-0 lg:border-none z-50 flex justify-center bg-pf-yellow-3 dark:bg-pf-petrol-8 h-[13vw] min-h-[50px] max-h-20 md:h-20">
      <div className="flex items-center gap-3 sm:gap-5 w-full max-w-6xl mx-3 sm:mx-5 xl:mx-auto justify-between">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <a
            href="https://www.postfinance.ch/"
            className="flex h-[13vw] min-h-[50px] max-h-20 md:h-[80px] items-center justify-center"
            target="_self"
            aria-label="PostFinance - Retour à l'accueil"
          >
            <PostFinanceLogo />
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Language switcher */}
        <nav className="flex items-center gap-1" aria-label="Changer de langue">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
                language === lang.code
                  ? "bg-pf-petrol-8 text-white"
                  : "text-pf-petrol-8 dark:text-pf-petrol-3 hover:bg-pf-yellow-2 dark:hover:bg-pf-petrol-9"
              }`}
              aria-label={lang.label}
            >
              {lang.label}
            </button>
          ))}
        </nav>

        {/* Menu button */}
        <button
          className="p-2 flex items-center justify-center gap-1 relative rounded-md hover:bg-pf-yellow-2 dark:hover:bg-pf-petrol-9 text-pf-petrol-8 dark:text-pf-petrol-3 transition-colors duration-100"
          aria-label="Menu"
        >
          <MenuIcon size={24} />
        </button>
      </div>
    </header>
  );
}
