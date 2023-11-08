import XIcon from "src/assets/icons/XIcon";
import FlexBox from "src/components/flexBox";
import { DIAGNOSE_CATEGORIES } from "src/data/symptom_type";
import colors from "src/lib/theme";
import styled from "styled-components";
import type { TDiagnoseCategory } from "src/interfaces/symptomPage";

interface ICategories {
  selectedCategory: TDiagnoseCategory | null;
  handleClickCategory: (c: TDiagnoseCategory) => void;
  handleRemoveCategory: () => void;
}

function Categories({ selectedCategory, handleClickCategory, handleRemoveCategory }: ICategories) {
  return selectedCategory === null ? (
    <Container>
      <div className="wrapper">
        {DIAGNOSE_CATEGORIES.map((category) => (
          <Chip className="chip__unselected" key={category} onClick={() => handleClickCategory(category)}>
            {category}
          </Chip>
        ))}
      </div>
    </Container>
  ) : (
    <FlexBox justifyContent="center">
      <Chip className="chip__selected">
        {selectedCategory}
        <RemoveButton onClick={handleRemoveCategory}>
          <XIcon width={20} height={20} stroke={colors.color.blue} />
        </RemoveButton>
      </Chip>
    </FlexBox>
  );
}

export default Categories;

const RemoveButton = styled.button`
  padding: 0;
  height: 20px;
`;

const Container = styled.div`
  padding-left: 20px;

  .wrapper {
    width: 100%;
    display: inline-block;

    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    white-space: nowrap;
  }
`;

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 6px 16px;

  font-size: 16px;
  line-height: 150%;
  border-radius: 41px;

  &.chip__unselected {
    margin-right: 10px;

    background: ${({ theme }) => theme.color.grey_800};
    border: 1px solid ${({ theme }) => theme.color.grey_650};
    color: ${({ theme }) => theme.color.grey_200};
    font-weight: 100;

    cursor: pointer;
  }

  &.chip__selected {
    background: ${({ theme }) => theme.color.sub_blue};
    border: 1px solid ${({ theme }) => theme.color.sub_blue};
    color: ${({ theme }) => theme.color.blue};
    font-weight: 300;
  }
`;
