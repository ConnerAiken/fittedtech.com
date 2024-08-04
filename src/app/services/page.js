import { headers } from "next/headers";

export default function Services() {
  const heads = headers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>This will be the services page</p>
        <pre>{JSON.stringify(heads.headers.referer)}</pre>
      </div>
    </main>
  );
}

