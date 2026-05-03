import Image from "next/image";

const services = [
  { title: "Tree Felling", hook: "Safe, controlled, clean.", img: "/svc-tree-felling.jpg" },
  { title: "Tree Removal", hook: "Gone without a trace.", img: "/svc-tree-removal.jpg" },
  { title: "Crown Reduction", hook: "Safer tree. More light.", img: "/svc-crown-reduction.jpg" },
  { title: "Crown Thinning", hook: "Let the light back in.", img: "/svc-crown-thinning.jpg" },
  { title: "Stump Grinding", hook: "Below ground. Out of sight.", img: "/svc-stump-grinding.jpg" },
  { title: "Deadwooding", hook: "Remove the risk before it falls.", img: "/svc-deadwooding.jpg" },
  { title: "Hedge Cutting", hook: "Sharp edges. Every time.", img: "/svc-hedge-cutting.jpg" },
  { title: "Emergency Callout", hook: "Same-day response. 24/7.", img: "/svc-emergency.jpg" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#1B4332]">
      <div className="max-w-6xl mx-auto">
        <p className="text-base font-semibold tracking-widest text-[#16A34A] uppercase mb-3">
          What we do
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
          Tree surgery services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((svc) => (
            <a
              key={svc.title}
              href="tel:07986173679"
              className="group relative overflow-hidden rounded-2xl block"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={svc.img}
                alt={svc.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="text-white font-bold text-base md:text-xl leading-tight mb-1">
                  {svc.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">{svc.hook}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
