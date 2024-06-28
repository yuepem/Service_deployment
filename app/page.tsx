import Image from "next/image";

export default function Home() {
  return (
    <main className="py-3 flex flex-col items-center  bg-slate-200">
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} className="py-4"/>
      <h1 className="py2">Welcome to Next.js 13 </h1>
      <p className="text-balance text-sky-600 font-bold ">
        This is the initial branch to work
      </p>
    </main>
  );
}
