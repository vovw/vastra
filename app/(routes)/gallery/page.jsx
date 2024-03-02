import { Gallery } from "next-gallery"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/fotter"

export default function my_gallery() {
  return (
    <div className="gallery">
      <link rel="stylesheet" href="globals.css" />
    <Navbar/>
      <Gallery
        {...{images, widths, ratios}}
      />
      <Footer/>
    </div>
  )
}

const images = [
    { src: "/gallery/1.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/2.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/3.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/4.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/5.JPG", aspect_ratio: 16/9 },
    { src: "/gallery/6.JPG", aspect_ratio: 16/9 },
    { src: "/gallery/7.JPG", aspect_ratio: 16/9 },
    { src: "/gallery/8.JPG", aspect_ratio: 16/9 },
    { src: "/gallery/9.JPG", aspect_ratio: 16/9 },
    { src: "/gallery/10.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/11.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/12.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/13.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/14.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/15.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/16.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/17.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/18.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/19.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/20.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/21.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/22.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/23.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/24.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/25.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/26.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/27.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/28.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/29.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/30.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/31.jpeg", aspect_ratio: 16/9 },
    { src: "/gallery/32.jpeg", aspect_ratio: 16/9 },
]
const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]
