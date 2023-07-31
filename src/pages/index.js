import Head from "next/head";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import AllFeaturedProducts from "@/components/AllFeaturedProducts";
import FeaturedCategory from "@/components/FeaturedCategory";
import Banner from "@/components/Banner";

const HomePage = ({ featuredProductList }) => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Head>
        <title>PC Builder</title>
      </Head>
      <Banner/>
      <AllFeaturedProducts featuredProduct={featuredProductList} />
      <FeaturedCategory />
      
    </div>
  );
};

export default HomePage;
export const getServerSideProps = async () => {
  const res = await fetch("https://builder-backend-nu.vercel.app/featured-product");
  const data = await res.json();
  return {
    props: {
      featuredProductList: data,
     
    },
    // revalidate: 10, //for build if any changes happen it will show in 10s into the webpages.
  };
};
