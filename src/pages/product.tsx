import { ContentColumn, ContentColumns, ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
import { PlaceholderImage } from "../components/PlaceholderImage";
import "./product.css";
import hands from "../assets/hands.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import left from '../components/ProductLeft.png'
import right from '../components/ProductRight.png'

function Checkmark() {
  return <FontAwesomeIcon icon={faCheckCircle} />
}

export function Product() {
  return <PageContainer>
    <ContentColumns alignment="center">
      <ContentColumn size={2}>
        <h1>SafeStamp® is the <u>only</u> product with <u>both</u> attributes necessary to solve counterfeiting.</h1>
        <p>ENGAGING INTERFACE: the touch-and-know interface <i>grabs</i> end-users; it's <i>fun</i></p>
        <p>IRREPRODUCIBLE: the reaction stems from proprietary, advanced nanomaterial science too complicated to be replicated by counterfeiters (or anyone else for that matter)</p>
      </ContentColumn>
    </ContentColumns>
    <ContentColumns alignment="center">
      <ContentColumn size={1.5} order={2}>
        <h2>Businesses put our deeptech indicator on their product's packaging.</h2>
      </ContentColumn>
      <ContentColumn size={2} order={1}>
        <img src={left}></img>
      </ContentColumn>
    </ContentColumns>
    <ContentColumns alignment="center">
      <ContentColumn size={1.5}>
        <h2>Customers touch our deeptech indicator, triggering a color-change reaction and revealing branded images that verify the product came from an authentic source.</h2>
      </ContentColumn>
      <ContentColumn size={1}>
        <img src={right}></img>
      </ContentColumn>
    </ContentColumns>
    <ContentSection centered>
      <h2>See how we stack up.</h2>
      <table className="competitor-table">
        <thead>
          <tr>
            <th></th>
            <th>SafeStamp</th>
            <th>3M</th>
            <th>DeLaRue</th>
            <th>Avery Dennison</th>
            <th>TruTag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Reusable</th>
            <td><Checkmark /></td>
            <td><Checkmark /></td>
            <td><Checkmark /></td>
            <td><Checkmark /></td>
            <td><Checkmark /></td>
          </tr>
          <tr>
            <th>No additional device required</th>
            <td><Checkmark /></td>
            <td><Checkmark /></td>
            <td><Checkmark /></td>
            <td />
            <td />
          </tr>
          <tr>
            <th>Overt and simple verification</th>
            <td><Checkmark /></td>
            <td />
            <td />
            <td><Checkmark /></td>
            <td />
          </tr>
          <tr>
            <th>Irreproducible</th>
            <td><Checkmark /></td>
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
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
