import { Link } from "react-router-dom";
import { ChevronRightIcon } from "../components/icons";
import { useI18n } from "../i18n/I18nContext";

export function HomePage() {
  const { t } = useI18n();

  return (
    <div className="max-w-lg mx-auto w-full">
      <div className="fpui-card">
        <div className="fpui-widget mb-4">
          <span className="inline-block px-2 py-0.5 mb-3 text-xs font-bold bg-pf-petrol-2 text-pf-petrol-8 rounded">
            {t("homeBadge")}
          </span>
          <h1 className="!leading-[1.2] md:text-3xl sm:text-2xl text-xl tracking-normal text-pf-petrol-11 font-normal mb-4">
            {t("homeTitle")}
          </h1>
          <p className="text-sm text-pf-grey-7 mb-3">
            {t("homeText1")}
          </p>
          <p className="text-sm text-pf-grey-7 mb-6">
            {t("homeText2")}
          </p>
          <Link
            to="/login"
            className="fpui-btn-primary w-full md:w-auto md:px-8"
          >
            <span className="flex gap-3 items-center flex-grow min-w-0">
              {t("homeCta")}
            </span>
            <ChevronRightIcon size={24} />
          </Link>
        </div>
      </div>

      <p className="text-center text-xs text-pf-grey-5 mt-6">
        {t("homeFooter")}
      </p>
    </div>
  );
}