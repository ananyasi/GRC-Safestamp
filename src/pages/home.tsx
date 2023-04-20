import { PropsWithChildren } from "react"
import { ContentColumn, ContentColumns, ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Application as SignUpForm } from "../signupform";
import './home.css';
import computer from "../assets/computer.jpg"

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
      <h1>Lost Profits, Lost Lives</h1>
    </ContentSection>
    <ContentSection textSize="small" centered>
      <h1><u>Counterfeits Cost</u></h1>
    </ContentSection>
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
    <Client backgroundImage={computer}>
      <h1>$4.2 trillion</h1>
      <p className="small">
        Total Value of Counterfeited Goods in 2022
      <NewsStory
          title="(Forbes)"
          author="" 
          url="https://www.forbes.com/sites/forbesbusinesscouncil/2022/08/02/the-global-impact-of-counterfeiting-and-solutions-to-stop-it/"
        /> 
      </p>
      </Client>
    <ContentSection textSize="medium" centered>
      <h1>Our Solution:</h1>
      <a href='/product'>SafeStamp</a>
    </ContentSection>
    <ContentSection textSize="medium">
      <h2>We're putting an end to counterfeiting.</h2>
      <p>Interested in the fight against counterfeiting? Sign up to receive news and updates. You can be part of our movement!</p>
      <SignUpForm />
    </ContentSection>
  </PageContainer>
};
  
export default Home