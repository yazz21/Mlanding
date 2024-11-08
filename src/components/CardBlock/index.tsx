import { Card, Col, Row, Typography } from "antd";
import { Fade, Slide } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { ContentWrapper, MiddleBlockSection } from "../MiddleBlock/styles";
import { CardBlockProps } from "./type";
import {
  ContentSection,
  Content,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "../ContentBlock/styles";

const CardBlock = ({
  title,
  content,
  section,
  t,
}: CardBlockProps) => {
  const { Title } = Typography;

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
         
            <Col span={24}>
              <h6>{t(title)}</h6>
              <p>{t(content)}</p>
              <Row gutter={[16, 16]} justify="center">
                {section?.map((item: any, index: number) => (
                  <Col key={index} lg={8} md={8} sm={24} xs={24}>
                    <Fade triggerOnce>
                      <Card
                        bordered={false}
                        hoverable
                        style={{ width: "100%", textAlign: "center" }}
                        cover={<SvgIcon src={item.icon} width="" height="100%" />}
                        title={<Title level={4}>{t(item.title)}</Title>}
                      >
                        <Content>{t(item.content)}</Content>
                      </Card>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </Col>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(CardBlock);
