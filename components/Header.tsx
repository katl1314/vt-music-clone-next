import Image from "next/image";
// next.js에서 외부 이미지를 가져와야할 때 next.config.js에서 수정해야함.
const Header = ({ children }: React.PropsWithChildren) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          {/* next.js 컴포넌트 Image의 fill을 사용할 경우 부모 요소는 relative이어야함. */}
          <Image
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
            alt="헤더 이미지"
            className="object-cover"
            fill
          />
        </div>
        <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
        <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
