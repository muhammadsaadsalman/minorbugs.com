import {ROUTES} from "@/lib/routes";

export const featuredGames = [
    {
        id: 1,
        title: "Dragon Robot Car",
        image: '/images/main/games/dragon-robot-car.webp',
        // appStoreLink: "https://www.apple.com/app-store/", // Replace with the actual App Store link if available
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.appstrend.dragon.robot.formula.car&hl=en&gl=PK",
    },
    {
        id: 2,
        title: "Cyber Rope Hero",
        image: '/images/main/games/cyber-rope-hero.webp',
        // appStoreLink: "https://www.apple.com/app-store/", // Replace with the actual App Store link if available
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.appstrend.robot.fps.shooting.games&hl=en&gl=PK",
    },
    {
        id: 3,
        title: "Wilder Shooter 3D",
        image: '/images/main/games/wilder-shooter-3d.webp',
        // appStoreLink: "https://www.apple.com/app-store/", // Replace with the actual App Store link if available
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.appstrend.robot.superhero.games&hl=en&gl=PK",
    },
    {
        id: 4,
        title: "Police Bus Simulator",
        image: '/images/main/games/police-bus-simulator.webp',
        appStoreLink: "https://www.apple.com/app-store/", // Replace with the actual App Store link if available
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.appstrend.rescue.bus.simulator&hl=en&gl=PK",
    }
];


export interface SubMenuItem {
    label: string;
    href: string;
    subItems?: SubMenuItem[];
}

export interface NavItemProps {
    label: string;
    href?: string;
    subItems?: SubMenuItem[];
}

/**
 * Main navigation configuration
 * Edit this file to update your site's navigation structure
 */
export const NavItems: NavItemProps[] = [
    {
        label: "Home",
        href: ROUTES.home,
    },
    {
        label: "Services",
        subItems: [
            {
                label: "Game Development Services",
                href: ROUTES.gameDevelopment.index,
                subItems: [
                    { label: "Unity Game Development", href: ROUTES.gameDevelopment.unity },
                    { label: "Unreal Game Development", href: ROUTES.gameDevelopment.unreal },
                    { label: "Mobile Game Development", href: ROUTES.gameDevelopment.mobile },
                    { label: "iOS Game Development", href: ROUTES.gameDevelopment.ios },
                    { label: "Android Game Development", href: ROUTES.gameDevelopment.android },
                    { label: "Web3 Game Development", href: ROUTES.gameDevelopment.web3 },
                    { label: "NFT Game Development", href: ROUTES.gameDevelopment.nft },
                    { label: "Blockchain Game Development", href: ROUTES.gameDevelopment.blockchain },
                    { label: "HTML5/WebGL Game Development", href: ROUTES.gameDevelopment.html5WebGL },
                    { label: "Post-Launch & Maintenance", href: ROUTES.gameDevelopment.postLaunch },
                    { label: "AR/VR Services", href: ROUTES.gameDevelopment.arVr },
                ],
            },
            // Uncomment these as you add the routes to routes.ts
            { label: "App Development Services", href: ROUTES.appDevelopment},
            { label: "Game Art Services", href: ROUTES.gameArt },
            // { label: "VR/XR Simulation", href: ROUTES.vrXrSimulation },
            { label: "Marketing Solutions for Games & Apps", href: ROUTES.marketingSolutions },
            { label: "Quality Assurance Services", href: ROUTES.qualityAssuranceServices },
        ],
    },
    {
        label: "Portfolio",
        subItems: [
            { label: "Gaming Portfolio", href: ROUTES.portfolio.gaming },
            { label: "Apps Portfolio", href: ROUTES.portfolio.apps },
            { label: "Marketing Case Studies", href: ROUTES.portfolio.marketing },
            { label: "QA Case Studies", href: ROUTES.portfolio.qa },
        ],
    },
    {
        label: "Store",
        href: ROUTES.store,
    },
    {
        label: "Blog",
        href: ROUTES.blog.index,
    },
    {
        label: "About Us",
        href: ROUTES.aboutUs,
    },
    // {
    //     label: "Contact",
    //     href: ROUTES.contact,
    // },
];

export const testimonials = [
    {
        img: "/images/home/testimonial-1.webp",
        name: "Kristin Watson",
        rating: 5,
        review: "The graphics in their games are always top-notch and truly bring the world to life.",
        location: "United Kingdom",
        date: "Mar 22, 2023",
    },
    {
        img:"/images/home/testimonial-2.webp",
        name: "Jordyn Septimus",
        rating: 3,
        review: "The graphics in their games are always top-notch and truly bring the world to life.",
        location: "United Kingdom",
        date: "May 12, 2023",
    },
    {
        img: "/images/home/testimonial-3.webp",
        name: "Bessie Cooper",
        rating: 5,
        review: "The graphics in their games are always top-notch and truly bring the world to life.",
        location: "United Kingdom",
        date: "Nov 25, 2023",
    },
    {
        img: "/images/home/testimonial-4.webp",
        name: "Esther Howard",
        rating: 4,
        review: "The graphics in their games are always top-notch and truly bring the world to life.",
        location: "United Kingdom",
        date: "Dec 17, 2023",
    },
];


