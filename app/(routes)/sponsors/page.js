import React from "react";
import Navbar from "@/app/components/navbar";
import Card from "@/app/components/cards";
import sponsorsData from "@/app/(routes)/sponsors/spons.json";

const SponsorsPage = () => {
  return (
    <div className="bg-gray-900">
      <div className="min-h-sreen bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-3xl font-bold text-white">Sponsors</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sponsorsData.map((sponsor) => (
              <Card
                key={sponsor.id}
                logoSource={`/path/to/logos/${sponsor.fileName}`}
                name={sponsor.name}
                description={sponsor.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
