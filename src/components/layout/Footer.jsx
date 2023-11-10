import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-slate-900 p-4 text-slate-100">
      <h2 className="font-serif text-4xl">Z</h2>
      <div className="flex gap-6">
        <Instagram />
        <Facebook />
        <Twitter />
      </div>
    </footer>
  );
};

export default Footer;
