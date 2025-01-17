import { ShopSchool,
    booksImage,
    gamingImage,
    giftcard,
    newyear,
    personalCare,
    todaysDealImage,
    toysImage } from "../assets/featureImages";

import {TodaysDeal,
    baby,
    beauty,
    books,
    electronics,
    gaming,
    homeImprovement,
    homeKitchen,
    jewellery,
    luggage,
    office,
    outdoor,
    pets,
    sports,
    toys } from "../assets/shopCategories";

import {TabletImage} from "../assets/todaysDealImages";

import { account, 
    contactUs,
    giftCrad,
    order,
    payment,
    phishing,
    returnImage } from "../assets/infoImages";

import { 
    featuredCard1,
    featuredCard2,
    featuredCard3,
    featuredCard4,
    featuredCard5 } from "../assets/giftcardImages";

export const FeatureCardProps = [
    {
        title: "Shop Back School",
        image: ShopSchool,
        linkText: "Discover More"
    },
    {
        title: "Shop Books",
        image: booksImage,
        linkText: "Discover More"
    },
    {
        title: "Shop Video Games",
        image: gamingImage,
        linkText: "Discover More"
    },
    {
        title: "Shop eGift Cards",
        image: giftcard,
        linkText: "Discover More"
    },
    {
        title: "Newyear new You",
        image: newyear,
        linkText: "Discover More"
    },
    {
        title: "Shop Personal Care",
        image: personalCare,
        linkText: "Discover More"
    },
    {
        title: "Shop Todays Deal",
        image: todaysDealImage,
        linkText: "Discover More"
    },
    {
        title: "Toys under R100",
        image: toysImage,
        linkText: "Discover More"
    },
]

export const TodaysDealProps = [
    {
        image: TabletImage,
        offPercent: "25",
        offAmount: "22,400",
        actualAmount: "26,086.09",
        title: "Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger "
    },
    {
        image: TabletImage,
        offPercent: "25",
        offAmount: "22,400",
        actualAmount: "26,086.09",
        title: "Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger "
    },
    {
        image: TabletImage,
        offPercent: "25",
        offAmount: "22,400",
        actualAmount: "26,086.09",
        title: "Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger "
    },
    {
        image: TabletImage,
        offPercent: "25",
        offAmount: "22,400",
        actualAmount: "26,086.09",
        title: "Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger "
    },
    {
        image: TabletImage,
        offPercent: "25",
        offAmount: "22,400",
        actualAmount: "26,086.09",
        title: "Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger "
    },
    {
        image: TabletImage,
        offPercent: "25",
        offAmount: "22,400",
        actualAmount: "26,086.09",
        title: "Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger "
    },
    {
        image: TabletImage,
        offPercent: "25",
        offAmount: "22,400",
        actualAmount: "26,086.09",
        title: "Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger "
    },
]

export const Categories = [
    {
        image: TodaysDeal
    },
    {
        image: books
    },
    {
        image: electronics
    },
    {
        image: jewellery
    },
    {
        image: toys
    },
    {
        image: baby
    },
    {
        image: beauty
    },
    {
        image: sports
    },
    {
        image: luggage
    },
    {
        image: office
    },
    {
        image: outdoor
    },
    {
        image: homeKitchen
    },
    {
        image: homeImprovement
    },
    {
        image: pets
    },
    {
        image: gaming
    },
]


export const infoCard = [
    {
        image: order,
        title: "Your orders",
        service1: "Track packages",
        service2: "Edit or cancel orders"
    },
    {
        image: returnImage,
        title: "Returns and refunds",
        service1: "Return or exchange items",
        service2: "Print return postage labels"
    },
    {
        image: payment,
        title: "Payments and gift cards",
        service1: "Add or edit payment methods",
        service2: ""
    },
    {
        image: account,
        title: "Your Accunt",
        service1: "Manage yur account prefrences",
        service2: ""
    },
    {
        image: phishing,
        title: "Safe online shopping",
        service1: "Learn how to protect your account",
        service2: ""
    },
    {
        image: giftCrad,
        title: "Gift cards and top-up",
        service1: "View balance or redeem a card",
        service2: ""
    },
    {
        image: contactUs,
        title: "Contact us",
        service1: "Contact our customer service via phone or chat",
        service2: ""
    }
]

export const customerHelpTopics = [
    {
        title: 'Recommended Topics',
        info: `
            Print an Invoice or Order Summary
            Domestic Delivery
            Identifying Whether an E-Mail is from Amazon
            Payment Methods
        `,
    },
    {
        title: 'Dispatch & Delivery',
        info: `            
            Delivery Guarantees
            Domestic Delivery
            General Delivery Information
            Track your Parcel
            › More in Dispatch & Delivery
        `,
    },
    {
        title: 'Managing Your Account',
        info: `
            Add & Manage Payment Methods
            Add & Manage Addresses
            Change Your Order Information
            Cancel Items and Orders
            › More in Your Accoun
        `,
    },
    {
        title: 'Payment, Invoice & VAT',
        info: ` 
            About VAT (Value Added Tax) on Sales by Amazon
            Accepted Payment Methods
            About Invoices
            Print an Invoice or Order Summary
            › More in Payment, Invoices & VAT
        `,
    },
    {
        title: 'Returns & Refunds',
        info: `                     
            Return Items You Ordered
            Our Returns Policy
            Refunds
            › More in Returns and Refunds
        `,
    },
    {
        title: 'Ordering',
        info: `                
            Buy Now Ordering
            Ordering from Third-Party Sellers
            › More in Ordering
        `,
    },
    {
        title: 'Digital Serice & Content',
        info: `                
            Prime Video
        `,
    },
    {
        title: 'Privacy',
        info: `                
            How does Amazon use my data?
            What data does Amazon collect and use?
            How does Amazon keep my data secure?
            Amazon Device Privacy Settings
            How do I view and manage my data on Amazon?
            How Do I Request My Data?
        `,
    },
    {
        title: 'Other Topics & Help pages',
        info: `             
            Gifts, Gift Certificates and Lists
            Security, Privacy & Legal Policies
            Website Features
        `,
    },
    {
        title: 'Need more Help?',
        info: `        
            Track Parcels or View Orders
            Manage Your Payment Methods
            Return or Replace Items
            Contact Us
        `,
    }
];

export const featuredGiftCards = [
    {
        image: featuredCard1,
    },
    {
        image: featuredCard2,
    },
    {
        image: featuredCard3,
    },
    {
        image: featuredCard4,
    },
    {
        image: featuredCard5,
    },
]