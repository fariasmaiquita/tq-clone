import FadeInImage from "@/app/components/FadeInImage";
import { ValuesData } from "@/app/data/CareersData";
import CareerRoles from "@/app/components/CareerRoles";
import HomeCTA from "@/app/components/HomeCTA";

export default function CareersPage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="min-[810px]:px-[20px] px-[15px] py-[200px] max-[810px]:pb-[150px]">
                <h2 className="min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] font-semibold">
                    Working at T.Q.C
                </h2>
                <div className="mt-[40px] relative bg-black/40 rounded-[12px] overflow-hidden aspect-[1.68116]">
                    <FadeInImage src="/img/careers/tqc-careers.avif" alt="" sizes="100vw" />
                </div>
                <div className="mt-[30px] grid min-[1200px]:grid-cols-3 min-[810px]:grid-cols-2 grid-cols-1 gap-[15px] font-medium leading-[1.3]">
                    <p>
                        {"At T.Q.C, creativity and innovation are at the heart of everything we do. Led by Tom Maverick Sawyer, a visionary Art Director and Videographer, the studio operates between London and New York, partnering with companies that aim to shape the future of their industries. With a focus on concept-driven visual identities, each project blends digital and print mediums, resulting in unique, impactful designs."}
                    </p>
                    <p>
                        {"The studio fosters a culture of exploration and collaboration, where team members are encouraged to bring their ideas and individuality to the table. Here, creativity is a shared journey, and every voice matters. With a multidisciplinary approach and a supportive environment, T.Q.C is a place for growth, learning, and crafting visual stories that resonate."}
                    </p>
                </div>
                <h3 className="mt-[200px] text-[40px] tracking-[-.03em] font-semibold">
                    Our Values
                </h3>
                <div className="mt-[70px] flex flex-col gap-y-[100px]">
                    {ValuesData.map((item, index) => {
                        return (
                            <div key={index} className="border-t border-t-black/20 pt-[15px] grid min-[810px]:grid-cols-2 grid-cols-1 gap-[10px]">
                                <h4 className="text-[22px] tracking-[-.03em] font-semibold leading-[1.04]">
                                    {item.title}
                                </h4>
                                <p className="font-medium leading-[1.3] max-w-[550px]">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <CareerRoles />
            <HomeCTA />
        </main>
    )
}