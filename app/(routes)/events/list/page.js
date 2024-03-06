import React from "react";
import Navbar from "@/app/components/navbar";
import Card from "@/app/components/cards";
import eventData from "@/app/(routes)/events/events.json";

const EventListPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">All Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventData.map((event) => (
            <Card
              key={event.id}
              imageSource={`/path/to/event-${event.id}.jpg`}
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
