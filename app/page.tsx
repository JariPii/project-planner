// import Container from '@/components/global/Container';
import ContentContainer from '@/components/content/ContentContainer';
import MainContainer from '@/components/global/MainContainer';
import Hero from '@/components/hero/Hero';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Hero />
      <MainContainer>
        <Sidebar>Left</Sidebar>
        <ContentContainer></ContentContainer>
        <Sidebar side='right'>Right</Sidebar>
      </MainContainer>
    </>
  );
}
