import React from "react";
import PresentationCard from "../parts/PresentationCard";

export default () => (
  <div className="presentation-wrapper">
    <PresentationCard iconName="arrow-right" title="std::vector" destinationRoute="/std::vector" />
    <PresentationCard iconName="map" title="std::map" destinationRoute="/std::map" />
    <PresentationCard iconName="embed" title="std::set" destinationRoute="/std::set" />
  </div>
);