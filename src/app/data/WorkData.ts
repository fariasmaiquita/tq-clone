type WorkDataProps = {
    title: string,
    description: string,
    aspectRatio: "1" | "4/3" | "16/9",
    mediaType: "image" | "video",
    mediaSrc: { largest: string, small: string }
}[];

export const WorkData: WorkDataProps = [
    {
        title: "Velvo", description: "Innovative elegance", aspectRatio: "1", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-01-2000w.avif",
            small: "/img/work/tqc-work-01-512w.avif"
        }
    }, {
        title: "TWYG", description: "Est. 100 million years ago", aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-02-1500w.avif",
            small: "/img/work/tqc-work-02-512w.avif"
        }
    }, {
        title: "Levi's", description: "Freedom to Move", aspectRatio: "4/3", mediaType: "video", mediaSrc: {
            largest: "/img/work/tqc-work-03-1920w.mp4",
            small: "/img/work/tqc-work-03-800w.mp4"
        }
    }, {
        title: "Adidas", description: "The new original", aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-04-1500w.avif",
            small: "/img/work/tqc-work-04-512w.avif"
        }
    }, {
        title: "Jacquemus", description: "Bold in Every Detail", aspectRatio: "1", mediaType: "video", mediaSrc: {
            largest: "/img/work/tqc-work-05-2000w.mp4",
            small: "/img/work/tqc-work-05-1500w.mp4"
        }
    }, {
        title: "Hermès", description: "Gifts for her", aspectRatio: "4/3", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-06-1500w.avif",
            small: "/img/work/tqc-work-06-512w.avif"
        }
    }, {
        title: "Nike Swim", description: "In Every Element", aspectRatio: "1", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-07-1500w.avif",
            small: "/img/work/tqc-work-07-512w.avif"
        }
    }, {
        title: "Casio", description: "Precision in Motion", aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-08-1500w.avif",
            small: "/img/work/tqc-work-08-512w.avif"
        }
    }, {
        title: "Louis Vuitton", description: "Concept Store '24", aspectRatio: "4/3", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-09-1440w.avif",
            small: "/img/work/tqc-work-09-512w.avif",
        }
    }, {
        title: "Loro Piana", description: "Quiet Luxury", aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-10-1500w.avif",
            small: "/img/work/tqc-work-10-512w.avif"
        }
    }, {
        title: "Versace", description: "Bold by design", aspectRatio: "1", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-11-1500w.avif",
            small: "/img/work/tqc-work-11-512w.avif"
        }
    }, {
        title: "Rimowa", description: "A new way to travel", aspectRatio: "4/3", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-12-1500w.avif",
            small: "/img/work/tqc-work-12-512w.avif"
        }
    }
]

export const LatestWorkData: WorkDataProps = WorkData.slice(0, 6);