import Link from "next/link";
import { Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Camera className="h-5 w-5 text-primary" />
              <span>Pixel Peers</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional AI-generated headshots for your online presence.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://github.com/PixelPeers/pp-headshots-starter1" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link 
                  href="https://aiheadshots.click" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/PixelPeers" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  PixelPeers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://github.com/PixelPeers/pp-headshots-starter1/issues" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="https://choosealicense.com/licenses/mit/" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PixelPeers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <Link
                href="https://www.astria.ai/"
                className="text-primary hover:underline"
                target="_blank"
              >
                Astria
              </Link>
              ,{" "}
              <Link
                href="https://supabase.com/"
                className="text-primary hover:underline"
                target="_blank"
              >
                Supabase
              </Link>
              , and{" "}
              <Link
                href="https://vercel.com/"
                className="text-primary hover:underline"
                target="_blank"
              >
                Vercel
              </Link>
              {" • "}
              <Link
                href="https://github.com/PixelPeers/pp-headshots-starter1"
                className="text-primary hover:underline"
                target="_blank"
              >
                Open Source (MIT)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
