import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const pathname = useLocation().pathname
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900">
      <h1 className="text-6xl font-bold">404 Not Found</h1>
      <p className="text-2xl">The url {`"${pathname}"`} does not exist.</p>
      <Link to={"/"} className="hover:text-slate-500">
        Go home
      </Link>
    </main>
  );
}
