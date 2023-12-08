import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-slate-100 p-4">
      <h2 className="font-serif text-4xl text-slate-800">Z</h2>
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-slate-500"
        >
          <Instagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className=" text-slate-400 hover:text-slate-500"
        >
          <Facebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-slate-500"
        >
          <Twitter />
        </a>
      </div>
    </footer>
  );
}
