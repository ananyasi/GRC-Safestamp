import React from "react";
import { ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
import hands from "../assets/hands.jpg"
import "./about.css"

const About = () => {
  return <PageContainer>
    <ContentSection textSize="medium">
      <h2>Our mission is to save millions of lives.</h2>
      <p>
        SafeStamp seeks to redefine protection against counterfeit products in the pharmaceutical industry.
        Counterfeit medicine has hurt pharmaceutical firms worldwide, leading to $200 billion in lost revenue
        each year. But much worse, a million people die annually from fake drugs, and millions more suffer health
        complications.
      </p>
      <p>
        SafeStamp is an advanced quantum nanotech indicator, patent-pending in +60 countries, that allows consumers
        to ensure the legitimacy of the products they purchase. It is as easy as touch and blow, glow and know—touch
        the indicator and it glows, breathe on the indicator and the glow changes color; this glow is based on an
        advanced nanotech reaction that resists replication by counterfeiters, so if it glows, you know your product
        is authentic. 
      </p>
    </ContentSection>
    <ImageBackground backgroundImage={hands}>
      <ContentSection textSize="large">
        <p>We protect what matters most — working towards a safer world for the generations ahead.</p>
      </ContentSection>
    </ImageBackground>
    <ContentSection textSize="medium">
      <h2>Awards and Accomplishments</h2>
      <ul className="award-list">
        <li>Attendee; White House Demo Day</li>
        <li>Winner; University of Pennsylvania iDesign Competition</li>
        <li>Y-Prize Competition</li>
        <li>Mack Institute for Innovation Management</li>
        <li>Weiss Elevator Pitch Competition</li>
        <li>Pennvention Competition</li>
        <li>Weiss Tech House</li>
        <li>Wharton Innovation Fund</li>
        <li>Nashville Entrepreneur Center (full scholarship for PreFlight Incubator Program)</li>
        <li>FedEx Global Entrepreneur (36|86 Entrepreneurship Festival)</li>
        <li>University of Pennsylvania InSITE Fellowship</li>
        <li>Vanderbilt University (Student-Athlete Internship Program)</li>
        <li>1st Place - Venture Category, Rice University’s Veterans Business Battle 2019</li>
      </ul>
    </ContentSection>
  </PageContainer>
}
  
export default About