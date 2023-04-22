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
        <p><b>Engaging Interface</b>: the touch-and-know interface <u>grabs</u> end-users; it's <u>fun</u></p>
        <p><b>Irreproducible</b>: the reaction stems from proprietary, advanced nanomaterial science too complicated to be replicated by counterfeiters (or anyone else for that matter)</p>
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
  </PageContainer>
}
