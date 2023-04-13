import { PropsWithChildren } from "react"
import { ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks";
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