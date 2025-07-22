import { NewsData, ThreeMoreNewsData } from "@/app/data/NewsData";
import { notFound } from "next/navigation";
import FadeInImage from "@/app/components/FadeInImage";
import Link from "next/link";

export default async function SingleNewsPage({ params }: { params: Promise<{ newsId: string }> }) {
    const pageParams = await params;
    const newsId = parseInt(pageParams.newsId);
    const singleNewsData = NewsData[newsId];

    if (!singleNewsData) {
        return notFound();
    }

    const moreNewsData = ThreeMoreNewsData(newsId);

    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="min-[810px]:px-[20px] px-[15px] py-[200px] max-[810px]:pb-[150px]">
                <div className="opacity-40">
                    Studio News
                </div>
                <div className="mt-[10px] min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] max-w-[850px] font-semibold">
                    {singleNewsData.title}
                </div>
                <div className="mt-[100px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[20px] gap-y-[40px] items-end">
                    <div className="font-semibold">
                        <span className="opacity-40">
                            Date:&nbsp;
                        </span>
                        {singleNewsData.date}
                    </div>
                    <div className="text-[16px] tracking-[-.03em] opacity-40 min-[810px]:col-start-3">
                        {"With research, strategic insights, and creative vision, we establish identities that resonate with their audiences, building trust and recognition."}
                    </div>
                </div>
                <div className="mt-[20px] relative bg-black/40 aspect-[1.77642] rounded-[10px] overflow-hidden">
                    <FadeInImage src={singleNewsData.imgSrc} alt="" sizes="100vw" />
                </div>
                <div className="mt-[40px] grid min-[1200px]:grid-cols-[1fr_2fr_1fr] min-[810px]:grid-cols-[1fr_2fr] max-[810px]:grid-rows-[1fr_auto] gap-y-[40px]">
                    <div className="max-[810px]:row-start-2">
                        <button className="font-semibold leading-[18px] relative group cursor-pointer">
                            Share Article
                            <div className="absolute bottom-0 w-full border-b origin-left transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100"></div>
                        </button>
                    </div>
                    <div className="text-[16px] tracking-[-.03em] font-medium leading-[1.2] max-[810px]:row-start-1">
                        <div className="max-[810px]:max-w-[650px] mx-auto">
                            <div className="text-[30px] tracking-[-.03em] font-semibold leading-none">
                                Understanding the Concept
                            </div>
                            <p className="mt-[20px]">
                                {"The first step in building a brand identity is to dive into the heart of a business. This isn’t about surface-level understanding but about going deeper—uncovering the brand’s purpose, goals, values, and vision. In this phase, we conduct in-depth interviews with key stakeholders to understand what drives the brand, what makes it unique, and who its audience truly is."}
                            </p>
                            <p className="mt-[20px]">
                                {"We analyze the competitive landscape, too, identifying what other brands are doing and where there might be gaps or opportunities. By understanding the industry, trends, and customer expectations, we can begin to visualize where the brand can stand out. From this discovery phase, we gather the insights that will shape every element of the brand’s identity. Our goal is to distill the essence of the brand into a clear purpose, which will guide all future decisions."}
                            </p>
                            <div className="mt-[40px] text-[30px] tracking-[-.03em] font-semibold leading-none">
                                Strategy and Positioning
                            </div>
                            <p className="mt-[20px]">
                                {"Once we have a solid understanding of the brand’s inner workings and market context, we move on to strategy and positioning. This step is all about defining how the brand will be perceived in the minds of its audience. Brand positioning answers the critical question:\u00a0"}
                                <span className="italic">
                                    {"Why should customers choose this brand over others?"}
                                </span>
                            </p>
                            <p className="mt-[20px]">
                                {"During this phase, we work closely with our clients to define the brand’s voice, tone, and key messages. These elements are essential because they inform not only the visual identity but also how the brand will communicate across all platforms. We also identify target personas, exploring the specific characteristics, preferences, and pain points of the brand’s ideal audience. By establishing a clear brand positioning statement, we create a foundation that aligns every aspect of the identity with the brand’s purpose and audience expectations."}
                            </p>
                            <div className="mt-[40px] text-[30px] tracking-[-.03em] font-semibold leading-none">
                                Creative Development and Design
                            </div>
                            <p className="mt-[20px]">
                                {"With a defined strategy in place, we move into the creative development and design phase, where the brand’s visual identity takes shape. This includes the creation of the logo, color palette, typography, and any other design elements that represent the brand visually. But this isn’t just about making things look “nice”—it’s about ensuring that every element is purposeful, cohesive, and aligned with the brand’s essence."}
                            </p>
                            <p className="mt-[20px]">
                                {"For instance, a modern, minimalistic logo might reflect a forward-thinking tech company, while a classic, serif font might evoke tradition and trustworthiness. Color psychology also plays a role; each color conveys a particular mood or feeling, and we choose colors that align with the brand’s emotional objectives. Throughout this phase, we work collaboratively with our clients, presenting design concepts, gathering feedback, and iterating on ideas until we have a visual identity that perfectly encapsulates the brand."}
                            </p>
                            <div className="mt-[40px] text-[30px] tracking-[-.03em] font-semibold leading-none">
                                Implementation and Brand Guidelines
                            </div>
                            <p className="mt-[20px]">
                                {"The final step is implementing the brand identity across all relevant touchpoints and creating a comprehensive set of brand guidelines. These guidelines act as a roadmap, ensuring that the brand remains consistent and recognizable no matter where or how it appears. This includes detailed instructions on logo usage, color codes, typography, image style, tone of voice, and more."}
                            </p>
                            <p className="mt-[20px]">
                                {"Implementation is about bringing the brand identity to life, whether through a website, social media, packaging, or marketing materials. We ensure every element is consistent with the brand’s core identity and that each touchpoint speaks the same language. Consistency is key in building brand recognition, and clear brand guidelines help maintain it even as the brand grows and evolves."}
                            </p>
                            <div className="mt-[40px] text-[30px] tracking-[-.03em] font-semibold leading-none">
                                Conclusion
                            </div>
                            <p className="mt-[20px]">
                                {"Creating an impactful brand identity is a journey that goes far beyond the design phase. It’s about understanding, strategizing, creating, and implementing a cohesive representation of a brand’s essence that speaks to its audience and stands out in the market. Through our meticulous, step-by-step process, we ensure that each brand we work with is positioned for long-term recognition, loyalty, and growth. Our approach isn’t just about design; it’s about crafting identities that truly resonate."}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="min-[810px]:mt-[200px] mt-[150px] flex justify-between items-end gap-[10px]">
                    <h2 className="min-[810px]:text-[40px] text-[28px] tracking-[-.03em] font-semibold">
                        Other articles
                    </h2>
                    <Link href="/news" className="font-semibold leading-[18px] relative group">
                        View All
                        <div className="absolute bottom-0 w-full border-b origin-left transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100"></div>
                    </Link>
                </div>
                <div className="mt-[20px] flex max-[810px]:flex-col gap-x-[15px] gap-y-[20px]">
                    {moreNewsData.map((itemData, itemIndex) => {
                        if (!itemData) return null;
                        const itemHref = `/news/${itemIndex}`;
                        return (
                            <div key={itemIndex} className="min-[810px]:w-[calc((100%-30px)/3)] w-full">
                                <Link href={itemHref} className="block bg-black/40 aspect-4/3 relative rounded-[10px] overflow-hidden">
                                    <FadeInImage src={itemData.imgSrc} sizes="(min-width: 810px) 33vw, calc(100vw - 30px)" alt="" />
                                </Link>
                                <Link href={itemHref} className="text-[14px] tracking-[-.03em] inline-flex flex-wrap gap-x-[5px] mt-[12px] opacity-40">
                                    <span>{itemData.category}</span>
                                    <span>/</span>
                                    <span>{itemData.date}</span>
                                </Link>
                                <br />
                                <Link href={itemHref} className="min-[810px]:max-w-[360px] max-w-[320px] inline-block mt-[10px] min-[810px]:text-[22px] text-[18px] tracking-[-.03em] font-semibold transition-opacity duration-500 hover:opacity-40">
                                    {itemData.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}