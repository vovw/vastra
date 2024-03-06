import React from "react";
import Navbar from "./components/navbar";
import Image from "next/image";

const LandingPage = () => {
  return (
    <>
      <main className="background">
        <Navbar />
        <div className="landingPage">
          <div className="landingContent">
            <Image
              src="/logo.png"
              alt="Vastra '24 Logo"
              width={200}
              height={200}
            />
            <h1>Vastra &apos;24</h1>
          </div>
        </div>
        {/*
        <h1>Glimpse Of VASTRA,VJTI</h1>
        <div className="landingPage">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/wgdNa0aKv5k?si=FCPH_Iyx3Fcb1qoX&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div> */}
      </main>
    </>
  );
};

export default LandingPage;
