type ProductProps = {
  params: {
    id: string;
  };
};

export default function Product({ params: { id } }: ProductProps) {
  return <h1>Product {id}</h1>;
}
