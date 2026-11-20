import RealState from "@/app/Component/RealState";
import PinLocation from "@/app/Component/PinLocation";
import BusinessDirectory from "@/app/Component/BuinessDirectory";
import CategoryAbout from "@/app/Component/CategoryAbout";
import { getCategories } from "@/app/lib/categories";

export async function generateStaticParams() {
  const categories = await getCategories();
  return [...categories.keys()].map((cate) => ({ cate }));
}

export default async function CategoryPage({ params }) {
  const { cate } = await params;
  const categories = await getCategories();
  const name = categories.get(cate) || cate.replace(/-/g, " ");
  return (
    <>
      <PinLocation />
      <RealState />
      <BusinessDirectory />
      <CategoryAbout name={name} slug={cate} />
    </>
  );
}
