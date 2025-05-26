// import Container from '@/components/global/Container';
import PersonCard from '@/components/about-us/PersonCard';
import ContentContainer from '@/components/content/ContentContainer';
import MainContainer from '@/components/global/MainContainer';
import Hero from '@/components/hero/Hero';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Hero />
      <MainContainer>
        <Sidebar>
          <PersonCard />
        </Sidebar>
        <ContentContainer />
        <Sidebar side='right'>Content coming</Sidebar>
      </MainContainer>
    </>
  );
}
