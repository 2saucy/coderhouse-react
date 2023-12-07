import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-slate-100 p-4 text-slate-600">
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
