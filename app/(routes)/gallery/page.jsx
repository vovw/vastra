import { Gallery } from "next-gallery"
import Navbar from "@/app/components/navbar"

const images = [
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/event2.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
    { src: "/gallery/a.jpg", aspect_ratio: 16/9 },
]
const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]

export default function my_gallery() {
    return (
      <div>
      <Navbar/>
        <Gallery {...{images, widths, ratios}} />
      </div>
    )
}