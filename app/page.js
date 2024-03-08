import React from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import Footer from "./components/fotter";

const LandingPage = () => {
  return (
    <>
      <main className="background ">
        <Navbar />
        <div className="landingPage py-40">
          <div className="landingContent flex items-center justify-center">
            <Image
              className="image"
              src="/logo.png"
              alt="Vastra '24 Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="landingContent">
            <h1
              className="text-6xl font-bold drop-shadow-2xl"
              style={{ fontFamily: "" }}
            >
              VASTRA &apos;24{" "}
            </h1>
            <h1 className="text-xl" style={{ fontFamily: "" }}>
              Elevate Fashion with Technology
            </h1>
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
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
