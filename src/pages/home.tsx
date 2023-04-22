import { PropsWithChildren } from "react"
import { ContentColumn, ContentColumns, ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Application as SignUpForm } from "../signupform";
import './home.css';
import computer from "../assets/computer.jpg"
import left from '../components/pic1landing.png'
import right from '../components/pic2landing.png'
import stat from '../components/statisticlanding.png'

function NewsStory({ title, author, url }: {
  title: string,
  author: string,
  url: string
}) {
  return <div>
    <h3 className="small"><a href={url} target="_blank">{title}</a></h3>
    <p>{author}</p>
  </div>
}

function Client({ children, backgroundImage }: PropsWithChildren<{
  backgroundImage: string
}>) {
  return <ImageBackground backgroundImage={backgroundImage}>
    <ContentSection centered textSize="medium">
      {children}
    </ContentSection>
  </ImageBackground>
}

const Home = () => {
  return <PageContainer>
    <ContentSection textSize="medium" centered>
      <h1>Lost Profits, Lost Lives.</h1>
    </ContentSection>
    <ContentSection textSize="small" centered>
      <h1><u>Counterfeits Cost.</u></h1>
    </ContentSection>
    <ContentColumns alignment="center">
      <ContentColumn size={2}>
        <img src={left}></img>
      </ContentColumn>
      <ContentColumn size={1.5}>
        <h2><i>Counterfeiting is the largest criminal enterprise in the world, with domestic and international sales of counterfeit and pirated goods totaling between an estimated <u>$1.7 trillion</u> and <u>$4.5 trillion</u> a year</i></h2>
      </ContentColumn>
    </ContentColumns>
    <ContentSection textSize="small" centered>
      <h1><u>Counterfeits Kill.</u></h1>
    </ContentSection>
    <ContentColumns alignment="center">
      <ContentColumn size={2}>
        <h2>Fake medicines have been found to contain <u>mercury</u>, <u>arsenic</u>, <u>rat poison</u>, or <u>cement</u></h2>
      </ContentColumn>
      <ContentColumn size={2}>
        <img src={right}></img>
        <img src={stat}></img>
      </ContentColumn>
    </ContentColumns>
    {/* <Client backgroundImage={computer}>
      <h1>$4.2 trillion</h1>
      <p className="small">
        Total Value of Counterfeited Goods in 2022
      <NewsStory
          title="(Forbes)"
          author="" 
          url="https://www.forbes.com/sites/forbesbusinesscouncil/2022/08/02/the-global-impact-of-counterfeiting-and-solutions-to-stop-it/"
        /> 
      </p>
      </Client> */}
    <ContentSection textSize="large" centered>
      <h2>It’s time to save corporate earnings and human lives. It’s time for <a href='/product'>SafeStamp®</a></h2>
    </ContentSection>
    {/* <ContentSection textSize="medium">
      <h2>We're putting an end to counterfeiting.</h2>
      <p>Interested in the fight against counterfeiting? Sign up to receive news and updates. You can be part of our movement!</p>
      <SignUpForm />
    </ContentSection> */}
  </PageContainer>
};
  
export default Home