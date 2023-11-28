import "leaflet/dist/leaflet.css";
import { Dispatch, useRef } from "react";
import { useEffect } from "react";
import MapGl, { MapRef, Marker, ViewStateChangeEvent } from "react-map-gl";
import { IHospitalInfo } from "src/interfaces/map";
import styled from "styled-components";
import RefixButton from "./refixButton";
import "mapbox-gl/dist/mapbox-gl.css";

interface IMapProps {
  currentPosition: { lat: number; lng: number };
  doctorPositions: IHospitalInfo[];
  selectedHospital: string;
  setSelectedHospital: Dispatch<string>;
  setSearchPosition?: Dispatch<{ left: { lat: number; lng: number }; right: { lat: number; lng: number } }>;
  setMapSearchCount: Dispatch<number>;
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: Dispatch<boolean>;
}

const Map = ({
  currentPosition,
  doctorPositions,
  selectedHospital,
  setSelectedHospital,
  setSearchPosition,
  setMapSearchCount,
  isBottomSheetOpen,
  setIsBottomSheetOpen,
}: IMapProps) => {
  const throttleRef = useRef<boolean>(false);
  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (!mapRef.current || !selectedHospital) {
      return;
    }

    const selectedLatLng = doctorPositions.filter((doc) => doc.id === selectedHospital);

    if (selectedLatLng.length === 0) {
      return;
    }

    mapRef.current.setCenter({ lat: selectedLatLng[0].point.y - 0.005, lng: selectedLatLng[0].point.x });
    mapRef.current.setZoom(15);
  }, [selectedHospital]);

  const handleMove = (e: ViewStateChangeEvent) => {
    if (throttleRef.current || !setSearchPosition) {
      return;
    }

    setMapSearchCount(0);

    throttleRef.current = true;
    const timer = setTimeout(() => {
      setSearchPosition({
        left: { lat: e.target.getBounds().getNorthWest().lat, lng: e.target.getBounds().getNorthWest().lng },
        right: { lat: e.target.getBounds().getSouthEast().lat, lng: e.target.getBounds().getSouthEast().lng },
      });
      throttleRef.current = false;
      clearTimeout(timer);
    }, 1000);
  };

  const isZoom = selectedHospital ? false : true;

  return (
    <Container>
      {currentPosition.lat !== 0 && currentPosition.lng !== 0 && (
        <MapGl
          ref={mapRef}
          mapboxAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
          initialViewState={{
            longitude: currentPosition.lng,
            latitude: currentPosition.lat - 0.005,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100vh" }}
          mapStyle={process.env.REACT_APP_MAP_STYLE}
          onMove={handleMove}
          onClick={() => setIsBottomSheetOpen(false)}
          dragPan={isZoom}
          dragRotate={isZoom}
          scrollZoom={isZoom}
          touchZoomRotate={isZoom}
          doubleClickZoom={isZoom}
        >
          {doctorPositions.map((doc, idx) => (
            <Marker key={idx} latitude={doc.point.y} longitude={doc.point.x} onClick={() => setSelectedHospital(doc.id)}>
              <img
                src={`/images/doctorAppointment/${selectedHospital === doc.id ? "selected-pin.svg" : "map-pin.png"}`}
                width={selectedHospital === doc.id ? 44 : 22}
                height={selectedHospital === doc.id ? 44 : 22}
              />
            </Marker>
          ))}
          <Marker latitude={currentPosition.lat} longitude={currentPosition.lng}>
            <img src="/images/doctorAppointment/current-pin.png" width={128} height={128} />
          </Marker>
          <RefixButton currentPosition={currentPosition} isBottomSheetOpen={isBottomSheetOpen} />
        </MapGl>
      )}
    </Container>
  );
};

export default Map;

const Container = styled.div`
  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right {
    display: none;
  }
`;
