import ContentHeader from "../../../components/header/ContentHeader";
import Title from "../../../components/resultPage/common/Title";
import { information_agreement } from "../../../store/information_agreement";
import { IAgreementComponentProps } from "../../../interfaces/informationPage";
import { Container, Contents, Prefix, AgreementItem, Text, Table, Reference } from "./index.style";

const InformationAgreement = ({ agreementDetail, setAgreementDetail }: IAgreementComponentProps) => {
  return (
    <>
      <ContentHeader text={"개인정보 처리방침"} back={false} exit={true} backCallback={() => {}} exitCallback={() => setAgreementDetail(0)} />
      <Container agreementDetail={agreementDetail}>
        <Title text="개인정보 처리방침" />
        <Contents>
          <Prefix>
            &lt; 헬시어 Healthier &gt;('https://healthier.cf/'이하 '헬시어 Healthier')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
            보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다. <br />
            <br />
            &bull; 이 개인정보처리방침은 2022년 8월 8일부터 적용됩니다.
            <br />
            <br />
          </Prefix>
          {information_agreement.map((item, idx) => (
            <AgreementItem key={idx}>
              <section className="sub-title">{item.title}</section>
              {item.description.map((description) => (
                <section key={description.id}>
                  <Text>{description.sub_title}</Text>
                  {description.sub_description.map((subItem) => (
                    <section className="sub-description" key={subItem.id}>
                      <section className="sub-title">{subItem.title}</section>
                      {subItem.description.map((subDescription) => (
                        <Text key={subDescription}>{subDescription}</Text>
                      ))}
                    </section>
                  ))}
                  {description.sub_reference.length > 1 && (
                    <Reference tab={Number(description.sub_reference[1])}>{description.sub_reference[0]}</Reference>
                  )}
                  {description.sub_table.length > 1 && (
                    <Table>
                      {description.sub_table[0].map((title) => (
                        <section className="table-title" key={title}>
                          {title}
                        </section>
                      ))}
                      {description.sub_table[1].map((description) => (
                        <section className="table-description" key={description}>
                          {description}
                        </section>
                      ))}
                    </Table>
                  )}
                </section>
              ))}
            </AgreementItem>
          ))}
        </Contents>
      </Container>
    </>
  );
};

export default InformationAgreement;
