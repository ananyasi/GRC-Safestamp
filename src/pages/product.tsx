import { ContentColumn, ContentColumns, ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
import { PlaceholderImage } from "../components/PlaceholderImage";
import "./product.css";
import hands from "../assets/hands.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import center from '../assets/Product.png'
import right from '../components/ProductRight.png'

function Checkmark() {
  return <FontAwesomeIcon icon={faCheckCircle} />
}
export function Product() {
  return <PageContainer>
    <ContentColumns alignment="center">
      <ContentColumn size={2}>
        <h1>SafeStamp® is the <u>only</u> product with <u>both</u> attributes necessary to solve counterfeiting.</h1>
        <p><b><u>Engaging</u> Interface for End-Users</b>: the interactive tactile interface offers an easy and
          enjoyable way for customers to verify the authenticity of their product at
          the final <u>point-of-purchase</u> it requires no additional device</p>
        <p><b><u>Irreproducible</u> by Counterfeiters</b>: the reaction stems from proprietary, advanced nanomaterial
          science <u>too complicated to be replicated</u></p>
      </ContentColumn>
    </ContentColumns>
    <ContentColumns alignment="center">
      <ContentColumn size={1.5} order={2}>
        <h2>Businesses put our deeptech indicator on their product's packaging.</h2>
      </ContentColumn>
      <ContentColumn size={2} order={1}>
        <img src={center}></img>
      </ContentColumn>
    </ContentColumns>
    {/*<ContentColumns alignment="center">*/}
    {/*  <ContentColumn size={1.5}>*/}
    {/*    <h2>Customers touch our deeptech indicator, triggering a color-change reaction and revealing branded images that verify the product came from an authentic source.</h2>*/}
    {/*  </ContentColumn>*/}
    {/*  <ContentColumn size={1}>*/}
    {/*    <img src={right}></img>*/}
    {/*  </ContentColumn>*/}
    {/*</ContentColumns>*/}
  </PageContainer>
}
