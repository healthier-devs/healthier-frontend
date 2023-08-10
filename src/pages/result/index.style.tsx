import { Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const BottomTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const BottomText = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};
  font-weight: 100;

  text-align: center;
  white-space: pre-line;
`;

export const BottomTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const SwiperContainer = styled.div`
  height: 100%;
  .swiper {
    height: 100%;

    .swiper-slide {
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none !important;
      }
    }
  }
`;
