import { MenuIcon } from "./icons";
import { PostFinanceLogo } from "./PostFinanceLogo";

export function Header() {
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
