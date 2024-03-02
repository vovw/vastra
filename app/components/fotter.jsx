import Link from 'next/link';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark" style={{ backgroundImage: "url('noise-light.png"}}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4">
          <p>vastra2020@gmail.com</p>
          <Link href="https://www.instagram.com/vastravjti/" target="_blank">
              <Instagram />
          </Link>
          <Link href="https://www.linkedin.com/in/vastra-vjti-0019812b1/" target="_blank" legacyBehavior>
              <Linkedin />
          </Link>
          <Link href="https://www.youtube.com/channel/UCoJH2B-RFOJtXMFfM0SoyEw" target="_blank" legacyBehavior>
              <Youtube />
          </Link>
        </div>
        <div className="text-center py-2">
          <p>&copy;  2024 Vastra</p>
        </div>
      </div>
    </footer>
  );
}
