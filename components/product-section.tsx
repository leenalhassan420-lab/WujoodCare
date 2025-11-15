import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Microscope, Stethoscope, Brain, Activity } from "lucide-react";
import Image from "next/image";

export function ProductSection() {
  const features = [
    "Realistic surgical simulations",
    "Patient interaction scenarios",
    "Anatomy visualization in 3D",
    "Emergency response training",
    "Collaborative learning environments",
    "Progress tracking & analytics",
  ];

  const modules = [
    {
      title: "Calm During Procedures",
      description:
        "Nature-based, responsive environments that gently redirect attention away from needles, infusions, dressings, and other stressful procedures.",
      bgClass: "bg-[#563293]",
      icon: "",
    },
    {
      title: "Scan & Imaging Journeys",
      description:
        "VR preparation paths that familiarize children with MRI, CT, and other imaging - reducing anxiety, improving cooperation, and supporting smoother scans.",
      bgClass: "bg-[#4eb2d0]",
      icon: "",
    },
    {
      title: "Bedside Recovery & Resilience",
      description:
        "Comforting companions, light interaction, and guided breathing exercises that support long hospital stays, rehabilitation, and chronic treatment cycles.",
      bgClass: "bg-[#c060a5]",
      icon: "",
    },
    {
      title: "Coping in High-Stress Moments",
      description:
        "Adaptive, moment-sized experiences that guide children through grounding, breathing, and focus during episodes of acute fear, pain, or anxiety.",
      bgClass: "bg-[#7a4ac7]",
      icon: "",
    },
  ];

  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-[#563293] text-5xl">
            Our Experiences
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-xl text-justify">
            Immersive VR journeys designed to help children navigate medical
            care with more calm, confidence, and emotional safety.
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
          {modules.map((product) => (
            <div
              key={product.title}
              className="group hover:shadow-2xl rounded-2xl overflow-hidden transition"
            >
              <div
                className={`${product.bgClass} p-8 h-full rounded-2xl text-white`}
              >
                <div className="mb-4 text-5xl">{product.icon}</div>
                <h3 className="mb-3 font-bold text-2xl">{product.title}</h3>
                <p className="text-white/90">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section id="products" className="py-20 lg:py-32">
    //   <div className="mx-auto px-4 lg:px-8 container">
    //     <div className="mx-auto mb-16 max-w-3xl text-center">
    //       <div className="inline-block mb-4">
    //         <span className="bg-accent/10 px-4 py-2 rounded-full font-medium text-accent text-sm">
    //           Our Product
    //         </span>
    //       </div>
    //       <h2 className="mb-6 font-bold text-foreground text-3xl lg:text-5xl text-balance">
    //         Comprehensive VR Medical Training Platform
    //       </h2>
    //       <p className="text-muted-foreground text-lg leading-relaxed">
    //         A complete suite of immersive training modules designed to enhance
    //         medical education and improve patient outcomes through hands-on
    //         virtual experience.
    //       </p>
    //     </div>

    //     <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2 mb-20">
    //       <div className="relative order-2 lg:order-1">
    //         <div className="relative bg-muted rounded-2xl aspect-[4/3] overflow-hidden">
    //           <Image
    //             src="./vr-medical-training-interface-with-3d-anatomy-visu.jpg"
    //             alt="VR Medical Training Platform"
    //             className="w-full h-full object-cover"
    //             fill
    //           />
    //         </div>
    //       </div>

    //       <div className="space-y-6 order-1 lg:order-2">
    //         <h3 className="font-bold text-foreground text-2xl lg:text-3xl">
    //           Advanced Features for Modern Healthcare
    //         </h3>
    //         <p className="text-muted-foreground leading-relaxed">
    //           Our platform integrates the latest VR technology with proven
    //           medical training methodologies, providing an unparalleled learning
    //           experience.
    //         </p>

    //         <div className="gap-4 grid sm:grid-cols-2">
    //           {features.map((feature) => (
    //             <div key={feature} className="flex items-start gap-3">
    //               <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 mt-0.5 rounded-full w-5 h-5">
    //                 <Check className="w-3 h-3 text-primary" />
    //               </div>
    //               <span className="text-foreground text-sm">{feature}</span>
    //             </div>
    //           ))}
    //         </div>

    //         <Button
    //           size="lg"
    //           className="bg-primary hover:bg-primary/90 mt-4 text-primary-foreground"
    //         >
    //           Explore Features
    //         </Button>
    //       </div>
    //     </div>

    //     <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
    //       {modules.map((module) => (
    //         <Card
    //           key={module.title}
    //           className="bg-card hover:shadow-lg p-6 border-border transition-all hover:-translate-y-1"
    //         >
    //           <div
    //             className={`w-14 h-14 ${module.color} rounded-xl flex items-center justify-center mb-4`}
    //           >
    //             <module.icon className="w-7 h-7" />
    //           </div>
    //           <h3 className="mb-3 font-semibold text-card-foreground text-xl">
    //             {module.title}
    //           </h3>
    //           <p className="text-muted-foreground text-sm leading-relaxed">
    //             {module.description}
    //           </p>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
