import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import ProductItem from '../../components/ProductItem';
import ProductsContainer from '../../components/ProductsContainer';
import WishListBar from '../../components/WishListBar';
import WishListModal from '../../components/WishListModal';

import kitchen from '../../assets/kitchen.jpeg';
import kitchenHorizontal from '../../assets/kitchen-horizontal.jpeg';
import kitchen2 from '../../assets/kitchen-2.jpeg';
import kitchen3 from '../../assets/kitchen-3.jpeg';

const PRODUCTS = [
  {
    id: 1,
    name: '1 Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 4.5,
    price: 790,
    imgSrc: kitchen,
    discountedPrice: 10,
  },
  {
    id: 2,
    name: '2 Orren Ellis Chana 4-Light LED Kitchen Island Dome Pendant',
    rating: 5,
    price: 900,
    imgSrc: kitchenHorizontal,
  },
  {
    id: 3,
    name: '3 Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 3,
    price: 450,
    imgSrc: [
      kitchen,
      kitchen2,
      kitchen3,
      kitchenHorizontal,
    ],
  },
  {
    id: 4,
    name: '4 Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 4,
    price: 210,
    imgSrc: kitchenHorizontal,
  },
  {
    id: 5,
    name: '5 Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 2.5,
    price: 500,
    imgSrc: [
      kitchen,
      kitchen2,
      kitchen3,
      kitchenHorizontal,
    ],
  },
  {
    id: 6,
    name: '6 Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 1.5,
    price: 500,
    imgSrc: [
      kitchen,
      kitchen2,
      kitchen3,
      kitchenHorizontal,
    ],
  },
];

const AppContent = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  const [wishList, setWishList] = useState([]);
  const handleLikeButtonClicked = useCallback((id) => {
    if (!wishList.includes(id)) {
      setWishList([...wishList, id]);
    } else {
      setWishList(wishList.filter(item => item !== id));
    }
  }, [wishList, setWishList]);

  const [isWishListModalOpened, setIsWishListModalOpened] = useState(false);
  // const wishListWithProductDetail = PRODUCTS.filter(item => wishList.includes(item.id));

  let wishListWithProductDetail = [];
  wishList.forEach((id) => {
    wishListWithProductDetail = [...wishListWithProductDetail,
      ...PRODUCTS.filter(item => item.id === id)];
  });

  return (
    <AppContent>
      <ProductsContainer>
        {PRODUCTS.map(
          ({
            id, name, rating, price, discountedPrice, imgSrc,
          }) => (
            <ProductItem
              id={id}
              name={name}
              rating={rating}
              price={price}
              discountedPrice={discountedPrice}
              onLikeButtonClicked={handleLikeButtonClicked}
              isLiked={wishList.includes(id)}
              imgSrc={imgSrc}
            />
          ),
        )}
      </ProductsContainer>

      <WishListBar
        wishList={wishList}
        onClick={() => setIsWishListModalOpened(!isWishListModalOpened)}
      />

      {isWishListModalOpened && (
        <WishListModal
          wishList={wishListWithProductDetail}
          onClose={() => setIsWishListModalOpened(false)}
        />
      )}
    </AppContent>
  );
};

App.propTypes = {};

App.defaultProps = {};

export default App;
