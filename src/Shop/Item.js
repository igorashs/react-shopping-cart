import styled from 'styled-components';
import { useCartDispatch } from '../cart-context';
import { Button } from '../shared/Button';
import { useShopDispatch } from '../shop-context';

const ItemWrapper = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: calc(var(--baseline) / 2);
  gap: var(--baseline);
  border-radius: 4px;
  background-color: var(--primary);
  color: var(--text-primary);
  box-shadow: 1px 1px 2px var(--body-color);
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;

  h2 {
    margin: var(--baseline) calc(var(--baseline) / 2) 0;
    color: var(--text-primary);
    overflow-wrap: break-word;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  min-width: 224px;
  padding: var(--baseline) 0;
  border-radius: 4px;
  background-color: #000000bf;

  img {
    margin: 0 auto;
    width: 112px;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
`;

const Details = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--baseline);

  p {
    max-width: 720px;
  }
`;

const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: calc(var(--baseline) / 2);
  border-radius: 4px;
  background-color: var(--body-bg);
  color: var(--body-color);
`;

const Stats = styled.p`
  margin-bottom: 0;
  border-radius: 4px;
  color: var(--body-accent);
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: calc(var(--baseline) / 2);
`;

export function Item({ item }) {
  const shopDispatch = useShopDispatch();
  const cartDispatch = useCartDispatch();

  return (
    <ItemWrapper>
      <Figure>
        <ImgWrapper>
          <img
            src={require(`../assets/${item.asset}`).default}
            alt={item.name}
          />
        </ImgWrapper>
        <figcaption>
          <h2>{item.name}</h2>
        </figcaption>
      </Figure>
      <Details>
        <Description>
          <p>{item.description}</p>
          <Stats>{item.stats}</Stats>
        </Description>
        <Actions>
          <small>Stock: x{item.count}</small>
          <Button
            onClick={() => {
              shopDispatch({ type: 'decrement-item', item });
              cartDispatch({ type: 'increment-item', item });
            }}
            disabled={item.count <= 0}
          >
            Add to Cart
          </Button>
        </Actions>
      </Details>
    </ItemWrapper>
  );
}
