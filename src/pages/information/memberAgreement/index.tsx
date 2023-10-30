import ContentHeader from "src/components/contentHeader";
import Title from "src/components/title";
import { member_agreement } from "src/data/member_agreement";
import { IAgreementComponentProps } from "src/interfaces/informationPage";
import { Container, Contents, Text, SubText, Table } from "./index.style";

const MemberAgreement = ({ agreementDetail, setAgreementDetail }: IAgreementComponentProps) => {
  return (
    <>
      <ContentHeader
        back={false}
        exit={true}
        exitCallback={() => setAgreementDetail(0)}
        label="회원 이용약관"
        backgroundTransparent={false}
      />

      <Container agreementDetail={agreementDetail}>
        <Title text="헬시어 회원 이용약관" />
        <Contents>
          {member_agreement.map((item, idx) => (
            <section key={idx}>
              <section className="sub-title">{item.title}</section>
              {item.description.map((subItem) => (
                <section key={subItem.id}>
                  <Text>{subItem.sub_title}</Text>
                  {subItem.sub_table &&
                    subItem.sub_table.map((table) => (
                      <Table key={table.id}>
                        <section className="table-title">{table.title}</section>
                        <section className="table-description">{table.description}</section>
                      </Table>
                    ))}
                  {subItem.sub_description.map((subDescription) => (
                    <SubText key={subDescription}>{subDescription}</SubText>
                  ))}
                </section>
              ))}
            </section>
          ))}
        </Contents>
      </Container>
    </>
  );
};

export default MemberAgreement;
