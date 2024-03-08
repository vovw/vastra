import React from "react";
import Link from "next/link";
import Card from "@/app/components/cards";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/fotter";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Card
              imageSource="/events/almuni.jpg"
              title="Textile Alumni Meet"
              description="Join us for the annual Textile Alumni Meet to connect with fellow alumni and share experiences."
            />

            <br />
            <div className="mb-8 flex items-center justify-center">
              <Link
                href="https://docs.google.com/forms/u/3/d/1qs-fCKsmjvMThKoMu6KvuHViU2BzokSgpGMTeR7nhIg/edit#responses"
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Register Here
              </Link>
            </div>
          </div>
          <Link
            href="/events/list"
            className="rounded-lg bg-gray-800 p-6 shadow-lg transition-colors duration-300 hover:bg-gray-700"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">
              All Events
            </h3>
            <p className="text-gray-300">
              Click here to see the list of all events.
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
