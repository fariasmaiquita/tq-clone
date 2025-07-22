import FadeInImage from "@/app/components/FadeInImage";

export default function StudioHero() {
    return (
        <section className="has-bg-img bg-black/40 min-[1200px]:h-dvh max-[1200px]:min-[810px]:h-[calc(100dvh_-_58px)] max-[810px]:h-[calc(100dvh_-_49px)] relative text-white overflow-hidden flex items-center">
            <FadeInImage src="/img/studio/tqc-studio-hero.avif" alt="" priority={true} sizes="100vw" />
            <h2 className="relative z-10 max-w-[582px] w-full min-[810px]:px-[20px] px-[15px] min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-0.03em] font-semibold">
                Timeless brands
                <div className="opacity-40">
                    for a modern era.
                </div>
            </h2>
        </section>
    )
}