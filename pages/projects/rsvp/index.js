import Image from "next/dist/client/image";
import Cover from "pages/projects/rsvp/ccscover.png";
import ResearchPlan from "pages/projects/rsvp/researchplan.png";
import ResMethods from "pages/projects/rsvp/resmethods.png";
import Attendance from "pages/projects/rsvp/attendance.png";
import NeedsStatements from "pages/projects/rsvp/needsstatements.png";
import CompetitorAnalysis from "pages/projects/rsvp/competitoranalysis.png";
import AtHome from "pages/projects/rsvp/athome.png";
import Promo from "pages/projects/rsvp/promo2.png";
import UsabilityTest from "pages/projects/rsvp/usabilitytest.png";
import Link from "next/link";




export default function RSVP() {
    return (
        <main className="max-w-screen-xl px-6 mx-auto py-12">
            <section className="max-w-6xl mx-auto lg:px-6">
                <p className="inline-block bg-yellow-200 px-3 py-0.5 mb-2 rounded-full font-medium text-yellow-700">Research</p>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center lgpx-6">
                    <h1 className="col-span-3 text-4xl font-bold leading-tightest text-gray-800 ">
                        Implementing a <span className="whitespace-nowrap">Fitness Class</span> <span className="whitespace-nowrap">Reservation System</span>
                    </h1>
                    <p className="lg:col-span-4 lg:pl-4 text-xl leading-normal text-gray-700">
                        As a <strong className="font-bold">UX Researcher at PYRAMID</strong>, I used <strong>generative methods</strong>, <strong>evaluative methods</strong> and <strong>usability testing</strong> to implement a 
                        new system adopted by 96% of classgoers.
                    </p>
                </div>
            </section>

            <section className="py-6 md:py-16 h-full -ml-3 mr-3">
                <Image src={Cover} alt="RSVP's interface on mobile and desktop" layout="responsive" objectFit="cover"  quality={100}  className="py-5 rounded-xl"></Image>
            </section>

            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3 lg:pr-6 xl:pr-12">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-800">
                            Context
                        </h2>
                        <p className="py-1.5 lg:py-3 text-gray-700 leading-relaxed text-lg md:text-xl"> 
                            When fitness classes were capped at 50 percent due to COVID-19, PYRAMID offered reservations by:
                        </p>
                        <div className="py-3 lg:mr-3 xl:mr-8">
                            <Image src={ResMethods} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}></Image>
                        </div>
                        <p className="py-1.5 lg:py-3 text-gray-700 leading-relaxed text-lg md:text-xl">
                            <strong>Replacing these options with a unified system</strong> would be important as members became comfortable returning to class.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:pl-12">
                        <div className="my-5 border border-gray-300 rounded-3xl">
                            <Image src={Attendance} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}  className="rounded-3xl"></Image>
                        </div>
                        <p className="text-gray-500 text-center px-6 leading-snug text-lg">
                            Full classes would occur within one standard deviation of mean pre-pandemic class attendance.
                        </p>
                    </div>
                </div>
                
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 pb-3">
                            Research Plan
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Following a modified version of the <i>UX Research Plan That Stakeholders Love </i><span className="text-red-800">(Sharon, 2012)</span>, I structured a research plan to:
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
                    <div className="lg:col-span-4 lg:pl-12">
                        <div className="my-5 border border-gray-300 rounded-3xl">
                            <Image src={ResearchPlan} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}  className="rounded-3xl border border-gray-300"></Image>
                        </div>
                        <p className="text-gray-500 text-center px-6 leading-snug text-lg">
                            Research plan in Notion covering background, methods, participants, and scripts (not displayed).
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-600">
                            User Flows
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Each registration required <strong>synchronized effort between members and staff</strong>. 
                            The Front Desk role required interacting with customers in-person and conducting temperature checks, 
                            which could interfere with responding to calls and messages. 
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            The high interaction cost of this synchronizing increased the likelihood of failure via an unsuccessful registration.
                        </p>
                        <p className="py-3 text-gray-600 leading-normal text-base">
                            <strong>Interaction Cost</strong> - the cognitive and physcial effort required to complete a task <span className="text-red-800">(Budiu, 2013)</span>
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:pl-12 lg:pr-1">
                    <div className="">
                        <iframe width="100%" height="600px" src="https://miro.com/app/live-embed/o9J_lv-7zb4=/?moveToViewport=-2199,-2560,5840,4565" scrolling="no" allowFullScreen className="rounded-3xl border border-gray-300"></iframe>
                    </div>
                    <p className="pt-5 text-gray-500 text-center px-6 leading-snug text-lg">
                        Interactive member flows created in Miro.
                    </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Semi-Structured Member <span className="whitespace-nowrap">& Stakeholder</span> Interviews
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            To determine needs and pain points, I interviewed representative samples of each cluster of system users. 
                            
                        </p>
                        <ul className="pl-8 py-3 text-gray-600 leading-relaxed text-lg md:text-xl list-outside list-disc">
                            <li className="pb-3 leading-snug">
                                Members
                            </li>
                            <li className="pb-3 leading-snug">
                                Front Desk Staff
                            </li>
                            <li className="pb-1 leading-snug">
                                Admin Staff
                            </li>
                        </ul>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            I used these insights to create <strong>needs statements</strong> and an <strong>affinity diagram</strong> for use in evaluating prospective systems.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:pl-12">
                        <div className="my-5 border border-gray-300 rounded-3xl">
                            <Image src={NeedsStatements} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}  className="rounded-3xl border border-gray-300"></Image>
                        </div>
                        <p className="text-gray-500 text-center px-6 leading-snug text-lg">
                            Needs statements to summarize findings for stakeholders.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-7 pt-8 lg:pt-14">
                    <iframe width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FrO1Ua0jmimdhtfYjIwSL9W%2FReservation-System-Needs%3Fnode-id%3D0%253A1" allowFullScreen className="rounded-3xl border border-gray-300"></iframe>
                    <p className="pt-5 text-gray-500 text-center px-6 leading-snug text-lg">
                        Affinity Diagram of member, front desk staff, and admin staff needs, sorted by cluster.
                    </p>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Competitor Analysis
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            To understand how other fitness services structured their registration flows, I looked at the approaches of <strong>Crunch</strong>, <strong>Equinox</strong>, and <strong>Peloton</strong>.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            Competitors differed over <strong>organizing classes by date or by type of class</strong>. PYRAMID opted for a chronological arrangement on its Class Schedule page and a by-class arrangement on its Reservation page.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:pl-12">
                        <div className="my-5 border border-gray-300 rounded-3xl">
                            <Image src={CompetitorAnalysis} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}  className="rounded-3xl border border-gray-300"></Image>
                        </div>
                        <p className="text-gray-500 text-center px-6 leading-snug text-lg">
                            Initial class pages in each service.
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
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
                    <div className="lg:col-span-4 lg:pl-12">
                        <div className="my-5 border border-gray-300 rounded-3xl">
                            <Image src={UsabilityTest} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}  className="rounded-3xl border border-gray-300"></Image>
                        </div>
                        <p className="text-gray-500 text-center px-6 leading-snug text-lg">
                            {"Calendly's"} datepicker that was favored in testing.
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            Implementation & Adoption
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            We selected <strong>Calendly</strong>, after discovering that members preferred it to Acuity. To build on its native feel, I styled the reservation widget to follow Ochre, {"PYRAMID's"} design system.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            We named the system RSVP to reflect the inclusive nature of fitness classes. I created marketing materials that emphasized its usability, and that doubled as tutorials.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            <strong>
                                RSVP was used for 96 percent of class registrations within three weeks launch.
                            </strong>
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:pl-12">
                        <div className="my-5 border border-gray-300 rounded-3xl bg-gray-300">
                            <Image src={Promo} alt="Class capacities" layout="responsive"   quality={100}  className="rounded-3xl border border-gray-300"></Image>
                        </div>
                        <p className="text-gray-500 text-center px-6 leading-snug text-lg">
                            Promotionional posters placed throughout PYRAMID.
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                    <div className="lg:col-span-3">
                        <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                            RSVP & <span className="whitespace-nowrap">PYRAMID (At Home)</span>
                        </h2>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            When fitness clubs closed in December due to rising COVID-19 cases, we launched <strong>PYRAMID (At Home), a month-long premium service</strong> offering fitness classes, personalized training, and challenges from home.
                        </p>
                        <p className="py-3 text-gray-600 leading-relaxed text-lg md:text-xl">
                            RSVP was crucial to {"(At Home)'s"} success, since members had an existing mental model of how registration worked.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:pl-12">
                        <div className="my-5 border border-gray-300 rounded-3xl bg-gray-300">
                            <Image src={AtHome} alt="Class capacities" layout="responsive" objectFit="cover"  quality={100}  className="rounded-3xl w-full"></Image>
                        </div>
                        <p className="text-gray-500 text-center px-6 leading-snug text-lg">
                            Promotional graphic for Group Fitness Classes (At Home), where members registered using RSVP.
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                    Reflection
                </h2>
                <p className="py-3 text-gray-600 leading-relaxed text-lg md:leading-relaxed md:text-xl">
                    I’m grateful to everyone who helped bring RSVP to life over a short period. Its success shows the importance of asynchronous, automated systems as a means of freeing up people’s time and increasing desired behaviors. Since its launch, RSVP has been adapted for other services at PYRAMID, and its future looks bright.
                </p>                 
            </section>
            <hr className="border-gray-200 border my-10"/>
            <section className="py-8 md:py-16 max-w-6xl mx-auto lg:px-6">
                <h2 className="pb-3 text-2xl md:text-3xl font-bold text-gray-700">
                    References
                </h2>
                <ol className="py-3">
                    <li className="py-1.5 text-gray-600 leading-relaxed text-lg md:leading-relaxed md:text-xl">
                        Budiu, R. (2013, August 31). Interaction cost: Definition. Nielsen Norman Group. Retrieved October 8, 2021, from <Link href="https://www.nngroup.com/articles/interaction-cost-definition/"><a className="text-red-800 underline">https://www.nngroup.com/articles/interaction-cost-definition/</a></Link>. 
                    </li>
                    <li className="py-1.5 text-gray-600 leading-relaxed text-lg md:leading-relaxed md:text-xl">
                        Sharon, T. (2012, January 26). The UX research plan that stakeholders love. Smashing Magazine. Retrieved October 8, 2021, from <Link href="https://www.smashingmagazine.com/2012/01/ux-research-plan-stakeholders-love/"><a className="text-red-800 underline">https://www.smashingmagazine.com/2012/01/ux-research-plan-stakeholders-love/</a></Link>. 
                    </li>
                </ol>    
            </section>
            
        </main>
    )
};
