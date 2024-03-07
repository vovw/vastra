import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Card from "@/app/components/cards";
import eventData from "@/app/(routes)/events/events.json";

const EventListPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">All Events</h2>
        <Link
          href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSdjLR_mmXxyt1_1eJWTao3cn714TU-visPdBwBTMwsZOedeuw/viewform"
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          <h2 className="mb-8 text-xl">Register Here</h2>
        </Link>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventData.map((event) => (
            <Card
              key={event.id}
              imageSource={`/events/${event.id}.jpg`}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventListPage;
