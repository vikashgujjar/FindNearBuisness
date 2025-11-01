export async function generateStaticParams() {
  return [
    { cityname: "delhi" },
    { cityname: "mumbai" },
    { cityname: "bangalore" },
  ];
}

export default function CityLayout({ children, params }) {
  return (
    <>
      {/* <h1>City: {params.cityname}</h1> */}
      {children}
    </>
  );
}