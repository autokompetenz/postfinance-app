import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon, InfoIcon } from "../components/icons";
import { useI18n } from "../i18n/I18nContext";

export function LoginPage() {
  const { t } = useI18n();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    try {
      const res = await fetch("/api/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Erreur");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    }
  };

  return (
    <div className="max-w-lg mx-auto w-full">
      <div className="flex flex-col mb-5">
        <h1 className="!leading-[1.2] md:text-3xl sm:text-2xl text-xl tracking-normal text-pf-petrol-11 font-normal">
          {t("loginTitle")}
        </h1>
      </div>

      <div className="fpui-card flex flex-col">
        <p className="text-sm text-pf-grey-7 mb-6">{t("loginDemo")}</p>

        {sent ? (
          <div className="flex flex-col">
            <p className="text-sm font-bold text-pf-petrol-8 mb-4">
              {t("loginSent")}
            </p>
            <Link to="/" className="fpui-btn-primary w-full md:w-auto md:px-8">
              {t("loginBack")}
            </Link>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col w-full max-w-128 pb-6 md:pb-8">
              <label
                htmlFor="demo_username"
                className="text-sm font-bold mb-3 text-pf-petrol-8"
              >
                {t("usernameLabel")}
                <span className="fpui-info-icon ml-1.5 inline-flex align-middle dark:text-pf-blue-2">
                  <InfoIcon size={14} />
                </span>
              </label>
              <input
                id="demo_username"
                name="demo_username"
                type="text"
                maxLength={23}
                className="fpui-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                inputMode="text"
              />
            </div>

            <div className="flex flex-col w-full max-w-128 pb-6 md:pb-8">
              <label
                htmlFor="demo_password"
                className="text-sm font-bold mb-3 text-pf-petrol-8"
              >
                {t("passwordLabel")}
              </label>
              <div className="relative">
                <input
                  id="demo_password"
                  name="demo_password"
                  type={showPassword ? "text" : "password"}
                  maxLength={100}
                  className="fpui-input !pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] text-pf-petrol-8 dark:text-pf-petrol-3 hover:text-pf-petrol-7 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? t("hidePassword") : t("showPassword")}
                >
                  {showPassword ? (
                    <EyeOffIcon size={24} />
                  ) : (
                    <EyeIcon size={24} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm font-bold text-pf-red-3 mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="fpui-btn-primary w-full md:w-auto md:px-8"
            >
              {t("loginSubmit")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}