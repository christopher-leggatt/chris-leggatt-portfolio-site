import { ButtonType } from '@/app/lib/types';
import { Button } from '@/app/components/Button';
import Container from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import siteMetadata from '@/app/data/siteMetadata';
import { useRouter } from 'next/router';

const Home = () => {
    const { push } = useRouter();

  return (
    <div>
      
    </div>
  )
}

export default Home;
