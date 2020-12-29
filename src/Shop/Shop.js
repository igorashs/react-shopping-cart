import { useShopState } from '../shop-context';
import { Item } from './Item';
import styled from 'styled-components';

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--baseline);
`;

export function Shop() {
  const { items } = useShopState();

  return (
    <main>
      <ItemList>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ItemList>
    </main>
  );
}
