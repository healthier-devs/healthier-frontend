import styled from "styled-components";

export const UserImage = styled.img`
  width: 54px;
  height: 54px;
`;

export const EditHealthInfoButton = styled.button`
  background: ${({ theme }) => theme.color.blue};
  width: 100%;
  padding: 1.4rem 0;
  border-radius: 8px;

  font-size: 1.4rem;
  line-height: 150%;
  font-weight: 300;
  color: ${({ theme }) => theme.color.grey_100};
`;

export const Username = styled.p`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.411px;
`;

export const Interests = styled.p`
  color: ${({ theme }) => theme.color.grey_400};
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 120%;
`;

export const Tag = styled.div`
  padding: 4px 8px;
  border-radius: 60px;
  background: rgba(210, 250, 100, 0.12);

  .label {
    color: ${({ theme }) => theme.color.green};

    font-size: 1.3rem;
    font-weight: 300;
    line-height: 120%;
    letter-spacing: -0.5px;
  }
`;

export const EditProfileButton = styled.button`
  padding: 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.color.grey_800};

  color: ${({ theme }) => theme.color.grey_400};
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: -0.5px;
`;

export const UserInfoWrapper = styled.div`
  flex: 1;
`;

export const ListContainer = styled.div`
  padding: 1.6rem 2.4rem 0;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  padding: 1.8rem 0;
  .label {
    color: ${({ theme }) => theme.color.grey_200};
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 140%;
    flex: 1;

    text-align: left;
  }

  .button {
    width: 100%;

    padding-block: 0;
    padding-inline: 0;
  }
`;
