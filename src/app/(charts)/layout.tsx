import Link from 'next/link';

export default function ChartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-slate-50 p-8">

      <Link href="/" className="text-sky-600">
        ← Home
      </Link>
      {children}
    </main>
  );
}
