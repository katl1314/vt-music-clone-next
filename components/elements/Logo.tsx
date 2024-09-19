"use client";

// next.js에서는 이미지 컴포넌트를 제공
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Logo = ({
  isDrawer,
  onClickClose,
}: {
  isDrawer: boolean;
  onClickClose: () => void;
}) => {
  // useRouter를 이용 (appRouter시 next/navigation의 useRouter를 사용한다.)
  const { push } = useRouter();

  // Next.js에서 이벤트 처리, 리액트 훅 처리는 서버 컴포넌트가 아닌 클라이언트 컴포넌트여야한다.
  const onClickLogo = () => {
    push("/"); // Home으로 이동
  };

  // 만약 isDrawerd이 true이면 drawer가 열렸으므로 X아이콘, 아니면 햄버거 표시

  const onClickButton = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      {isDrawer ? (
        <IconButton
          icon={<RxCross2 size="24" />}
          onClickButton={onClickClose}
        />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size="24" />}
          onClickButton={onClickButton}
        />
      )}

      <div className="cursor-pointer" onClick={onClickLogo}>
        {/* 유튜브 뮤직 로고의 경우 next/image컴포넌트 사용 */}
        <Image src={"/main-logo.svg"} width={100} height={30} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
