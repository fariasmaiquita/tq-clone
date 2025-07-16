import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="min-[810px]:px-[20px] px-[15px] pt-[60px] min-[810px]:pb-[200px] pb-[150px] min-[1200px]:grid grid-cols-3 gap-[20px]">
            <div className="col-start-2 col-span-2">
                <p className="min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] leading-none font-semibold min-[1200px]:max-w-[1000px] min-[810px]:max-w-[734px] max-w-[420px]">
                    <span className="max-[810px]:hidden">
                        We are a creative studio dedicated to designing experiences that captivate and inspire.
                    </span>
                    <span className="min-[810px]:hidden">
                        We’re a creative studio crafting experiences that captivate and inspire.
                    </span>
                </p>
                <Link href="" className="mt-[20px] text-[14px] tracking-[-.03em] font-semibold leading-[18px] relative inline-block group">
                    About us
                    <div className="absolute bottom-0 w-full border-b transform origin-top-right transition-transform duration-500 ease-in-out group-hover:scale-0"></div>
                </Link>
            </div>
        </section>
    )
}