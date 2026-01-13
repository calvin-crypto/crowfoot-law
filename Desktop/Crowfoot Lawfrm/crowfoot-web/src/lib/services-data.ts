import { Home, Building2, Gavel, Handshake, Landmark, Briefcase } from "lucide-react";

export interface FeeRow {
    label: string;
    buyer: string;
    seller: string;
}

export interface FeeTable {
    title: string;
    rows: FeeRow[];
    note?: string;
}

export interface ServiceData {
    title: string;
    description: string;
    icon: any;
    content: string[]; // Array of paragraphs or sections
    features: string[];
    feeTables?: FeeTable[];
}

export const servicesData: Record<string, ServiceData> = {
    "residential-closings": {
        title: "Residential Closings",
        description: "Seamless closing experiences for buyers, sellers, and agents in TN, GA, and SC.",
        icon: Home,
        content: [
            "Please see our standard fees below. Please note each parcel of real estate is unique, and exceptions can apply based on the specific details of the transaction, so please know we are available to answer any questions.",
            "The title insurance premiums for a loan policy or owner’s policy will be based on the loan amount or purchase price, as the case may be. And the rates for title insurance are determined by the Tennessee Department of Commerce and Insurance.",
            "As noted below, “mail-away” fees apply for any parties not attending the closing, and any mail-away closings must be approved in advance by us. In addition, please note supplemental charges apply for multiple parcels or parcels that require extensive corrective title work in order to close.",
            "Any additional documents that we prepare for closing, other than a standard deed to transfer title, will accrue additional charges. Additional documents necessary for closing begin at $150.00 per document. But that amount will increase based on the complexity of the matter. For example, if a party needs a standard Power of Attorney or Quit Claim deed for a transaction, the standard rate is $150.00 per document. More complex documents such as easements or boundary line agreements, for example, will be determined on a case-by-case basis.",
            "Please note any parties wishing to close via a Power of Attorney must be approved by us in advance. Any closings with a trust or 1031 exchange must also be approved in advance to ensure a smooth and seamless experience at the closing table. And additional fees may apply for such transactions.",
            "For all commercial closing questions, please contact our office, and we will be happy to assist you. If you have a commercial closing and need fees and rates, please call [404.433.7435](tel:4044337435), so we can give you an estimate."
        ],
        features: [
            "Tennessee: Seller typically pays for title insurance.",
            "Georgia: Buyer typically pays for title insurance.",
            "Mail-away closings available (must be approved).",
            "Drafting of complex documents (easements, boundary agreements)."
        ],
        feeTables: [
            {
                title: "Tennessee Residential Closing Fees",
                rows: [
                    { label: "E-recording Fee (per document)", buyer: "$10", seller: "$10" },
                    { label: "Deed Preparation and Execution", buyer: "", seller: "$150" },
                    { label: "Post-Closing (satisfy liens, cure title defects)", buyer: "", seller: "$275" },
                    { label: "Wire Fee (wire sales proceeds to seller)", buyer: "", seller: "$50" },
                    { label: "Closing Protection Letter", buyer: "$50", seller: "" },
                    { label: "Courier Fee (overnight lender package post-closing)", buyer: "$50", seller: "" },
                    { label: "Title Search (third-party cost passed to buyer)", buyer: "", seller: "$175 - $250" },
                    { label: "Title Insurance Premiums", buyer: "", seller: "*" },
                    { label: "Settlement Fee", buyer: "$800", seller: "" },
                ],
                note: "*In Tennessee, the seller typically pays for the title insurance premiums. Settlement Fee includes preparation and execution of closing documents, overseeing loan documents, coordination with lender/HOA, title search examination, preparation of title commitment and policy, ordering loan payoffs, and disbursement of funds."
            },
            {
                title: "Georgia Residential Closing Fees",
                rows: [
                    { label: "E-recording Fee (per document)", buyer: "$10", seller: "$10" },
                    { label: "Deed Preparation and Execution", buyer: "", seller: "$150" },
                    { label: "Post-Closing (satisfy liens, cure title defects)", buyer: "", seller: "$275" },
                    { label: "Wire Fee (wire sales proceeds to seller)", buyer: "", seller: "$50" },
                    { label: "Closing Protection Letter", buyer: "$50", seller: "" },
                    { label: "Courier Fee (overnight lender package post-closing)", buyer: "$50", seller: "" },
                    { label: "Title Search (third-party cost passed to buyer)", buyer: "$175 - $250", seller: "" },
                    { label: "Title Insurance Premiums", buyer: "*", seller: "" },
                    { label: "Settlement Fee", buyer: "$800", seller: "" },
                ],
                note: "*In Georgia, the buyer typically pays for the title insurance premiums. Settlement Fee includes preparation and execution of closing documents, overseeing loan documents, coordination with lender/HOA, title search examination, preparation of title commitment and policy, ordering loan payoffs, and disbursement of funds."
            }
        ]
    },
    "commercial-real-estate": {
        title: "Commercial Real Estate",
        description: "Expert guidance on acquisitions, leasing, and development.",
        icon: Building2,
        content: [
            "The firm performs commercial closings in Tennessee, Georgia, and South Carolina.",
            "We also negotiate and draft commercial leases, handle evictions, and resolve real estate disputes through mediation and litigation.",
            "For all commercial closing questions, please contact our office for an estimate. Each deal is unique, and we provide tailored quotes."
        ],
        features: [
            "Commercial Closings",
            "Lease Drafting & Negotiation",
            "Development Counsel",
            "Title Clearing"
        ]
    },
    "litigation": {
        title: "Litigation & Disputes",
        description: "Resolving boundary, title, and contract disputes effectively.",
        icon: Gavel,
        content: [
            "We mediate and litigate boundary disputes, easement disputes, property condition defect matters, and suits to quiet title.",
            "If you need counsel on any other type of real estate matter, please reach out to us using our contact form.",
            "With any real estate dispute, we will negotiate or litigate the best possible outcome."
        ],
        features: [
            "Boundary Disputes",
            "Quiet Title Actions",
            "Easement Disputes",
            "Commercial Lease Disputes",
            "Evictions"
        ]
    },
    "lender-services": {
        title: "Lender Services",
        description: "Title insurance and closing services for financial institutions.",
        icon: Landmark,
        content: [
            "The firm performs residential and commercial closings in Tennessee, Georgia, and South Carolina.",
            "We prioritize efficiency and accuracy to ensure smooth transactions for lenders and their borrowers."
        ],
        features: [
            "Title Insurance",
            "Refinancing",
            "Regulatory Compliance",
            "Multi-state Service"
        ]
    },
    "investor-services": {
        title: "Investor Services",
        description: "Scalable legal solutions for real estate portfolios.",
        icon: Handshake,
        content: [
            "The firm caters to real estate investors in both the residential and commercial space, including negotiations, mediation, and eviction.",
            "Whether you are building a rental portfolio or flipping properties, we provide the legal backbone for your investments."
        ],
        features: [
            "Portfolio Closings",
            "Entity Formation",
            "Lease Management Counsel",
            "Eviction Services"
        ]
    },
    "entrepreneur-services": {
        title: "Entrepreneur Services",
        description: "Entity formation and contract drafting for new businesses.",
        icon: Briefcase,
        content: [
            "We draft business formation documents, including partnership agreements and operating agreements, for entrepreneurs.",
            "We can also draft any contracts needed for your new business to ensure you are protected from the start."
        ],
        features: [
            "Business Formation (LLC, Corp)",
            "Operating Agreements",
            "Partnership Agreements",
            "Contract Drafting"
        ]
    }
};
