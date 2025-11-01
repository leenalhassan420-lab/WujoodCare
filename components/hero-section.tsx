import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden"
    >
      <div className="-z-10 absolute inset-0">
        {/* Large cloud */}
        <div className="top-20 right-10 absolute bg-primary/5 blur-3xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] w-[500px] h-[300px] animate-float" />
        {/* Medium cloud */}
        <div className="top-40 right-1/3 absolute bg-secondary/5 blur-2xl rounded-[40%_60%_70%_30%/50%_60%_40%_50%] w-[350px] h-[200px] animate-float-delayed" />
        {/* Small cloud */}
        <div className="bottom-20 left-10 absolute bg-accent/5 blur-2xl rounded-[70%_30%_50%_50%/40%_50%_60%_50%] w-[250px] h-[150px] animate-float" />
        {/* Accent cloud with soft lemon */}
        <div className="top-1/2 left-1/4 absolute bg-[#f9f081]/3 blur-xl rounded-[50%_50%_40%_60%/60%_40%_60%_40%] w-[200px] h-[120px] animate-float-delayed" />
      </div>

      <div className="mx-auto px-4 lg:px-8 container">
        <div className="items-center gap-12 grid lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 px-4 py-2 rounded-full font-semibold text-primary text-sm">
                Next-Gen Healthcare Technology
              </span>
            </div>

            <h1 className="font-serif font-extrabold text-foreground text-4xl lg:text-6xl text-balance leading-tight">
              Virtual <span className="text-primary">joy</span> that{" "}
              <span className="text-secondary">heals</span>
            </h1>

            <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
              Experience the future of medical training and patient care with
              our cutting-edge VR solutions. We bring warmth, compassion, and
              innovation together to empower healthcare professionals with
              immersive technology.
            </p>

            <div className="flex sm:flex-row flex-col gap-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 font-semibold text-primary-foreground"
                asChild
              >
                <Link
                  href={{
                    hash: "#contact",
                  }}
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="group bg-transparent hover:bg-muted border-border font-medium"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Video
              </Button> */}
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="font-bold text-foreground text-3xl">500+</div>
                <div className="text-muted-foreground text-sm">
                  Healthcare Facilities
                </div>
              </div>
              <div className="bg-border w-px h-12" />
              <div>
                <div className="font-bold text-foreground text-3xl">50K+</div>
                <div className="text-muted-foreground text-sm">
                  Trained Professionals
                </div>
              </div>
              <div className="bg-border w-px h-12" />
              <div>
                <div className="font-bold text-foreground text-3xl">98%</div>
                <div className="text-muted-foreground text-sm">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-muted rounded-2xl aspect-square overflow-hidden">
              <Image
                src="./medical-professional-using-vr-headset-in-modern-he.jpg"
                alt="VR Medical Technology"
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="-bottom-6 -left-6 absolute bg-card shadow-lg p-6 border border-border rounded-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-accent/20 rounded-lg w-12 h-12">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    Precision Training
                  </div>
                  <div className="text-muted-foreground text-sm">
                    99.9% Accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
