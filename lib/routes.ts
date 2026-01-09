// config/routes.ts - Complete route configuration

// Define route segments (change parent routes here)
const SEGMENTS = {
    // Main pages
    aboutUs: "about-us",
    blog: "blog",
    blogSingle: "blog-single",
    contact: "contact",
    privacyPolicy: "privacy-policy",
    termsAndConditions: "terms-conditions",

    // Store & Shop
    store: "store",
    cart: "cart",
    checkout: "checkout",
    shopDetails1: "shop-details-1",
    shopDetails2: "shop-details-2",

    // Career
    career: "career",
    careerDetails: "career-details",

    // Games
    game: "game",
    gameDetails: "game-details",

    // Pricing
    pricingPlan: "pricing-plan",

    // Portfolio
    portfolio: "portfolio",
    gamingPortfolio: "gaming",
    appsPortfolio: "apps",
    marketingCaseStudies: "marketing",
    qaCaseStudies: "qa",

    // Services
    services: "services",

    // Game Development Services
    gameDevelopment: "game-development-services",
    unityGame: "unity-game-development",
    unrealGame: "unreal-game-development",
    mobileGameDev: "mobile-game-development",
    iosGameDev: "ios-game-development",
    androidGameDev: "android-game-development",
    web3Game: "web3-game-development",
    nftGame: "nft-game-development",
    blockchainGame: "blockchain-game-development",
    html5WebGLGame: "html5-webgl-game-development",
    postLaunchMaintenance: "post-launch-maintenance",
    arVrServices: "ar-vr-services",

    // App Development Services
    appDevelopment: "app-development-services",
    // customMobileApp: "custom-mobile-app-development",
    // crossPlatformApp: "cross-platform-application-design",
    // enterpriseWebApps: "enterprise-grade-web-apps",
    // nativeIosAndroidApps: "native-ios-android-apps",
    // uiUxDesign: "ui-ux-design-prototyping",
    // appModernization: "app-modernization-refactoring",
    // mvpDevelopment: "mvp-development-rapid-prototyping",
    // apiBackend: "api-backend-development",
    // qaTestingApp: "quality-assurance-testing",

    // Game Art Services
    gameArt: "game-art-services",
    // characterDesign: "character-design",
    // uiUx: "ui-ux",
    // slotGameArt: "slot-game-art",
    // environmentDesign: "environment-design",
    // threeDGameArt: "3d-game-art",
    // gameAnimation: "game-animation",
    // aaaGameArt: "aaa-game-art",

    // Resource Augmentation
    resourceAugmentation: "resource-augmentation",
    // hireGameDevelopers: "hire-game-developers",
    // hire2DArtists: "hire-2d-artists",
    // hireUIUXDesigners: "hire-ui-ux-designers",
    // hire2DAnimator: "hire-2d-animator",
    // hireGameDesigners: "hire-game-designers",
    // hire3DArtists: "hire-3d-artists",
    // hire3DAnimator: "hire-3d-animator",

    // VR/XR Simulation
    // vrXrSimulation: "vr-xr-simulation",
    // vrSolutions: "vr-solutions",
    // simulations: "simulations",
    // learningEducation: "learning-education",
    // metaverseServices: "metaverse-services",
    // vrServices: "vr-services",

    // Marketing Solutions
    marketingSolutions: "marketing-solutions-games-apps",
    // appGameLaunchCampaigns: "app-game-launch-campaigns",
    // aso: "app-store-optimization",
    // userAcquisition: "user-acquisition-growth",
    // retentionEngagement: "retention-engagement-strategies",
    // paidMediaPerformance: "paid-media-performance-marketing",
    // inGameEventPromotions: "in-game-event-promotions",
    // creativeAssetProduction: "creative-asset-production",
    // analyticsGrowth: "analytics-growth-consulting",
    // playableAds: "playable-ads",

    // Quality Assurance Services
    qualityAssuranceServices: "quality-assurance-services",
    // functionalTesting: "functional-testing",
    // compatibilityTesting: "compatibility-cross-platform-testing",
    // performanceTesting: "performance-load-testing",
    // uxUsabilityTesting: "ux-usability-testing",
    // regressionTesting: "regression-testing",
    // securityTesting: "security-penetration-testing",
    // localizationTesting: "localization-internationalization-testing",
    // automatedTestFramework: "automated-test-framework-development",
    // complianceTesting: "compliance-testing",
    // betaTesting: "beta-testing-qa-management",

    // Legacy Routes (from existing tree structure)
    ourServices1: "our-services-1",
    ourServices2: "our-services-2",
    ourServices3: "our-services-3",
    ourServicesDetails: "our-services-details",
    ourServicesDetails2: "our-services-details-2",
    index2: "index-2",
    index3: "index-3",
} as const;

// Build routes dynamically
export const ROUTES = {
    // ==================== HOME ====================
    home: "/",
    index2: `/${SEGMENTS.index2}`,
    index3: `/${SEGMENTS.index3}`,

    // ==================== MAIN PAGES ====================
    aboutUs: `/${SEGMENTS.aboutUs}`,
    contact: `/${SEGMENTS.contact}`,
    privacyPolicy: `/${SEGMENTS.privacyPolicy}`,
    termsAndConditions: `/${SEGMENTS.termsAndConditions}`,

    // ==================== BLOG ====================
    blog: {
        index: `/${SEGMENTS.blog}`,
        single: `/${SEGMENTS.blogSingle}`,
        post: (slug: string) => `/${SEGMENTS.blog}/${slug}`,
    },

    // ==================== STORE & SHOP ====================
    store: `/${SEGMENTS.store}`,
    cart: `/${SEGMENTS.cart}`,
    checkout: `/${SEGMENTS.checkout}`,
    shop: {
        details1: `/${SEGMENTS.shopDetails1}`,
        details2: `/${SEGMENTS.shopDetails2}`,
    },

    // ==================== GAMES ====================
    game: {
        index: `/${SEGMENTS.game}`,
        details: `/${SEGMENTS.gameDetails}`,
    },

    // ==================== PRICING ====================
    pricingPlan: `/${SEGMENTS.pricingPlan}`,

    // ==================== CAREER ====================
    career: {
        index: `/${SEGMENTS.career}`,
        details: `/${SEGMENTS.careerDetails}`,
    },

    // ==================== PORTFOLIO ====================
    portfolio: {
        index: `/${SEGMENTS.portfolio}`,
        gaming: `/${SEGMENTS.portfolio}/${SEGMENTS.gamingPortfolio}`,
        apps: `/${SEGMENTS.portfolio}/${SEGMENTS.appsPortfolio}`,
        marketing: `/${SEGMENTS.portfolio}/${SEGMENTS.marketingCaseStudies}`,
        qa: `/${SEGMENTS.portfolio}/${SEGMENTS.qaCaseStudies}`,
        project: (slug: string) => `/${SEGMENTS.portfolio}/${slug}`,
    },

    // ==================== SERVICES ====================


    // ===== GAME DEVELOPMENT SERVICES =====
    gameDevelopment: {
        index: `/${SEGMENTS.gameDevelopment}`,
        unity: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.unityGame}`,
        unreal: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.unrealGame}`,
        mobile: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.mobileGameDev}`,
        ios: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.iosGameDev}`,
        android: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.androidGameDev}`,
        web3: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.web3Game}`,
        nft: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.nftGame}`,
        blockchain: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.blockchainGame}`,
        html5WebGL: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.html5WebGLGame}`,
        postLaunch: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.postLaunchMaintenance}`,
        arVr: `/${SEGMENTS.gameDevelopment}/${SEGMENTS.arVrServices}`,
    },
    appDevelopment: "app-development-services",
    gameArt: "game-art-services",
    resourceAugmentation: "resource-augmentation",
    marketingSolutions: "marketing-solutions-games-apps",
    qualityAssuranceServices: "quality-assurance-services",

    // ===== APP DEVELOPMENT SERVICES =====
    // appDevelopment: {
    //     index: `/${SEGMENTS.appDevelopment}`,
    //
    // },
    //
    // // ===== GAME ART SERVICES =====
    // gameArt: {
    //     index: `/${SEGMENTS.gameArt}`,
    //
    // },
    //
    // // ===== RESOURCE AUGMENTATION =====
    // resourceAugmentation: {
    //     index: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}`,
    //     gameDevelopers: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}/${SEGMENTS.hireGameDevelopers}`,
    //     artists2D: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}/${SEGMENTS.hire2DArtists}`,
    //     uiUxDesigners: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}/${SEGMENTS.hireUIUXDesigners}`,
    //     animator2D: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}/${SEGMENTS.hire2DAnimator}`,
    //     gameDesigners: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}/${SEGMENTS.hireGameDesigners}`,
    //     artists3D: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}/${SEGMENTS.hire3DArtists}`,
    //     animator3D: `/${SEGMENTS.services}/${SEGMENTS.resourceAugmentation}/${SEGMENTS.hire3DAnimator}`,
    // },
    //
    // // ===== VR/XR SIMULATION =====
    // vrXrSimulation: {
    //     index: `/${SEGMENTS.services}/${SEGMENTS.vrXrSimulation}`,
    //     vrSolutions: `/${SEGMENTS.services}/${SEGMENTS.vrXrSimulation}/${SEGMENTS.vrSolutions}`,
    //     simulations: `/${SEGMENTS.services}/${SEGMENTS.vrXrSimulation}/${SEGMENTS.simulations}`,
    //     learningEducation: `/${SEGMENTS.services}/${SEGMENTS.vrXrSimulation}/${SEGMENTS.learningEducation}`,
    //     metaverse: `/${SEGMENTS.services}/${SEGMENTS.vrXrSimulation}/${SEGMENTS.metaverseServices}`,
    //     vrServices: `/${SEGMENTS.services}/${SEGMENTS.vrXrSimulation}/${SEGMENTS.vrServices}`,
    // },
    //
    // // ===== MARKETING SOLUTIONS =====
    // marketingSolutions: {
    //     index: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}`,
    //     launchCampaigns: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.appGameLaunchCampaigns}`,
    //     aso: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.aso}`,
    //     userAcquisition: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.userAcquisition}`,
    //     retention: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.retentionEngagement}`,
    //     paidMedia: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.paidMediaPerformance}`,
    //     inGameEvents: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.inGameEventPromotions}`,
    //     creativeAssets: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.creativeAssetProduction}`,
    //     analytics: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.analyticsGrowth}`,
    //     playableAds: `/${SEGMENTS.services}/${SEGMENTS.marketingSolutions}/${SEGMENTS.playableAds}`,
    // },
    //
    // // ===== QUALITY ASSURANCE SERVICES =====
    // qaServices: {
    //     index: `/${SEGMENTS.services}/${SEGMENTS.qaServices}`,
    //     functional: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.functionalTesting}`,
    //     compatibility: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.compatibilityTesting}`,
    //     performance: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.performanceTesting}`,
    //     uxUsability: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.uxUsabilityTesting}`,
    //     regression: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.regressionTesting}`,
    //     security: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.securityTesting}`,
    //     localization: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.localizationTesting}`,
    //     automated: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.automatedTestFramework}`,
    //     compliance: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.complianceTesting}`,
    //     beta: `/${SEGMENTS.services}/${SEGMENTS.qaServices}/${SEGMENTS.betaTesting}`,
    // },
    //
    // // ===== LEGACY SERVICE ROUTES =====
    // ourServices: {
    //     one: `/${SEGMENTS.ourServices1}`,
    //     two: `/${SEGMENTS.ourServices2}`,
    //     three: `/${SEGMENTS.ourServices3}`,
    //     details: `/${SEGMENTS.ourServicesDetails}`,
    //     details2: `/${SEGMENTS.ourServicesDetails2}`,
    // },

}

// ==================== USAGE EXAMPLES ====================
//
// 1. Simple static route:
// <Link href={ROUTES.aboutUs}>About Us</Link>
// <Link href={ROUTES.services.gameDevelopment.unity}>Unity Development</Link>
//
// 2. Dynamic routes (with function):
// <Link href={ROUTES.blog.post('my-awesome-post')}>Read Post</Link>
// <Link href={ROUTES.portfolio.project('project-abc')}>View Project</Link>
//
// 3. In router.push:
// router.push(ROUTES.services.appDevelopment.customMobile)
//
// 4. Navigation array:
// const navItems = [
//   { name: 'Home', href: ROUTES.home },
//   { name: 'About', href: ROUTES.aboutUs },
//   { name: 'Services', href: ROUTES.services.index },
//   { name: 'Game Dev', href: ROUTES.services.gameDevelopment.index },
//   { name: 'Unity', href: ROUTES.services.gameDevelopment.unity }
// ];
//
// 5. Nested services:
// {
//   label: 'Game Development',
//   href: ROUTES.services.gameDevelopment.index,
//   subItems: [
//     { label: 'Unity', href: ROUTES.services.gameDevelopment.unity },
//     { label: 'Unreal', href: ROUTES.services.gameDevelopment.unreal }
//   ]
// }



