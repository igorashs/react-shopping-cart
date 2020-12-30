import styled from 'styled-components';
import { useCartDispatch } from '../cart-context';
import { useShopDispatch } from '../shop-context';
import { Button } from '../shared/Button';

const ItemWrapper = styled.div`
  --gap: var(--baseline);

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
  padding-bottom: var(--gap);
  border-bottom: 1px solid var(--body-color);

  p {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr auto;
  }
`;

const Actions = styled.div`
  justify-self: end;
  display: flex;
  gap: var(--gap);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column: span 2;
  }
`;

export function Item({ item }) {
  const cartDispatch = useCartDispatch();
  const shopDispatch = useShopDispatch();

  return (
    <ItemWrapper>
      <p>{item.name}</p>
      <small>quantity x{item.count}</small>

      <Actions>
        <Button
          onClick={() => {
            cartDispatch({ type: 'decrement-item', item });
            shopDispatch({ type: 'increment-item', item });
          }}
        >
          remove one
        </Button>
        <Button
          onClick={() => {
            cartDispatch({ type: 'remove-item', item });
            shopDispatch({ type: 'restore-item', item });
          }}
        >
          remove all
        </Button>
      </Actions>
    </ItemWrapper>
  );
}
