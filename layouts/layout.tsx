import Head from "next/head";
import { Nav } from "../components/nav/nav";
import style from "../styles/Style.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";

const TITLE = "Ankan Roy FrontEnd Web developer";
const S_TITLE = "fokir.xyz";
const DESCRIPTION = "An Website about ME and My Daily Adventure";

function getMobileOperatingSystem():
  | "Windows Phone"
  | "Android"
  | "iOS"
  | "unknown" {
  var userAgent = window.navigator.userAgent || window.navigator.vendor;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "iOS";
  }

  return "unknown";
}

function isMobile(): boolean {
  const mob = getMobileOperatingSystem();
  if (mob === "iOS" || mob === "Android") {
    return true;
  }
  return false;
}

function RotatingSphere() {
  const sphere = useRef<Mesh>(null);
  const speed = 0.01;
  useFrame(() => {
    if (sphere.current === null) {
      return;
    }
    sphere.current.rotation.x += speed;
  });

  return (
    <mesh ref={sphere}>
      <sphereGeometry args={[10]} />
      <meshBasicMaterial wireframe={true} />
    </mesh>
  );
}

export default function Layout(props: { children: React.ReactNode }) {
  const [canvas, setCanvas] = useState(true);
  useEffect(() => {
    setCanvas(!isMobile());
  },[]);
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`${style.neonText}`}>
        {S_TITLE}
        <span className={style.blink}>⚡</span>
      </h1>
      <Nav
        links={[
          { name: "[~]", href: "/" },
          { name: "~/blog", href: "/blog" },
          { name: "~/links", href: "/links" },
        ]}
      ></Nav>
      {canvas ? (
        <Canvas>
          <RotatingSphere />
        </Canvas>
      ) : (
        <></>
      )}
      {props.children}
    </div>
  );
}
