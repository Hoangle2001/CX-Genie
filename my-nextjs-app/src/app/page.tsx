
import "@/app/globals.css";
import Commitment from "@/components/Commitment";
import Container from "@/components/Container";
import Demo from "@/components/Demo";


export default async function Home() {

  return (
    <main className="flex flex-col bg-white w-full justify-center row-start-2 items-center sm:items-start">
      <Container />
      <Demo />
      <Commitment />
    </main>
  );
}
