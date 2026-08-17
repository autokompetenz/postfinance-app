import { LoginForm } from "./LoginForm";
import { Sidebar } from "./Sidebar";

export function LoginPage() {
  return (
    <div className="max-w-lg mx-auto w-full">
      {/* Title */}
      <div className="flex flex-col mb-5">
        <h1 className="!leading-[1.2] md:text-3xl sm:text-2xl text-xl tracking-normal text-pf-petrol-11 font-normal">
          Login
        </h1>
      </div>

{/* Sidebar layout: form + sidebar */}
      <div className="flex flex-col gap-5 xl:grid xl:grid-cols-[1fr_280px] xl:gap-6">
        {/* Main card */}
        <div className="h-fit">
          <LoginForm />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
