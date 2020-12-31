import { useShopState } from '../shop-context';
import { Item } from './Item';
import styled from 'styled-components';

const ItemList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--baseline);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export function Shop() {
  const { items } = useShopState();

  return (
    <>
      <ItemList>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ItemList>
    </>
  );
}
