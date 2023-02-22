import { useRouter } from "next/router";

export default function detailAll({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  console.log(router);
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

/**
 * pre-rendering 하기 위한 함수
 * 사용자에게 좀 더 빠른 페이지를 제공하기 위해 사용
 */
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
