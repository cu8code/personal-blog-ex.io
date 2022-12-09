import Image from "next/image";
import style from "./Profile.module.css";
import styleG from "../../styles/Style.module.css";


export function Profile(params: { imgsrc: string; children: React.ReactNode }) {
  return (
    <div className={`${style.outer}`}>
      <div className={`${style.inner}`}>{params.children}</div>
      <Image
        src={params.imgsrc}
        alt="image of author"
        width={200}
        height={200}
        className={styleG.border}
      ></Image>
    </div>
  );
}
