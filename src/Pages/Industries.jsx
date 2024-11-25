import React from 'react';
import Header from '../Components/Header';
import IndustriesSection from '../Components/IndustriesSection';



const industriesData = [
    {
        smallText: 'How We Can Help',
        mainImage: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg',
        sectionTitle: 'BANKING',
        sectionTitle2: 'COMMERCIAL BANKS',
        sectionContentTitle: 'Public and Private Commercial Banks',
        sectionContentPara: 'The banking landscape is undergoing rapid transformation with evolving regulations, digitization, and changing customer expectations. Banks need agile strategies to stay competitive and ensure compliance while enhancing customer experience.',
        carouselData: [
            { image: 'https://via.placeholder.com/300', content: 'Strategic Planning and Market Entry Advisory.' },
            { image: 'https://via.placeholder.com/300', content: 'Risk Management and Regulatory Compliance.' },
            { image: 'https://via.placeholder.com/300', content: 'Operational Efficiency and Digital Transformation Support.' },
            { image: 'https://via.placeholder.com/300', content: 'M&A Due Diligence and Integration.' },
            { image: 'https://via.placeholder.com/300', content: 'Business Continuity and Disaster Recovery Planning.' },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: 'https://images.pexels.com/photos/4021810/pexels-photo-4021810.jpeg',
        sectionTitle: 'FINANCIAL',
        sectionTitle2: 'FINTECH',
        sectionContentTitle: 'FINTECH, Asset Management Firms, Funds, AIFs',
        sectionContentPara: 'The financial services sector is at the forefront of innovation, with emerging technologies reshaping how businesses operate. Companies need to balance innovation with regulatory compliance while driving growth and customer trust.',
        carouselData: [
            { image: 'https://via.placeholder.com/300', content: 'Digital transformation strategies for FINTECH and asset management.' },
            { image: 'https://via.placeholder.com/300', content: 'Regulatory compliance (AML, KYC, FATCA).' },
            { image: 'https://via.placeholder.com/300', content: 'Risk management for investment funds and AIFs.' },
            { image: 'https://via.placeholder.com/300', content: 'Support for product development and market launch.' },
            { image: 'https://via.placeholder.com/300', content: 'Data protection strategies and cybersecurity frameworks.' },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: 'https://images.pexels.com/photos/3943745/pexels-photo-3943745.jpeg',
        sectionTitle: 'INSURANCE',
        sectionTitle2: 'REINSURANCE',
        sectionContentTitle: 'General Insurance, Reinsurance',
        sectionContentPara: 'Insurance companies face increased regulatory scrutiny, evolving customer expectations, and the need for operational efficiency. Managing risk and navigating global insurance regulations is critical for long-term sustainability.',
        carouselData: [
            { image: 'https://via.placeholder.com/300', content: 'Regulatory compliance and risk management frameworks.' },
            { image: 'https://via.placeholder.com/300', content: 'Business process optimization and performance management.' },
            { image: 'https://via.placeholder.com/300', content: 'Support for reinsurance strategies and structuring.' },
            { image: 'https://via.placeholder.com/300', content: 'Cybersecurity assessments for digital insurance platforms.' },
            { image: 'https://via.placeholder.com/300', content: 'Corporate governance and secretarial services for insurers.' },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: 'https://images.pexels.com/photos/3943745/pexels-photo-3943745.jpeg',
        sectionTitle: 'FINANCIAL',
        sectionTitle2: 'SPECIALIZED FINANCIAL',
        sectionContentTitle: 'Micro Finance, Leasing & Factoring',
        sectionContentPara: 'Specialized financial institutions play a crucial role in expanding financial inclusion and providing alternative financing solutions. It is crucial to have robust operational frameworks and compliance mechanisms to grow sustainably and reach underserved markets.',
        carouselData: [
            { image: 'https://via.placeholder.com/300', content: 'Risk management and compliance advisory for microfinance and leasing firms.' },
            { image: 'https://via.placeholder.com/300', content: 'Operational efficiency and cost optimization strategies.' },
            { image: 'https://via.placeholder.com/300', content: 'Business model development and strategic advisory.' },
            { image: 'https://via.placeholder.com/300', content: 'Implementation of internal control systems and policy development.' },
            { image: 'https://via.placeholder.com/300', content: 'Corporate governance support and secretarial services.' },
        ],
    },
    {
        smallText: 'How We Can Help',
        mainImage: 'https://images.pexels.com/photos/3943745/pexels-photo-3943745.jpeg',
        sectionTitle: 'ENTITES',
        sectionTitle2: 'REIT\'s,FAMILY OFFICES',
        sectionContentTitle: 'General Insurance, Reinsurance',
        sectionContentPara: 'Insurance companies face increased regulatory scrutiny, evolving customer expectations, and the need for operational efficiency. Managing risk and navigating global insurance regulations is critical for long-term sustainability.',
        carouselData: [
            { image: 'https://via.placeholder.com/300', content: 'Strategic advisory on asset management and portfolio optimization.' },
            { image: 'https://via.placeholder.com/300', content: 'Compliance and regulatory services tailored for REITs and family offices.' },
            { image: 'https://via.placeholder.com/300', content: 'Tax efficiency strategies and legal structuring support.' },
            { image: 'https://via.placeholder.com/300', content: 'Corporate governance and secretarial services for multi-entity groups.' },
            { image: 'https://via.placeholder.com/300', content: 'Business continuity and risk mitigation planning.' },
        ],
    },
];

const Industries = () => {
    return (
        <div>
            <Header
                title="WHO WE SERVE"
                para="Insights and advice, tailored to your needs."
                image="https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            {industriesData.map((industry, index) => (
                <IndustriesSection
                    key={index}
                    smallText={industry.smallText}
                    mainImage={industry.mainImage}
                    sectionTitle={industry.sectionTitle}
                    sectionTitle2={industry.sectionTitle2}
                    sectionContentTitle={industry.sectionContentTitle}
                    sectionContentPara={industry.sectionContentPara}
                    carouselData={industry.carouselData}
                    reverse={index !== 0 && index !== industriesData.length - 1 ? 'reverse' : ''}
                    last={index === industriesData.length - 1 ? 'lastContainer' : ''}
                />
            ))}
        </div>
    );
};

export default Industries;
