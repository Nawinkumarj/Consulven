import React from 'react'
import Header from '../Components/Header'
import IndustriesSection from '../Components/IndustriesSection'

const Industries = () => {
  return (
    <div>
      <Header title='LOREM IPSUM' para='Excellence at the Intersection of Strategy and Compliance' image={"https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />

      <IndustriesSection smallText={'How We Can Help'} mainImage={'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} sectionTitle={'FINANCIAL'} sectionContentTitle={'FINTECH,ASSET MANAGEMENT FIRMS,FUNDS ALFs '} sectionContentPara={'The finanical services sector is at the forefront of innovation, with emerging technologies reshaping how businesses operate. Companies need to balance innovation with regulatory compliance while driving growth and customer trust'} />

      <IndustriesSection smallText={'How We Can Help'} mainImage={'https://images.pexels.com/photos/4021810/pexels-photo-4021810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} sectionTitle={'INSURANCE'} sectionContentTitle={'GENERAL INSURANCE & REINSURANCE'} sectionContentPara={'The banking landscape is undergoing rapid transformation with evolving regulations, digitization, and changing customer expectations. Banks need agile strategies to stay competitive and ensure compliance while enhancing customer experience.'} reverse='reverse' />

      <IndustriesSection smallText={'How We Can Help'} mainImage={'https://images.pexels.com/photos/3943745/pexels-photo-3943745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} sectionTitle={'BANKING'} sectionContentTitle={'PUBLIC & PRIVATE COMMERCIAL BANKS'} sectionContentPara={'The banking landscape is undergoing rapid transformation with evolving regulations, digitization, and changing customer expectations. Banks need agile strategies to stay competitive and ensure compliance while enhancing customer experience.'} reverse='reverse' />

      <IndustriesSection smallText={'How We Can Help'} mainImage={'https://images.pexels.com/photos/3943745/pexels-photo-3943745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} sectionTitle={'BANKING'} sectionContentTitle={'PUBLIC & PRIVATE COMMERCIAL BANKS'} sectionContentPara={'The banking landscape is undergoing rapid transformation with evolving regulations, digitization, and changing customer expectations. Banks need agile strategies to stay competitive and ensure compliance while enhancing customer experience.'} reverse='reverse' last='lastContainer' />

    </div>
  )
}

export default Industries
