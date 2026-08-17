import { useState } from "react";
import { EyeIcon, EyeOffIcon, InfoIcon, ChevronRightIcon } from "./icons";
import { useI18n } from "../i18n/I18nContext";

export function LoginForm() {
  const { t } = useI18n();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="fpui-card flex flex-col">
      <form noValidate onSubmit={handleSubmit}>
        {/* Username field */}
        <div className="flex flex-col w-full max-w-128 pb-6 md:pb-8">
          <label
            htmlFor="p_username"
            className="text-sm font-bold mb-3 text-pf-petrol-8"
          >
            {t("usernameLabel")}
            <span className="fpui-info-icon ml-1.5 inline-flex align-middle dark:text-pf-blue-2">
              <InfoIcon size={14} />
            </span>
          </label>
          <input
            id="p_username"
            name="p_username"
            type="text"
            maxLength={23}
            className="fpui-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            inputMode="text"
          />
        </div>

        {/* Password field */}
        <div className="flex flex-col w-full max-w-128 pb-6 md:pb-8">
          <label
            htmlFor="p_passw"
            className="text-sm font-bold mb-3 text-pf-petrol-8"
          >
            {t("passwordLabel")}
          </label>
          <div className="relative">
            <input
              id="p_passw"
              name="p_passw"
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

        {/* Forgot password link */}
        <div className="flex flex-col w-full max-w-128 pb-6 md:pb-8">
          <a
            href="https://www.postfinance.ch/"
            className="fpui-link-arrow text-pf-petrol-8 min-h-[44px] py-1"
          >
            <span className="flex gap-3 items-center flex-grow min-w-0">
              {t("forgotPassword")}
            </span>
            <ChevronRightIcon size={24} />
          </a>
        </div>

        {/* Optional: User ID fieldset */}
        <fieldset>
          <legend>
            <h2 className="mb-2 !leading-[1.2] text-xl tracking-normal text-pf-petrol-8 font-normal">
              {t("optionalTitle")}
            </h2>
          </legend>

          <div className="flex flex-col w-full max-w-128">
            <label
              htmlFor="p_userid"
              className="text-sm font-bold mb-3 text-pf-petrol-8"
            >
              {t("userIdLabel")}
              <span className="fpui-info-icon ml-1.5 inline-flex align-middle dark:text-pf-blue-2">
                <InfoIcon size={14} />
              </span>
            </label>
            <input
              id="p_userid"
              name="p_userid"
              type="text"
              maxLength={30}
              className="fpui-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              inputMode="text"
            />
          </div>

          {/* Submit button */}
          <div className="mt-8 md:mt-10">
            <button
              type="submit"
              className="fpui-btn-primary w-full md:w-auto md:px-8"
            >
              {t("next")}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
