import styled from 'styled-components';
import { Button } from '../shared/Button';
import { useCart } from '../cart-context';
import { useShopDispatch } from '../shop-context';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  padding-bottom: var(--baseline);
  border-bottom: 1px solid var(--body-color);
`;

const CheckoutInfo = styled.div`
  margin-bottom: var(--baseline);
  border-bottom: 1px solid var(--body-color);

  h2 {
    margin: 0 var(--baseline) var(--baseline) 0;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: var(--baseline);

  p {
    margin: 0 var(--baseline) 0 0;
  }
`;

export function Checkout() {
  const [cart, cartDispatch] = useCart();
  const shopDispatch = useShopDispatch();
  const history = useHistory();

  return (
    <>
      {cart.itemsCount > 0 ? (
        <Wrapper>
          <CheckoutInfo>
            <h2>Checkout</h2>
            <p>Items {cart.itemsCount}</p>
          </CheckoutInfo>
          {cart.items.map((item) => (
            <Item key={item.id}>
              <p>{item.name}</p>
              <small>quantity X{item.count}</small>
            </Item>
          ))}

          <Button
            onClick={() => {
              cartDispatch({ type: 'reset-cart' });
              shopDispatch({ type: 'reset-shop' });
              history.push('/');
            }}
          >
            finish
          </Button>
        </Wrapper>
      ) : (
        <p>Woosh nothing here :3</p>
      )}
    </>
  );
}
