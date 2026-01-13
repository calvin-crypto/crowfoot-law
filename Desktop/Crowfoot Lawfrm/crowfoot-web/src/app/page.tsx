import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Process } from "@/components/home/Process";
import { AttorneyBrief } from "@/components/home/AttorneyBrief";
import { Trust } from "@/components/home/Trust";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <ServicesGrid />
      <AttorneyBrief />
      <Process />
    </>
  );
}
