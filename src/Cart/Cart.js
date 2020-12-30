import styled from 'styled-components';
import { useCart } from '../cart-context';
import { useShopDispatch } from '../shop-context';
import { Button } from '../shared/Button';
import { Item } from './Item';

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--baseline);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--baseline);
  margin-top: var(--baseline);
  justify-content: space-between;
`;

const CartInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--baseline);
  border-bottom: 1px solid var(--body-color);

  h2 {
    margin: 0 var(--baseline) var(--baseline) 0;
  }
`;

export function Cart() {
  const [cart, cartDispatch] = useCart();
  const shopDispatch = useShopDispatch();

  return (
    <main>
      {cart.itemsCount > 0 ? (
        <>
          <CartInfo>
            <h2>Cart</h2>
            <p>Total items: {cart.itemsCount}</p>
          </CartInfo>
          <ItemList>
            {cart.items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>

          <Actions>
            <Button
              onClick={() => {
                cartDispatch({ type: 'reset-cart' });
                shopDispatch({ type: 'reset-shop' });
              }}
            >
              clear
            </Button>
            <Button>checkout</Button>
          </Actions>
        </>
      ) : (
        <p>Cart is empty :X</p>
      )}
    </main>
  );
}
