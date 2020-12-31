import styled from 'styled-components';
import { Button } from '../shared/Button';
import { useCart } from '../cart-context';
import { useShopDispatch } from '../shop-context';
import { useHistory } from 'react-router-dom';

const CheckoutInfo = styled.div`
  margin-bottom: var(--baseline);
  border-bottom: 1px solid var(--body-color);

  h2 {
    margin: 0 var(--baseline) var(--baseline) 0;
  }
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--baseline);
  margin-bottom: var(--baseline);

  padding-bottom: var(--baseline);
  border-bottom: 1px solid var(--body-color);
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0 var(--baseline) 0 0;
  }
`;

export function Checkout() {
  const [cart, cartDispatch] = useCart();
  const shopDispatch = useShopDispatch();
  const history = useHistory();

  if (cart.itemsCount > 0) {
    return (
      <>
        <CheckoutInfo>
          <h2>Checkout</h2>
          <p>Items {cart.itemsCount}</p>
        </CheckoutInfo>

        <ItemList>
          {cart.items.map((item) => (
            <Item key={item.id}>
              <p>{item.name}</p>
              <small>quantity X{item.count}</small>
            </Item>
          ))}
        </ItemList>

        <Button
          onClick={() => {
            cartDispatch({ type: 'reset-cart' });
            shopDispatch({ type: 'reset-shop' });
            history.push('/');
          }}
        >
          finish
        </Button>
      </>
    );
  } else {
    return <p>Woosh nothing here :3</p>;
  }
}
