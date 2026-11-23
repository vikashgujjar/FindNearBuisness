import RealState from "@/app/Component/RealState";
import PinLocation from "@/app/Component/PinLocation";
import CategoryExtras, { CategoryPromo } from "@/app/Component/category/CategoryBlocks";
import CategoryAbout from "@/app/Component/CategoryAbout";
import { getCategories } from "@/app/lib/categories";
import { categoryMetadata, cityPageParams } from "@/app/lib/seo";
import { BUILT_CITIES } from "@/app/lib/cities";

const labelOf = async (cate) => (await getCategories()).get(cate) || cate.replace(/-/g, " ");

export async function generateStaticParams({ params: { cityname } }) {
  const categories = await getCategories();
  const pages = [...categories.keys()].map((cate) => ({ cate }));
  // City pages of the admin panel, added once (next to the default city).
  return cityname === "default-location" ? [...pages, ...(await cityPageParams(BUILT_CITIES))] : pages;
}

export async function generateMetadata({ params }) {
  const { cityname, cate } = await params;
  return categoryMetadata(decodeURIComponent(cityname), cate, await labelOf(cate));
}

export default async function CategoryPage({ params }) {
  const { cate } = await params;
  const name = await labelOf(cate);
  return (
    <>
      <PinLocation />
      <RealState />
      <CategoryPromo />
      <CategoryExtras name={name} />
      <CategoryAbout name={name} slug={cate} />
    </>
  );
}
