import DevBanner from "@/components/ui/DevBanner";
import MapHeroCard from "@/components/cards/MapHeroCard";
import GridMenuCards from "@/components/cards/GridMenuCards";
import Header from "@/components/layout/Header";


export default function Home() {
  return (
    <div className="-mx-4 -mt-2">
      <Header/>
      <div className="px-4 pt-5 space-y-3">
        <DevBanner />
        <MapHeroCard />
        <GridMenuCards />
      </div>
    </div>
  );
}

