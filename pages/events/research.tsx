import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../../components/About'
import CompetitionBanner from '../../components/CompetitionBanner'
import FAQSingleDeck from '../../components/FAQSingleDeck'
import Pricing from '../../components/Pricing'
import Rewards from '../../components/Rewards'
import Timeline from '../../components/Timeline'

const pricing = [
  {
    name: 'Early Bird (1 Juli - 5 Juli 2022)',
    price: 'Rp100.000'
  },
  {
    name: 'Normal (1 Juli - 5 Juli 2022)',
    price: 'Rp150.000'
  }
]

const timelines = [
  {
      name: 'Event 1',
      date: '24 Juli 2022'
  },
  {
      name: 'Event 2',
      date: '30 Juli 2022'
  }
]

const qna = [
  {
      question: 'lorem ipsum dos color sit amet',
      answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
  },
  {
      question: 'lorem ipsum dos color sit amet',
      answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
  },
  {
      question: 'lorem ipsum dos color sit amet',
      answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
  }
]

const Research: NextPage = () => {
  return (
    <>
      <Head>
        <title>Equity Research Competition - INFEST 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CompetitionBanner title='EQUITY RESEARCH COMPETITION' content="Lorem ipsum dos color sit amett" actions={[{name: 'Registrasi', href:'https://google.com'}, {name: 'Guidebook', href:'https://google.com'}]}/>
        <About title="Tentang" content="Lorem ipsum dos color sit amet"/>
        <Rewards />
        <Pricing title='Biaya' content={pricing}/>
        <Timeline events={timelines}/>
        <FAQSingleDeck items={qna} />
      </div>
    </>
  )
}

export default Research
