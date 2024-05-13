import Navbar from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";

function Category() {
  const categories = [
    {
      name: "เสื้อผ้า",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "กระเป๋า",
      img: "https://images.unsplash.com/photo-1559669865-5995d995c52c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "รองเท้า",
      img: "https://images.unsplash.com/photo-1590764257694-8b1b85d60e89?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "เครื่องสำอางค์",
      img: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "เฟอร์นิเจอร์",
      img: "https://images.unsplash.com/photo-1639322132757-14ee19fb04f5?q=80&w=3667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "อุปกรณ์อิเล็กทรอนิกส์",
      img: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-noto font-bold text-2xl mt-5 mb-3">หมวดหมู่</h1>
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            title={category.name}
            img={category.img}
          />
        ))}
      </div>
      <div className="h-[15vh] w-[100%]" />
      <Navbar />
    </>
  );
}

export default Category;
