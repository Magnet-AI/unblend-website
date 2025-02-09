"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

const INDIA_TOPO_JSON = "./india.json";

const availableCities = [
  { name: "Bangalore", coordinates: [77.5946, 12.9716] },
  { name: "Chennai", coordinates: [80.2707, 13.0827] },
  { name: "Mumbai", coordinates: [72.8777, 19.076] },
  { name: "Delhi", coordinates: [77.1025, 28.7041] },
  { name: "Hyderabad", coordinates: [78.4867, 17.385] },
];

export default function FindUnBlendPage() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-blue/20 via-white to-unblend-blue/20 overflow-hidden">
      <Navbar />
      <main className="container mx-auto px-16 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-unblend-navy mb-8"
        >
          Find UnBlend Near You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Discover where you can find UnBlend products in major cities across
          India.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Interactive India Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 750, center: [78, 22] }}
              className="w-full"
            >
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#e6e6e6"
                      stroke="#cccccc"
                      strokeWidth="0.5"
                      className="transition duration-300 hover:fill-gray-300"
                    />
                  ))
                }
              </Geographies>
              {availableCities.map((city, index) => (
                <Marker
                  key={index}
                  coordinates={city.coordinates}
                  onMouseEnter={() => setHoveredCity(city.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => {
                    if (city.name === "Bangalore") {
                      alert(`UnBlend is available in ${city.name}!`);
                    } else {
                      alert(`UnBlend is soon to be available in ${city.name}!`);
                    }
                  }}
                >
                  <circle
                    r={6}
                    fill="#1E3A8A"
                    className="transition duration-300 hover:scale-110"
                  />
                  <text
                    textAnchor="middle"
                    y={index % 2 === 0 ? -15 : 15}
                    fill={hoveredCity === city.name ? "#1E3A8A" : "#555"}
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {city.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </motion.div>

          {/* City List & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-unblend-navy mb-6">
              Coming Soon Locations
            </h2>
            <ul className="space-y-4">
              {availableCities.map((city) => (
                <motion.li
                  key={city.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center space-x-2"
                >
                  <MapPin className="w-5 h-5 text-unblend-navy" />
                  <span className="text-lg">{city.name}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-unblend-navy mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-6">
                Join our WhatsApp group to stay updated on UnBlend’s
                availability in your area and get exclusive updates!
              </p>
              <Link
                href="https://chat.whatsapp.com/KhJR0jaBuj09NZDsO3ihYI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-unblend-navy hover:bg-unblend-navy/90 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Join WhatsApp Group
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
