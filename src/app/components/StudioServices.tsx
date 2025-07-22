import { ServicesData } from "@/app/data/ServicesData";
import FadeInImage from "@/app/components/FadeInImage";

export default function StudioServices() {
    return (
        <section className="min-[810px]:px-[20px] px-[15px] py-[100px]">
            <h2 className="min-[810px]:text-[40px] text-[28px] tracking-[-.03em] font-semibold pb-[40px] min-[810px]:sticky top-[120px]">
                Services
            </h2>
            {ServicesData.map((item, index) => {
                return (
                    <div key={index} className="min-[810px]:pt-[12px] pt-[30px] min-[810px]:pb-[100px] pb-[30px] border-t border-t-black/20 flex max-[810px]:flex-wrap min-[810px]:gap-x-[20px] gap-y-[15px] font-medium min-[810px]:sticky top-[200px] bg-white">
                        <div className="min-[810px]:w-[219px] w-full relative min-[810px]:aspect-[219/293] aspect-[.8] bg-black/40 rounded-[5px] overflow-hidden shrink-0 grow-0">
                            <FadeInImage src={item.imgSrc} alt="" sizes="(min-width: 810px) 219px, calc(100vw - 30px)" />
                        </div>
                        <div className="min-[1200px]:grow basis-0 shrink-0 max-[1200px]:w-min">
                            <div className="min-[810px]:text-[40px] text-[32px] tracking-[-.03em]">
                                <div>
                                    {`0${index + 1}`}
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="grow basis-0 shrink-0">
                            <div className="min-[810px]:text-[40px] text-[32px] tracking-[-.03em]">
                                {item.title}
                            </div>
                        </div>
                        <div className="grow basis-0 shrink-0 max-[810px]:basis-full">
                            <p className="leading-[1.3]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}