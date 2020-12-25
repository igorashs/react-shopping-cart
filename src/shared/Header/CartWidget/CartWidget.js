import styled from 'styled-components';
import { Svg } from '../../Svg';
import cartIcon from './cart.svg';
import circleIcon from './circle.svg';
import { useCartState } from '../../../cart-context';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: calc(var(--baseline) / 4);
`;

const Count = styled.p`
  display: none;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: initial;
  }
`;

const Icon = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;

const Circle = styled.div`
  > * {
    right: -0.625rem;
    top: -0.625rem;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    color: var(--secondary);
  }
`;

export function CartWidget() {
  const { itemCount } = useCartState();

  return (
    <Wrapper>
      {itemCount > 0 && <Count>{itemCount}</Count>}
      <Icon>
        <Svg href={cartIcon} id='cart' title='navigate to cart' />
        {itemCount > 0 && (
          <Circle>
            <Svg href={circleIcon} id='circle' title='cart items' />
          </Circle>
        )}
      </Icon>
    </Wrapper>
  );
}
