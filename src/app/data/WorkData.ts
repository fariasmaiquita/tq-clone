type HeroWorkDataProps = {
    lgMediaSrc: string,
    smMediaSrc: string,
    mediaType: "image" | "video",
    url: string
}[];

export const HeroWorkData:HeroWorkDataProps = [
    { lgMediaSrc: "/img/work/tqc-work-09-1440w.avif", smMediaSrc: "/img/work/tqc-work-09-512w.avif", mediaType: "image", url: "/work/9" },
    { lgMediaSrc: "/img/work/tqc-work-03-1920w.mp4", smMediaSrc: "/img/work/tqc-work-03-800w.mp4", mediaType: "video", url: "/work/3" },
    { lgMediaSrc: "/img/work/tqc-work-08-1500w.avif", smMediaSrc: "/img/work/tqc-work-08-512w.avif", mediaType: "image", url: "/work/8" }
];

export const WorkCatgData: (string | undefined)[] = [
    undefined, "Digital", "Print", "Motion", "Creative Direction", "Strategy", "Photography", "Identity", "Campaign",
];

export const MainWorkCatgData: (string | undefined)[] = WorkCatgData.slice(0, 5);

export type WorkDataProps = ({
    title: string,
    description: string,
    aspectRatio: "1" | "4/3" | "16/9",
    mediaType: "image" | "video",
    mediaSrc: { largest: string, small: string },
    categories: number[],
    year: number
} | undefined)[];

export const WorkData: WorkDataProps = [
    undefined,
    {
        title: "Velvo", description: "Innovative elegance", year: 2024, categories: [2, 5], aspectRatio: "1", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-01-2000w.avif",
            small: "/img/work/tqc-work-01-512w.avif"
        }
    }, {
        title: "TWYG", description: "Est. 100 million years ago", year: 2024, categories: [2, 6], aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-02-1500w.avif",
            small: "/img/work/tqc-work-02-512w.avif"
        }
    }, {
        title: "Levi's", description: "Freedom to Move", year: 2024, categories: [4], aspectRatio: "4/3", mediaType: "video", mediaSrc: {
            largest: "/img/work/tqc-work-03-1920w.mp4",
            small: "/img/work/tqc-work-03-800w.mp4"
        }
    }, {
        title: "Adidas", description: "The new original", year: 2024, categories: [3, 7], aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-04-1500w.avif",
            small: "/img/work/tqc-work-04-512w.avif"
        }
    }, {
        title: "Jacquemus", description: "Bold in Every Detail", year: 2024, categories: [1, 8], aspectRatio: "1", mediaType: "video", mediaSrc: {
            largest: "/img/work/tqc-work-05-2000w.mp4",
            small: "/img/work/tqc-work-05-1500w.mp4"
        }
    }, {
        title: "Hermès", description: "Gifts for her", year: 2023, categories: [2, 5], aspectRatio: "4/3", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-06-1500w.avif",
            small: "/img/work/tqc-work-06-512w.avif"
        }
    }, {
        title: "Nike Swim", description: "In Every Element", year: 2023, categories: [3, 7], aspectRatio: "1", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-07-1500w.avif",
            small: "/img/work/tqc-work-07-512w.avif"
        }
    }, {
        title: "Casio", description: "Precision in Motion", year: 2023, categories: [1], aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-08-1500w.avif",
            small: "/img/work/tqc-work-08-512w.avif"
        }
    }, {
        title: "Louis Vuitton", description: "Concept Store '24", year: 2023, categories: [4, 7], aspectRatio: "4/3", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-09-1440w.avif",
            small: "/img/work/tqc-work-09-512w.avif",
        }
    }, {
        title: "Loro Piana", description: "Quiet Luxury", year: 2022, categories: [1, 7], aspectRatio: "16/9", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-10-1500w.avif",
            small: "/img/work/tqc-work-10-512w.avif"
        }
    }, {
        title: "Versace", description: "Bold by design", year: 2022, categories: [3, 7], aspectRatio: "1", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-11-1500w.avif",
            small: "/img/work/tqc-work-11-512w.avif"
        }
    }, {
        title: "Rimowa", description: "A new way to travel", year: 2022, categories: [4, 7], aspectRatio: "4/3", mediaType: "image", mediaSrc: {
            largest: "/img/work/tqc-work-12-1500w.avif",
            small: "/img/work/tqc-work-12-512w.avif"
        }
    }
]

export const LatestWorkData: WorkDataProps = WorkData.slice(0, 6);

export const ThreeMoreWorkData = (workId: number): WorkDataProps => {
    const WorkDataSubset: WorkDataProps = [];
    let totalItems = 0;

    do {
        workId = (workId < WorkData.length - 1) ? workId + 1 : 1;
        WorkDataSubset[workId] = WorkData[workId];
        totalItems++;
    } while (totalItems < 3);

    return WorkDataSubset;
}