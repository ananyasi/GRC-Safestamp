import { ContentColumn, ContentColumns, ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
import { PlaceholderImage } from "../components/PlaceholderImage";
import "./product.css";
import hands from "../assets/hands.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import center from '../assets/Product.png'

function Checkmark() {
  return <FontAwesomeIcon icon={faCheckCircle} />
}

/* The `Product` function is returning a JSX element that contains a `PageContainer` component with
two `ContentColumns` components. The first `ContentColumn` contains a `h1` element and two `p`
elements with text describing the features of the SafeStamp® product. The second `ContentColumn`
contains an `img` element with a `src` attribute pointing to an image file. The `ContentColumns`
components are aligned to the center using the `alignment` prop and the second `ContentColumn` is
given an `order` prop of 1 to change its position in the layout. */

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
      <ContentColumn size={2} order={1}>
        <img className="center" src={center}></img>
      </ContentColumn>
    </ContentColumns>
  </PageContainer>
}
