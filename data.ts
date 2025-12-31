
// Brand Information
export const brandDetails = {
    name: "PayBD",
    description: "The most trusted digital wallet in Bangladesh. Send, receive, and manage your money with complete security and ease.",
    license: "Licensed by Bangladesh Bank.",
    copyrightYear: 2025,
};

// Contact Information
export const contactInfo = {
    officeAddress: "Rangpur, Bangladesh",
    phone: "+88013*******",
    phoneLink: "tel:+88013*******",
    email: "akashdmq@gmail.com",
    whatsapp: "+88013*******",
    whatsappLink: "https://wa.me/88013*******",
    socialLinks: [
        { icon: "fab fa-facebook-f", href: "https://www.facebook.com/akashdnetbd", label: "Facebook" },
        { icon: "fab fa-twitter", href: "https://twitter.com/akashdnet", label: "Twitter" },
        { icon: "fab fa-instagram", href: "https://www.instagram.com/akashdnet", label: "Instagram" },
        { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/akashdnet", label: "LinkedIn" },
    ],
};

// Social Media Links
export const socialLinks = [
    { icon: "fab fa-facebook-f", href: "https://www.facebook.com/akashdnetbd", label: "Facebook" },
    { icon: "fab fa-twitter", href: "https://twitter.com/akashdnet", label: "Twitter" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/akashdnet", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/akashdnet", label: "LinkedIn" },
];

// Navigation Links
export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

// Hero Section Data
export interface HeroSlide {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    gradient: string;
    desc: string;
    primaryBtn: {
        label: string;
        href: string;
    };
    secondaryBtn?: {
        label: string;
        href: string;
    };
    stats?: {
        label: string;
        value: string;
    }[];
    mockup?: boolean;
    image?: string;
    imageLabel?: string;
    imageSub?: string;
    operators?: {
        name: string;
        logo: string;
    }[];
}

export const heroSlides: HeroSlide[] = [
    {
        badge: "🚀 #1 Digital Wallet in Bangladesh",
        titlePrefix: "Your Money, ",
        titleHighlight: "Your Control",
        gradient: "from-primary-300 to-secondary-300",
        desc: "Send money, pay bills, and manage your finances with the most trusted digital wallet. Fast, secure, and always available.",
        primaryBtn: { label: "Start Free", href: "register" },
        secondaryBtn: { label: "Watch Demo", href: "#demo" },
        stats: [
            { label: "Active Users", value: "2M+" },
            { label: "Transactions", value: "$500M+" },
            { label: "App Rating", value: "4.9★" },
        ],
        mockup: true,
    },
    // {
    //     badge: "💸 Instant Money Transfer",
    //     titlePrefix: "Send Money ",
    //     titleHighlight: "In Seconds",
    //     gradient: "from-secondary-300 to-primary-300",
    //     desc: "Transfer money to anyone, anywhere in Bangladesh. Zero fees on transfers and instant delivery to any bank or wallet.",
    //     primaryBtn: { label: "Send Money Now", href: "#send" },
    //     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500",
    //     imageLabel: "Transfer Complete!",
    //     imageSub: "$1,500 sent successfully",
    // },
    {
        badge: "📱 Mobile Top-Up Made Easy",
        titlePrefix: "Recharge Any ",
        titleHighlight: "Number Instantly",
        gradient: "from-primary-300 to-purple-300",
        desc: "Top up any mobile number across all operators. Get exclusive cashback offers and never run out of balance again.",
        primaryBtn: { label: "Recharge Now", href: "#topup" },
        operators: [
            { name: "Grameenphone", logo: "/sim/gp.png" },
            { name: "Banglalink", logo: "/sim/bl.png" },
            { name: "Robi", logo: "/sim/robi.png" },
            { name: "Teletalk", logo: "/sim/tlk.png" },
        ],
    },
];

// Partners
export const partners = [
    { name: "bKash", logo: "/dw_logo/bkash.svg" },
    { name: "Nagad", logo: "/dw_logo/nagad.png" },
    { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" },
    { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" },
    { name: "DBBL", logo: "/dw_logo/dbb.png" },
    // { name: "BRAC Bank", logo: "/dw_logo/brac.svg" },
];

// Services List
export const servicesList = [
    {
        icon: "fas fa-paper-plane",
        color: "primary",
        title: "Send Money",
        description: "Transfer money instantly to any wallet or bank account across Bangladesh with zero fees.",
    },
    {
        icon: "fas fa-download",
        color: "green",
        title: "Cash In",
        description: "Add money to your wallet from any bank, card, or agent point. Multiple options available.",
    },
    {
        icon: "fas fa-upload",
        color: "orange",
        title: "Cash Out",
        description: "Withdraw money from your wallet to any ATM, bank, or agent with minimal charges.",
    },
    {
        icon: "fas fa-mobile-alt",
        color: "purple",
        title: "Mobile Top Up",
        description: "Recharge any mobile number instantly. All operators supported with cashback offers.",
    },
    {
        icon: "fas fa-file-invoice-dollar",
        color: "blue",
        title: "Pay Bills",
        description: "(Coming Soon)Pay electricity, gas, water, internet, and more. Set up auto-pay for convenience.",
    },
    {
        icon: "fas fa-qrcode",
        color: "pink",
        title: "QR Payment",
        description: "(Coming Soon)Scan any QR code to make instant payments at shops, restaurants, and more.",
    },
    {
        icon: "fas fa-exchange-alt",
        color: "yellow",
        title: "Bank Transfer",
        description: "(Coming Soon)Transfer money to any bank account in Bangladesh instantly and securely.",
    },
    {
        icon: "fas fa-piggy-bank",
        color: "teal",
        title: "Savings",
        description: "(Coming Soon)Start saving money with our high-interest digital savings account feature.",
    },
];

export const categorizedServices = {
    moneyTransfer: [
        { icon: "fas fa-paper-plane", title: "Send Money", desc: "Instant transfers globally", color: "primary", link: "/dashboard/send-money" },
        { icon: "fas fa-download", title: "Cash In", desc: "Add money to wallet", color: "green", link: "/dashboard/cash-in" },
        { icon: "fas fa-upload", title: "Cash Out", desc: "Withdraw to agent", color: "orange", link: "/dashboard/cash-out" },
    ],
    billRecharge: [
        { icon: "fas fa-mobile-alt", title: "Mobile Recharge", desc: "Top up any number", color: "purple", link: "/dashboard/top-up" },
        { icon: "fas fa-file-invoice", title: "Pay Bills", desc: "(coming soon)", color: "blue", link: "#" },
        { icon: "fas fa-qrcode", title: "QR Payment", desc: "(coming soon)", color: "pink", link: "#" },
    ]
};

// How It Works Steps
export const steps = [
    {
        step: "1",
        title: "Create Account",
        description: "Download our app and sign up with your mobile number. Verify your identity with NID for full access.",
        detail1: { icon: "fas fa-clock text-primary-500", text: "2 minutes" },
        detail2: { icon: "fas fa-check-circle text-green-500", text: "Free" },
    },
    {
        step: "2",
        title: "Add Funds",
        description: "Cash in money from bank, card, or agent point. Multiple secure options available for your convenience.",
        detail1: { icon: "fas fa-bolt text-yellow-500", text: "Instant" },
        detail2: { icon: "fas fa-shield-alt text-primary-500", text: "Secure" },
    },
    {
        step: "3",
        title: "Start Using",
        description: "Send money, pay bills, recharge mobile, and enjoy all our services with special cashback offers.",
        detail1: { icon: "fas fa-gift text-pink-500", text: "Cashback" },
        detail2: { icon: "fas fa-infinity text-purple-500", text: "Unlimited" },
    },
];

// Features
export const featuresList = [
    {
        icon: "fas fa-bolt",
        gradient: "from-yellow-400 to-orange-500",
        title: "Lightning Fast",
        description: "All transactions are processed instantly. No waiting, no delays. Send and receive money in real-time.",
    },
    {
        icon: "fas fa-shield-alt",
        gradient: "from-green-400 to-emerald-500",
        title: "Bank-Level Security",
        description: "256-bit encryption, biometric login, and 2FA protection keep your money and data completely safe.",
    },
    {
        icon: "fas fa-percentage",
        gradient: "from-pink-400 to-rose-500",
        title: "Low Fees",
        description: "Enjoy the lowest transaction fees in the market. Zero fees on most transfers and payments.",
    },
    {
        icon: "fas fa-headset",
        gradient: "from-blue-400 to-cyan-500",
        title: "24/7 Support",
        description: "Our dedicated support team is available round the clock to help you with any issues or queries.",
    },
    {
        icon: "fas fa-gift",
        gradient: "from-purple-400 to-indigo-500",
        title: "Rewards & Cashback",
        description: "Earn cashback on every transaction. Collect points and redeem exciting rewards and offers.",
    },
    {
        icon: "fas fa-history",
        gradient: "from-teal-400 to-green-500",
        title: "Transaction History",
        description: "Track all your transactions with detailed history. Download statements anytime for your records.",
    },
];

// Stats
export const statsData = [
    {
        icon: "fas fa-users",
        color: "primary",
        value: 2500000,
        suffix: "",
        prefix: "",
        label: "Active Users",
        gradient: "bg-linear-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent",
    },
    {
        icon: "fas fa-exchange-alt",
        color: "green",
        value: 500,
        suffix: "M+",
        prefix: "$",
        label: "Monthly Transactions",
        gradient: "text-green-600",
    },
    {
        icon: "fas fa-store",
        color: "purple",
        value: 50000,
        suffix: "",
        prefix: "",
        label: "Partner Merchants",
        gradient: "text-purple-600",
    },
    {
        icon: "fas fa-map-marker-alt",
        color: "orange",
        value: 64,
        suffix: "",
        prefix: "",
        label: "Districts Covered",
        gradient: "text-orange-600",
    },
];

// Offers
export const offersList = [
    {
        gradient: "from-primary-500 to-secondary-600",
        badge: "Limited Time",
        discount: "20% OFF",
        title: "First Money Transfer",
        description: "Get 20% cashback on your first money transfer, up to ৳500.",
        detail: "Use code: FIRST20",
        btnText: "Claim Now",
        btnColor: "text-primary-600",
    },
    {
        gradient: "from-green-500 to-emerald-600",
        badge: "Hot Deal",
        discount: "5% BACK",
        title: "Mobile Recharge",
        description: "Get 5% instant cashback on all mobile recharges above ৳100.",
        detail: "Auto Applied",
        btnText: "Recharge Now",
        btnColor: "text-green-600",
    },
    {
        gradient: "from-orange-500 to-red-500",
        badge: "Weekend Special",
        discount: "৳50 OFF",
        title: "Bill Payments",
        description: "Get ৳50 off on utility bill payments above ৳1000 every weekend.",
        detail: "Fri-Sun Only",
        btnText: "Pay Bills",
        btnColor: "text-orange-600",
    },
];

// App Download
export const appDownloadData = {
    title: "Download Our App Today",
    description: "Get the PayBD app on your phone and start managing your finances on the go. Available on iOS and Android.",
    downloadCount: "2M+ Downloads",
    rating: "4.9",
    ratingLabel: "Rating",
    userImages: [
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
    ],
    screenshots: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=600&fit=crop"
    ]
};

// FAQ
export const faqsList = [
    {
        question: "How do I create an account?",
        answer: "Download the PayBD app from the App Store or Google Play. Sign up using your mobile number and complete NID verification to unlock all features.",
    },
    {
        question: "Is PayBD safe to use?",
        answer: "Yes! PayBD uses 256-bit bank-level encryption, biometric authentication, and two-factor authentication to ensure your money and data are always secure.",
    },
    {
        question: "Are there any transaction fees?",
        answer: "Most basic transactions like sending money or mobile recharge are free. Cash-out and premium services may have minimal fees, clearly displayed before confirmation.",
    },
    {
        question: "Can I use PayBD outside Bangladesh?",
        answer: "Currently, PayBD is only available for users with Bangladeshi mobile numbers and NID. International transfers to Bangladesh are supported for recipients.",
    },
];

// Testimonials
export const testimonialsList = [
    {
        rating: 5,
        text: "PayBD has completely changed how I manage my money. Sending money to my family in the village is now so easy and instant. The cashback offers are amazing too!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Rafiq Ahmed",
        role: "Business Owner, Dhaka",
    },
    {
        rating: 5,
        text: "As a freelancer, I receive payments from international clients. PayBD makes it super easy to receive and manage my earnings. The security features give me peace of mind.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Fatima Khatun",
        role: "Freelancer, Chittagong",
    },
    {
        rating: 4.5,
        text: "I pay all my bills through PayBD - electricity, gas, internet, everything! The auto-pay feature is a lifesaver. Never missed a payment since I started using it.",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        name: "Karim Uddin",
        role: "Teacher, Sylhet",
    },
    {
        rating: 5,
        text: "My small shop now accepts PayBD payments through QR code. My customers love the convenience and I get the money instantly. It has really boosted my business!",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        name: "Jabbar Mia",
        role: "Shop Owner, Rajshahi",
    },
    {
        rating: 5,
        text: "The mobile recharge feature with cashback is unbeatable! I save so much money every month just by recharging through PayBD. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        name: "Rima Sultana",
        role: "Student, Khulna",
    },
    {
        rating: 5,
        text: "Customer support is exceptional! I had an issue with a transaction and they resolved it within minutes. The app is also very user-friendly for someone like me.",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        name: "Abdul Hamid",
        role: "Retired, Barisal",
    },
];

// Pricing Plans
export const pricingPlans = [
    {
        name: "Basic",
        desc: "For personal use",
        price: "৳0",
        period: "/month",
        features: [
            { icon: "fas fa-check text-green-500", text: "Send up to ৳25,000/day" },
            { icon: "fas fa-check text-green-500", text: "Free mobile recharge" },
            { icon: "fas fa-check text-green-500", text: "Bill payments" },
            { icon: "fas fa-check text-green-500", text: "Basic support" },
            { icon: "fas fa-times text-gray-400", text: "Priority cashback", opacity: "opacity-50" },
        ],
        btnText: "Get Started Free",
        highlight: false,
    },
    {
        name: "Pro",
        desc: "For power users",
        price: "৳99",
        period: "/month",
        features: [
            { icon: "fas fa-check text-yellow-400", text: "Send up to ৳100,000/day", textColor: "text-white" },
            { icon: "fas fa-check text-yellow-400", text: "10% extra cashback", textColor: "text-white" },
            { icon: "fas fa-check text-yellow-400", text: "Zero cash out fee", textColor: "text-white" },
            { icon: "fas fa-check text-yellow-400", text: "Priority support", textColor: "text-white" },
            { icon: "fas fa-check text-yellow-400", text: "Exclusive offers", textColor: "text-white" },
        ],
        btnText: "Upgrade to Pro",
        highlight: true,
        badge: "Most Popular",
    },
    {
        name: "Business",
        desc: "For merchants",
        price: "৳499",
        period: "/month",
        features: [
            { icon: "fas fa-check text-green-500", text: "Unlimited transactions" },
            { icon: "fas fa-check text-green-500", text: "QR code payments" },
            { icon: "fas fa-check text-green-500", text: "Business analytics" },
            { icon: "fas fa-check text-green-500", text: "API integration" },
            { icon: "fas fa-check text-green-500", text: "Dedicated manager" },
        ],
        btnText: "Contact Sales",
        highlight: false,
    },
];

export const footerSections = {
    legal: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/refund-policy", label: "Refund Policy" },
        { href: "/compliance", label: "Compliance" },
    ],
    support: [
        { href: "/about", label: "About" },
        { href: "/#faq", label: "FAQ" },
        { href: "/contact", label: "Contact Us" },
    ]
}
