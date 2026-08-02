import MapHeroCard from "@/components/cards/MapHeroCard";
import GridMenuCards from "@/components/cards/GridMenuCards";

export default function Home() {
  return (
    <div className="space-y-4">
      <MapHeroCard />
      <GridMenuCards />
    </div>
  );
}