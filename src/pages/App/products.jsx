import React, { useState } from 'react';
import NewPlatformModal from '../../components/modal/newPlatformModal';

function Products() {
  const [openPlatformProduct, setOpenPlatformProduct] = useState(false);

  return (
    <NewPlatformModal
      isOpen={openPlatformProduct}
      closed={setOpenPlatformProduct}
      setModalOpen={() => setOpenPlatformProduct(!openPlatformProduct)}
    />
  );
}

export default Products;
