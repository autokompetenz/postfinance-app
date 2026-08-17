import { ChevronRightIcon } from "./icons";

function QRCodeWidget() {
  return (
    <div className="fpui-widget">
      <h2 className="mb-2 !leading-[1.2] text-xl tracking-normal text-pf-petrol-8 font-normal">
        Login rapide
      </h2>
      <div className="flex justify-center mb-3">
        <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] bg-white border border-pf-grey-3 rounded flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]">
            <rect x="5" y="5" width="25" height="25" fill="#004b5a" rx="2" />
            <rect x="8" y="8" width="19" height="19" fill="white" rx="1" />
            <rect x="11" y="11" width="13" height="13" fill="#004b5a" rx="1" />

            <rect x="70" y="5" width="25" height="25" fill="#004b5a" rx="2" />
            <rect x="73" y="8" width="19" height="19" fill="white" rx="1" />
            <rect x="76" y="11" width="13" height="13" fill="#004b5a" rx="1" />

            <rect x="5" y="70" width="25" height="25" fill="#004b5a" rx="2" />
            <rect x="8" y="73" width="19" height="19" fill="white" rx="1" />
            <rect x="11" y="76" width="13" height="13" fill="#004b5a" rx="1" />

            <rect x="35" y="5" width="5" height="5" fill="#004b5a" />
            <rect x="45" y="5" width="5" height="5" fill="#004b5a" />
            <rect x="55" y="5" width="5" height="5" fill="#004b5a" />
            <rect x="35" y="15" width="5" height="5" fill="#004b5a" />
            <rect x="50" y="15" width="5" height="5" fill="#004b5a" />
            <rect x="35" y="25" width="5" height="5" fill="#004b5a" />
            <rect x="45" y="25" width="5" height="5" fill="#004b5a" />
            <rect x="55" y="25" width="5" height="5" fill="#004b5a" />

            <rect x="5" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="15" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="25" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="35" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="45" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="55" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="65" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="75" y="35" width="5" height="5" fill="#004b5a" />
            <rect x="85" y="35" width="5" height="5" fill="#004b5a" />

            <rect x="5" y="45" width="5" height="5" fill="#004b5a" />
            <rect x="25" y="45" width="5" height="5" fill="#004b5a" />
            <rect x="45" y="45" width="5" height="5" fill="#004b5a" />
            <rect x="65" y="45" width="5" height="5" fill="#004b5a" />
            <rect x="85" y="45" width="5" height="5" fill="#004b5a" />

            <rect x="5" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="15" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="25" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="35" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="45" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="55" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="65" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="75" y="55" width="5" height="5" fill="#004b5a" />
            <rect x="85" y="55" width="5" height="5" fill="#004b5a" />

            <rect x="35" y="70" width="5" height="5" fill="#004b5a" />
            <rect x="45" y="70" width="5" height="5" fill="#004b5a" />
            <rect x="55" y="70" width="5" height="5" fill="#004b5a" />
            <rect x="70" y="70" width="5" height="5" fill="#004b5a" />
            <rect x="80" y="70" width="5" height="5" fill="#004b5a" />
            <rect x="90" y="70" width="5" height="5" fill="#004b5a" />

            <rect x="35" y="80" width="5" height="5" fill="#004b5a" />
            <rect x="55" y="80" width="5" height="5" fill="#004b5a" />
            <rect x="75" y="80" width="5" height="5" fill="#004b5a" />
            <rect x="85" y="80" width="5" height="5" fill="#004b5a" />

            <rect x="35" y="90" width="5" height="5" fill="#004b5a" />
            <rect x="45" y="90" width="5" height="5" fill="#004b5a" />
            <rect x="55" y="90" width="5" height="5" fill="#004b5a" />
            <rect x="70" y="90" width="5" height="5" fill="#004b5a" />
            <rect x="80" y="90" width="5" height="5" fill="#004b5a" />
            <rect x="90" y="90" width="5" height="5" fill="#004b5a" />
          </svg>
        </div>
      </div>
      <p className="text-sm text-pf-grey-7 mb-3">
        Pour vous connecter à e-finance depuis votre ordinateur, scannez le
        code QR avec votre smartphone.
      </p>
      <a
        href="https://www.postfinance.ch/helpquickloginfr"
        target="_blank"
        rel="noopener noreferrer"
        className="fpui-link-arrow text-pf-petrol-8 min-h-[44px] py-1"
      >
        <span className="flex gap-3 items-center flex-grow min-w-0">
          Instructions
        </span>
        <ChevronRightIcon size={24} />
      </a>
    </div>
  );
}

function HelpWidget() {
  const links = [
    {
      label: "Aide pour le login",
      href: "https://www.postfinance.ch/efinloginprocedurefr",
    },
    {
      label: "Commander e-finance",
      href: "https://www.postfinance.ch/commander-ef",
    },
    {
      label: "Version démo e-finance",
      href: "https://www.postfinance.ch/demoefinloginfr",
    },
    {
      label: "Norme de sécurité",
      href: "https://www.postfinance.ch/conseils-securite",
    },
  ];

  return (
    <div className="fpui-widget">
      <h2 className="mb-2 !leading-[1.2] text-xl tracking-normal text-pf-petrol-8 font-normal">
        Avez-vous besoin d'aide?
      </h2>
      <ul className="list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.href} className="border-b border-pf-grey-3 last:border-b-0">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="fpui-link-arrow text-pf-petrol-8 min-h-[44px] py-2"
            >
              <span className="flex gap-3 items-center flex-grow min-w-0">
                {link.label}
              </span>
              <ChevronRightIcon size={24} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="flex flex-col gap-5">
      <QRCodeWidget />
      <HelpWidget />
    </div>
  );
}
