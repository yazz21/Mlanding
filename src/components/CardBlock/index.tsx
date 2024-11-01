import { Card, Col, Row } from "antd";
import { Fade, Slide } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { ContentWrapper, MiddleBlockSection } from "../MiddleBlock/styles";
import { CardBlockProps } from "./type";

const CardBlock = ({
  title,
  content,
  section,
  t,
}: CardBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col span={24}>
              <h6>{t(title)}</h6>
              <p>{t(content)}</p>
              <Row gutter={[16, 16]} justify="center">
                {section?.map((item: any, index: number) => (
                  <Col key={index} lg={6} md={8} sm={12} xs={24}>
                    <Fade triggerOnce>
                      <Card
                        hoverable
                        style={{ width: "100%", textAlign: "center" }}
                        cover={<SvgIcon src={item.icon} width="100%" height="200px" />}
                      >
                        <Card.Meta
                          title={t(item.title)}
                          description={t(item.content)}
                        />
                      </Card>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(CardBlock);
