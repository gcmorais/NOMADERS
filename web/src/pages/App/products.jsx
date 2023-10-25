import React, { useState } from 'react';
import NewPlatformModal from '../../components/modal/newPlatformModal';
import Table from '../../components/table';
import LayoutPage from '../../components/pageLayout';

function Products() {
  const [openPlatformProduct, setOpenPlatformProduct] = useState(false);

  return (
    <>
      <LayoutPage>
        <Table />
      </LayoutPage>
      <NewPlatformModal
        isOpen={openPlatformProduct}
        closed={setOpenPlatformProduct}
        setModalOpen={() => setOpenPlatformProduct(!openPlatformProduct)}
      />
    </>
  );
}

export default Products;
