import Image from "next/image";
import Link from "next/link";
import Calendly from "pages/projects/rsvp/front.png";

export default function IndexPage() {
  return (
    <main className="max-w-screen-lg mx-auto px-6">
      
      <section className="py-8 md:py-16">
      <h1 className="text-3xl font-bold leading-tight text-gray-800">
        {"I'm"} Nick, a <span className="text-red-800">User Experience Researcher</span> and recent psychology graduate from Lafayette College.
      </h1>
      <p className="pt-6 text-xl font-medium leading-snug text-gray-700">{"I'm"} currently a UX Researcher at PYRAMID, where I work on inclusive fitness experiences.</p>
      </section>
      <section className="py-8 md:py-16">
        <h2 className="text-gray-600 text-2xl font-semibold pb-8">Featured Case Studies</h2>
            <article className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-8 items-center">
            <div className="lg:col-span-3">
              <Image src={Calendly} alt="RSVP's interface on mobile and desktop" layout="responsive" objectFit="cover"  quality={100}  className="rounded-3xl border border-gray-500"></Image>
            </div>
              <div className="col-span-4">
              <h1 className="pb-3">
                <Link href="/projects/rsvp">
                  <a className="text-2xl font-bold hover:text-red-800 text-gray-800 underline">
                    RSVP: A Fitness Class Reservation System
                  </a>
                </Link>
              </h1>
              <p className="text-gray-700 text-xl leading-normal">Using generative methods, and evaluative methods, and usability testing to implement a new system used by 96 percent of classgoers</p>
              <p className="inline-block text-yellow-700 bg-yellow-200 px-2 py-0.5 mt-3 rounded-full">Research</p>
              </div>
              


              </article>


        
      </section>
    </main>

  );
}
