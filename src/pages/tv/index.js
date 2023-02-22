import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function TV({ tvList }) {
  const router = useRouter();
  const goDetail = (id, title) => {
    router.push({ pathname: `/tv/${id}`, query: { title } }, `/tv/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {tvList?.map((tv) => (
        <div
          className="tv"
          key={tv.id}
          onClick={() => goDetail(tv.id, tv.title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} />
          <h4>{tv.original_name}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .tv {
          cursor: pointer;
        }
        .tv img {
          max-width: 100%;
          min-height: 345px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .tv:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .tv h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/tv`);
  const tv = await res.json();

  return {
    props: {
      tvList: tv.results,
    },
  };
}
