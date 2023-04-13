import { ContentColumn, ContentColumns, ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
import { PlaceholderImage } from "../components/PlaceholderImage";
import "./product.css";
import hands from "../assets/hands.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Checkmark() {
  return <FontAwesomeIcon icon={faCheckCircle} />
}

export function Product() {
  return <PageContainer>
    <ContentColumns alignment="center">
      <ContentColumn size={1.5}>
        <h1>A <u>new approach</u> to anti-counterfeiting</h1>
        <p>Meet SafeStamp, the world&rsquo;s first <strong>nanotech-powered</strong> anti-counterfeiting indicator.</p>
      </ContentColumn>
      <ContentColumn size={2}>
        <PlaceholderImage />
      </ContentColumn>
    </ContentColumns>
    <ContentColumns alignment="center">
      <ContentColumn size={1.5} order={2}>
        <h1>All it takes is <u>one touch</u></h1> {/* TODO: Refactor header styles */}
        <p>Simply touch the indicator, and the <strong>outer rings change color</strong> to let you know a product is authentic.</p>
      </ContentColumn>
      <ContentColumn size={2} order={1}>
        <PlaceholderImage text="[placeholder image, or a video]" />
      </ContentColumn>
    </ContentColumns>
    <ContentColumns alignment="center">
      <ContentColumn size={1.5}>
        <h1>Sophisticated <u>nanotech</u></h1>
        <p><strong>Patented technology</strong> ensures counterfeiters can&rsquo;t replicate SafeStamp.</p>
      </ContentColumn>
      <ContentColumn size={2}>
        <PlaceholderImage />
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
