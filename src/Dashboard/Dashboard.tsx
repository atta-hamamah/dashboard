'use client';
import { Suspense } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';
import KPI from './KPI';
import Sales from './Sales';
import SimpleLine from './SimpleLine';
import EventsROI from './EventsROI';
import EventTypes from './EventTypes';
import Reviews from './Reviews';
import Surveys from './Surveys';
import Spinner from './Spinner';
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });
const data = [
  {
    value: 2400,
  },
  {
    value: 1398,
  },
  {
    value: 9800,
  },
  {
    value: 3908,
  },
  {
    value: 4800,
  },
  {
    value: 3800,
  },
  {
    value: 4300,
  },
];

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Dashboard page of Artera"
        />
        <meta
          name="keywords"
          content="Events, Museum, Store, Events Management, Tickets, Opera, Cinema, Drama,Theatre, Customization, Venues, Reservations, Sponsors, Organizers"
        />
        <meta
          name="author"
          content="Artera"
        />
        <link
          rel="icon"
          href="/ArteraIcon.ico"
        />
      </Head>
      <main>
        <div>
          <h1 className={`${plusJakarta.className} title`}>Dashboard</h1>
          <div className="container mx-auto grid gap-6">
            <Suspense fallback={<Spinner />}>
              <div className="card grid grid-cols-1 place-items-center py-3 px-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 ">
                <KPI
                  borderColor="5E5498"
                  backgroundColor="F4F2FF"
                  textColor="5E5498"
                  icon="/Events.svg"
                  title="Events"
                  value={52}
                />
                <KPI
                  borderColor="C097C0"
                  backgroundColor="FFF6FF"
                  textColor="7D257D"
                  icon="/Ticket.svg"
                  title="Tickets Available"
                  value={1976}
                />
                <KPI
                  borderColor="cadec6"
                  backgroundColor="EDFFEF"
                  textColor="55A55E"
                  icon="/organizers.svg"
                  title="Organizers"
                  value={10}
                />
                <KPI
                  borderColor="95a7cd"
                  backgroundColor="ECF4FF"
                  textColor="2C5FA6"
                  icon="/reservations.svg"
                  title="Reservation Requests"
                  value={7}
                />
                <KPI
                  borderColor="b1c5ce"
                  backgroundColor="ECFBFF"
                  textColor="3A7F92"
                  icon="/surveys.svg"
                  title="New Surveys"
                  value={17}
                />
                <KPI
                  borderColor="cabbb3"
                  backgroundColor="FFF2EC"
                  textColor="9B715D"
                  icon="/promotions.svg"
                  title="Active Promotions"
                  value={12}
                />
                <KPI
                  borderColor="c0b395"
                  backgroundColor="FFF5E5"
                  textColor="845C1B"
                  icon="/reviews.svg"
                  title="New Reviews"
                  value={11}
                />
                <KPI
                  borderColor="E4BF1C"
                  backgroundColor="FFF9E0"
                  textColor="E4BF1C"
                  icon="/shop.svg"
                  title="Merchandise"
                  value={52}
                />
              </div>
            </Suspense>
            <div className="grid h-full grid-rows-3 sm:grid-rows-2 lg:grid-rows-1">
              <div className="grid h-[250px] grid-cols-8 gap-6">
                <div className="card col-span-full h-[250px] pt-1 sm:col-span-4 lg:col-span-2">
                  <Suspense fallback={<Spinner />}>
                    <Sales />
                  </Suspense>
                </div>
                <div className="card order-1 col-span-full h-[250px] lg:-order-none lg:col-span-4">
                  <Suspense fallback={<Spinner />}>
                    <EventsROI />
                  </Suspense>
                </div>
                <div className="card col-span-full h-[250px] sm:col-span-4 lg:col-span-2">
                  <Suspense fallback={<Spinner />}>
                    <EventTypes />
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="grid h-full grid-rows-4 pb-5 pt-10 sm:grid-rows-2 lg:grid-rows-1 lg:pt-0">
              <div className="grid h-[130px] grid-cols-4 gap-6">
                <div className="card col-span-full h-[130px] sm:col-span-2 lg:col-span-1">
                  <Suspense fallback={<Spinner />}>
                    <SimpleLine
                      title={'Visitors Count'}
                      value={12468}
                      percentage={21.01}
                      style={'increasing'}
                      data={data}
                    />
                  </Suspense>
                </div>
                <div className="card col-span-full h-[130px] sm:col-span-2 lg:col-span-1">
                  <Suspense fallback={<Spinner />}>
                    <SimpleLine
                      title={'Reservations'}
                      value={127}
                      percentage={10.91}
                      style={'decrasing'}
                      data={data}
                    />
                  </Suspense>
                </div>
                <div className="card col-span-full h-[130px] sm:col-span-2 lg:col-span-1">
                  <Suspense fallback={<Spinner />}>
                    <Surveys />
                  </Suspense>
                </div>
                <div className="card col-span-full h-[130px] sm:col-span-2 lg:col-span-1">
                  <Suspense fallback={<Spinner />}>
                    <Reviews />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
