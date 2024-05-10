import Navbar from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";

function Category() {
  const img =
    "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-noto font-bold text-2xl mt-5 mb-3">หมวดหมู่</h1>
        {new Array(7).fill("").map((_, i) => (
          <CategoryCard key={i} img={img} title={"เสื้อผ้า"} />
        ))}
      </div>
      <div className="h-[15vh] w-[100%]" />
      <Navbar />
    </>
  );
}

export default Category;
