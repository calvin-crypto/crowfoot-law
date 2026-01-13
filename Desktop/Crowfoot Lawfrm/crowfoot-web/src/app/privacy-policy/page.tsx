export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p>
                    Attorneys, like all providers of personal financial services, are now required by the Gramm-Leach-Bliley Act to inform their clients of their policies regarding privacy of client information. Attorneys have been and continue to be bound by professional standards of confidentiality that are even more stringent than those required by this new law. Therefore, we have always protected your right to privacy.
                </p>
                <h3>Types of Nonpublic Personal Information We Collect</h3>
                <p>We collect nonpublic personal information about you that is either provided to us by you or obtained by us with your authorization.</p>
                <h3>Parties to Whom We Disclose Information</h3>
                <p>
                    For current and former clients, we do not disclose any nonpublic personal information obtained in the course of our practice except as required or permitted by law. Permitted disclosures include, for instance, providing information to our employees and, in limited situations, to unrelated third parties who need to know that information to assist us in providing services to you. In all such situations, we stress the confidential nature of this information to those being given access.
                </p>
                <h3>Protecting the Confidentiality and Security of Current and Former Client’s Information</h3>
                <p>
                    We retain records relating to professional services that we provide so that we are better able to assist you with your professional needs and, in some cases, to comply with professional guidelines. In order to guard your nonpublic personal information, we maintain physical, electronic, and procedural safeguards that comply with our professional standards.
                </p>
            </div>
        </div>
    );
}
