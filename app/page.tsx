import Image from "next/image";
// import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  // const data = await getPosts;
  // console.log(data);
  return (
   <main>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    <h1>Welcome to Next.js 13 </h1>
   </main>
  );
}
