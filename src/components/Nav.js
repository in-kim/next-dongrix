import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  console.log(router.pathname.split("/"));
  return (
    <nav>
      <Image src="/logo.png" alt="logo" width={200} height={100} />
      <div>
        <Link href="/" legacyBehavior>
          <a
            className={
              router.pathname === "/" ||
              router.pathname.split("/").includes("movies")
                ? "active"
                : ""
            }
          >
            Movie
          </a>
        </Link>
        <Link href="/tv" legacyBehavior>
          <a
            className={
              router.pathname.split("/").includes("tv") ? "active" : ""
            }
          >
            TV
          </a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          background-color: rgba(20, 20, 20, 0.8);
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
          color: #fff;
        }
        nav a.active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
