import styled from 'styled-components';
import { useCartDispatch } from '../cart-context';
import { Button } from '../shared/Button';
import { useShopDispatch } from '../shop-context';

const ItemWrapper = styled.article`
  --gap: var(--baseline);

  display: grid;
  gap: var(--gap);
  padding: calc(var(--baseline) / 2);
  border-radius: 4px;
  background-color: var(--primary);
  color: var(--text-primary);
  box-shadow: 1px 1px 2px var(--body-color);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    --gap: calc(var(--baseline) * 2);
    padding: var(--baseline);
  }
`;

const Figure = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);

  figcaption {
    flex: 1;

    h2 {
      margin: 0;
      padding: 0 calc(var(--baseline) / 2);
      color: var(--text-primary);
      overflow-wrap: break-word;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
      align-items: center;

      h2 {
        padding: 0;
      }
    }
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
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 224px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  p {
    max-width: 720px;
  }
`;

const DescriptionSection = styled.section`
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

const BuySection = styled.section`
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
        <DescriptionSection>
          <p>{item.description}</p>
          <Stats>{item.stats}</Stats>
        </DescriptionSection>
        <BuySection>
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
        </BuySection>
      </Details>
    </ItemWrapper>
  );
}
