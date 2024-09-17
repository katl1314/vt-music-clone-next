// 반응형 디자인에 따라 패딩이 달라지기 때문임.
// tailwindCSS중 클래스명 앞에 추가하는 키워드에 따라 반응형 디자인 적용 가능
// lg: min-width: 1024px
// md: min-width: 768px
// sm: min-width: 640px
// 위 조건에 따라 스타일을 적용하고 싶을때 사용한다.
const PagePadding = ({ children }: React.PropsWithChildren) => {
  return <div className="mx-auto px-[10px] py-2 lg:px-[100px]">{children}</div>;
};

export default PagePadding;
