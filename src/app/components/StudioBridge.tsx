import FadeInImage from "@/app/components/FadeInImage";

export default function StudioBridge() {
    return (
        <section className="has-bg-img relative min-[810px]:px-[20px] px-[15px] min-[1200px]:h-[180vh] h-dvh bg-black/40">
            <FadeInImage src="/img/studio/tqc-studio-bridge.avif" alt="" sizes="100vw" />
            <div className="z-10 flex items-center h-dvh sticky top-0 text-white">
                <h2 className="min-[1200px]:max-w-[865px] max-w-[700px] w-full min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-0.03em] font-semibold">
                    Making brands memorable by creating lasting impressions that resonate with audiences.
                </h2>
            </div>
        </section>
    )
}