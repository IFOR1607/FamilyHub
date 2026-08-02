import LocationHeader from "@/components/location/LocationHeader";
import LiveMap from "@/components/maps/LeafletMap";
import FloatingControls from "@/components/location/FloatingControls";
import FamilyBottomSheet from "@/components/location/FamilyBottomSheet";
import { LocationProvider } from "@/contexts/LocationContext";

export default function LocationPage() {
  return (
    <div className="relative h-[calc(100dvh-150px)] overflow-hidden rounded-[28px]">
      <LocationProvider>
        <LiveMap />
        <LocationHeader />
        <FloatingControls />
        <FamilyBottomSheet />
      </LocationProvider>
    </div>
  );
}