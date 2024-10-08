import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Header({ label }: { label: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <Link
        href="/"
        className={cn("select-none text-3xl font-semibold", font.className)}
      >
        🔐 Auth
      </Link>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
