// Footer.js
import Image from "next/image";
import Alvore from "../../../public/Tree.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between text-white p-4 space-y-4 md:space-y-0">
      <span className="text-sm md:text-base text-center">© 2024 Feliz Natal</span>
      <Image
        src={Alvore}
        alt="Árvore de Natal"
        width={80}
        height={80}
        className="w-16 h-16 md:w-24 md:h-24"
      />
    </footer>
  );
}
