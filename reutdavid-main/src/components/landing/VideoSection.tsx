import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const videos = [
  { id: "DisZlUE52qc", title: "סרטון מהמטבח של רעות דוד" },
  { id: "irmKnFh-CiU", title: "סרטון מהמטבח של רעות דוד" },
  { id: "B-X6FDXTOvs", title: "סרטון מהמטבח של רעות דוד" },
];

const VideoSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
        תראו איך זה נראה במטבח שלי
      </h2>

      {/* Desktop: 3 videos side by side */}
      <div className="hidden md:flex justify-center items-center gap-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`w-full rounded-2xl overflow-hidden shadow-xl border border-border ${
              index === 1 ? "max-w-[420px] scale-105 z-10" : "max-w-[300px] opacity-90"
            }`}
          >
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden" dir="rtl">
        <Carousel opts={{ loop: true }} className="w-full max-w-[420px] mx-auto">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id}>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                  <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="right-2 left-auto" />
          <CarouselNext className="left-2 right-auto" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default VideoSection;
