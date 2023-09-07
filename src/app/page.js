import Navgation from '@/components/Navgation';
import dynamic from 'next/dynamic';
// const Player = dynamic(() => import('@/components/Player'), { ssr: false });
const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false });
async function getData() {
  const res = await fetch(`${process.env.VIDEOS_BASE_URL}/for_you_list`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Home() {
  const { items } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel items={items} />
      <Navgation />
    </main>
  );
}

export default Home;
