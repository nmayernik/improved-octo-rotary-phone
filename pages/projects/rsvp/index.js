import Image from "next/dist/client/image";
import Cover from "pages/projects/rsvp/ccscover.png";
import Capacities from "pages/projects/rsvp/capacities.png";
import ResMethods from "pages/projects/rsvp/resmethods.png";

export default function RSVP() {
    return (
        <main className="max-w-screen-xl px-6 mx-auto py-12">
            <section className="max-w-screen-lg mx-auto lg:px-6">
                <p className="inline-block bg-yellow-200 px-3 py-0.5 mb-2 rounded-full font-medium text-yellow-700">Research</p>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <h1 className="col-span-3 lg:pr-6 text-4xl font-bold leading-tightest text-gray-600 ">
                        Implementing a Fitness Class Reservation System
                    </h1>
                    <p className="lg:col-span-4 lg:pl-4 text-xl leading-normal text-gray-600">
                        As a <strong className="font-bold">UX Researcher at PYRAMID</strong>, I used generative methods, 
                        evaluative methods and usability testing to implement a 
                        new system adopted by 96% of classgoers.
                    </p>
                </div>
            </section>

            <section className="py-16 h-full -ml-3 mr-3">
                <Image src={Cover} alt="RSVP's interface on mobile and desktop" layout="responsive" objectFit="cover"  quality={100}  className="py-5 rounded-xl"></Image>
            </section>

            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3 lg:pr-6 xl:pr-12">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-600">
                            Context
                        </h2>
                        <p className="py-1.5 lg:py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            To manage limited fitness class capacity due to COVID-19, PYRAMID offered reservations through:
                        </p>
                        <div className="py-3">
                            <Image src={ResMethods} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}></Image>
                        </div>
                        <p className="py-1.5 lg:py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            <strong>Replacing these options with a unified system</strong> became important as class attendance increased.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:pl-12">
                        <Image src={Capacities} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}  className="py-5 rounded-xl"></Image>
                        <p className="text-gray-400 text-center pt-3 px-6 leading-snug text-lg">
                            Full classes would occur within one standard deviation of mean pre-pandemic class attendance.
                        </p>
                    </div>
                </div>
                
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 pb-3">
                            Research Plan
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Following the UX Research Plan That Stakeholders Love<sup>[1]</sup>, I structured a research plan to:
                        </p>
                        <ol className="pl-8 py-3 text-gray-600 leading-relaxed text-lg md:text-xl list-outside list-decimal">
                            <li className="pb-3 leading-snug">
                                Determine the reservation system features most important to members and staff.
                            </li>
                            <li className="pb-1 leading-snug">
                                Ensure that the new system is usable.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-600">
                            User Flows
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Each registration required synchronized effort between members and staff. 
                            This high interaction cost increased the likelihood of failure.
                        </p>
                        <p className="py-3 text-gray-600 leading-normal text-base">
                            <strong>Interaction Cost</strong> - the cognitive and physcial effort required to complete a task <sup>[2]</sup>
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Semi-Structured Member <span className="whitespace-nowrap">& Stakeholder</span> Interviews
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            The three clusters of system users offered feedback unique to their contexts of use.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            I used these insights to create <strong>needs statements</strong> and an <strong>affinity diagram</strong> for use in evaluating prospective systems.
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Competitor Analysis
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            To understand how other fitness services structured their registration flows, I looked at the following:
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Competitors differed over <strong>organizing classes by date or by franchise</strong>. A franchise-first approach made more sense at PYRAMID.
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Usability Testing
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            When deciding between <strong>Calendly</strong> & <strong>Acuity</strong>, representative samples of classgoers and staff completed tasks while speaking aloud. Tasks were rotated to avoid order effects. 
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Members preferred Calendly’s native feel and its showing class descriptions in its date-picker. They found Acuity’s scrolling to be burdensome. 
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Staff were complimentary of both interfaces. 
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Rollout & Adoption
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            We named the system RSVP to reflect the inclusive nature of fitness classes.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            I created marketing materials that emphasized its usability, and that doubled as tutorials.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            <strong>
                                RSVP was used for 96 percent of class registrations within three weeks launch.
                            </strong>
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Outcome: The Hub of <span className="whitespace-nowrap">PYRAMID (At Home)</span>
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            When fitness clubs closed in December due to rising COVID-19 cases, we launched <strong>PYRAMID (At Home), a month-long premium service</strong> offering fitness classes, personalized training, and challenges from home.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            RSVP was crucial to organizing those offerings, and {"members'"} familiarity with it made the service feel more familiar.
                        </p>
                        
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-16 max-w-6xl mx-auto lg:px-6">
                <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                    Reflection
                </h2>
                <p className="py-3 text-gray-600 leading-relaxed text-lg md:leading-relaxed md:text-xl">
                    I’m grateful to everyone who helped bring RSVP to life over a short period. Its success shows the importance of asynchronous, automated systems as a means of freeing up people’s time and increasing desired behaviors. Since its launch, RSVP has been adapted to other services at PYRAMID, and its future looks bright.
                </p>                 
            </section>










            
        </main>
    )
};
