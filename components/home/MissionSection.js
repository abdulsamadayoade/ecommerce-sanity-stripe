import React from "react";
import Product from "components/elements/common/Product";
import Container from "components/elements/common/Container";

const MissionSection = ({ products }) => {
  return (
    <section className="py-10 bg-lightGreen">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
