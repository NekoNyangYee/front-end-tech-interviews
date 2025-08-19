import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 max-w-6xl mx-auto">
      <div>
        <img src="/logo.png" alt="logo" className="w-14" />
      </div>
      <div>
        <Search />
      </div>
    </header>
  );
}
