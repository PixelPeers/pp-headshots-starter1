import { Camera, Tv2, Clock, Shield, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Multiple Styles",
    description: "Choose from various professional styles and backgrounds",
    icon: <Camera className="h-7 w-7" />
  },
  {
    title: "High Resolution",
    description: "Get print-ready images in stunning 4K resolution",
    icon: <Tv2 className="h-7 w-7" />
  },
  {
    title: "Fast Delivery",
    description: "Receive your photos in just 20 minutes",
    icon: <Clock className="h-7 w-7" />
  },
  {
    title: "Commercial License",
    description: "Use your photos anywhere, including commercial purposes",
    icon: <Shield className="h-7 w-7" />
  },
  {
    title: "AI Enhancement",
    description: "Advanced AI technology for natural-looking results",
    icon: <Star className="h-7 w-7" />
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need for Perfect Headshots
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-background border">
              <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-white/20 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}