import { ContentSection, PageContainer } from "../components/ContentBlocks";
import { Application as SignUpForm } from "../signupform";
  
function NewsStory({ title, author, url }: {
  title: string,
  author: string,
  url: string
}) {
  return <div>
    <h3><a href={url} target="_blank">{title}</a></h3>
    <div>{author}</div>
  </div>
}

const Home = () => {
  return <PageContainer>
    <ContentSection textSize="medium">
      <h1>We're putting an end to counterfeiting.</h1>
      <p>Interested in the fight against counterfeiting? Sign up to receive news and updates. You can be part of our movement!</p>
      <SignUpForm />
    </ContentSection>
    <ContentSection textSize="medium">
      <h2>Related News</h2>
      <NewsStory
        title="Counterfeit and Pirated Goods Get Boost From Pandemic, New Report Confirms"
        author="Europol"
        url="https://www.europol.europa.eu/media-press/newsroom/news/counterfeit-and-pirated-goods-get-boost-pandemic-new-report-confirms"
      />
      <NewsStory
        title="The Counterfeit Problem and How Retailers Can Fight Back in 2020"
        author="Forbes Technology Council"
        url="https://www.forbes.com/sites/forbestechcouncil/2020/03/17/the-counterfeit-problem-and-how-retailers-can-fight-back-in-2020/#7fb35d261f32"
      />
      <NewsStory
        title="Interpol Seizes $14m in Fake #COVID19 Pharma Goods"
        author="Info Security Group"
        url="https://www.infosecurity-magazine.com/news/interpol-seizes-14-m-fake-covid/"
      />
      <NewsStory
        title="CBP Officers Seize Fake COVID-19 Test Kits at LAX"
        author="U.S. Customs and Border Protection"
        url="https://www.cbp.gov/newsroom/national-media-release/cbp-officers-seize-fake-covid-19-test-kits-lax"
      />
    </ContentSection>
  </PageContainer>
};
  
export default Home