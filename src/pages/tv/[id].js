export default function detail({ data, video }) {
  function ratingToPercentage(score) {
    return (Number(score) / 10) * 100;
  }
  console.log(data);
  return (
    <>
      <div className="container">
        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
        <div>
          <h3>{data.original_name}</h3>
          <div className="d-flex gap-10 font-10">
            <span className="separator">{data.first_air_date}</span>
            <span className="separator">
              <span className="counting">
                <span
                  className="couting__active"
                  style={{ width: `${ratingToPercentage(data.vote_average)}%` }}
                ></span>
              </span>
              {data.vote_average}
            </span>
            <span>{data.original_language}</span>
          </div>
          <p>{data.overview}</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          gap: 10px;
          margin: 20px;
        }
        h3 {
          margin: 0 0 10px 0;
        }
        p {
          font-size: 10px;
        }

        .d-flex {
          display: flex;
        }
        .gap-10 {
          gap: 10px;
        }
        .font-10 {
          font-size: 10px;
        }

        .separator {
          padding-right: 10px;
          border-right: 1px solid #ddd;
        }
        .counting {
          position: relative;
          display: inline-block;
          width: 61px;
          height: 12px;
          margin-right: 5px;
          background: url("/star.svg") repeat-x;
          vertical-align: -2px;
        }
        .couting__active {
          position: absolute;
          top: 0;
          left: 0;
          width: 61px;
          height: 12px;
          background: url("/star_active.svg") repeat-x;
        }
      `}</style>
    </>
  );
}
export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/tv/${id}`);
  const res2 = await fetch(`http://localhost:3000/api/tv/${id}/videos`);

  const tv = await res.json();
  const video = await res2.json();
  return {
    props: {
      data: tv,
      video: video,
    },
  };
}
