import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-8xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-widest2 text-oryn-red">404</p>
      <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-oryn-graydark">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Back Home</Button>
        <Button href="/collection" variant="outline">Shop Now</Button>
      </div>
    </div>
  );
}
