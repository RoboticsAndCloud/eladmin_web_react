import {
  UserOutlined,
  UnorderedListOutlined,
  LinkOutlined,
  HddOutlined,
  ContactsOutlined,
  ReadOutlined,
  DesktopOutlined,
  ChromeOutlined,
  CodeOutlined,
  MessageOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import {
  Alert,
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  List,
  Row,
  Space,
  Statistic,
  Table,
  Timeline,
  Typography,
} from 'antd';

import "./dashboard.css";

import CountUp from 'react-countup';
import Marquee from 'react-fast-marquee';
import DemoLine from './IndexLineChartUI';
import DemoPie from './IndexPieChartUI';
import DemoRadar from './IndexRadarChartUI';
import DemoBar from './IndexBarChartUI';
const { Text, Link } = Typography;
const { Meta } = Card;
const formatter = (value: number) => <CountUp end={value} separator="," />;

interface MainIndexUIProps {}

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const cardStyle: React.CSSProperties = {
  marginBottom: 16,
};

/**
 * 默认主页 UI 组件
 * @param props
 * @returns
 */
const MainDashbaordUI = (props: MainIndexUIProps) => {
  return (
    <div >

      <div className="panel-body">
        <Alert
          showIcon
          type="info"
          message={
            <Marquee pauseOnHover gradient={false} speed={60}>
              公告：Welcome~ Welcome~
            </Marquee>
          }
        />
      </div>
      
      {/* <div className="panel-body"> */}
        <Row gutter={24} className="panel-body">
          <Col span={6}>
            <Space align="center">
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              <Statistic title="New Visits" value={112893} />
            </Space>
          </Col>
          <Col span={6}>
            <Space align="center">
              <Avatar style={{ backgroundColor: '#00bfff' }} icon = {<MessageOutlined />}/>
              <Statistic title="Messages" value={81212} />
            </Space>
          </Col>

          <Col span={6}>
            <Space align="center">
              <Avatar style={{ backgroundColor: '#FF1F4AFF' }} icon = {<MoneyCollectOutlined />}/>
              <Statistic title="Account Balance (CNY)" value={9280} precision={2} />
            </Space>
          </Col>

          <Col span={6}>
            <Space align="center">
              <Avatar style={{ backgroundColor: '#87d068' }} icon = {<ShoppingCartOutlined />}/>
              <Statistic title="Shoppings" value={13600} />
            </Space>
          </Col>
        </Row>
      {/* </div> */}

      <div className="panel-body">
        <div className="space-align-block">
          <DemoLine />
        </div>

        <div className="space-align-block">
          <Row gutter={24} className="panel-body">
              <Col span={8}>
                <DemoRadar />
              </Col>
              <Col span={8}>
                <DemoPie />
              </Col>

              <Col span={8}>
                <DemoBar />
              </Col>
          </Row>
        </div>
      </div>

      <div className="panel-body">
        <Row gutter={24}>
      
          <Col span={8}>
            <Card
              title={
                <Space>
                  <LinkOutlined />
                  快捷导航
                </Space>
              }
              style={cardStyle}
              type="inner"
            >
              <Row>
                <Col span={6} className="text-center" style={{ marginBottom: 12 }}>
                  <a href="">百度</a>
                </Col>
                <Col span={6} className="text-center">
                  <a href="">腾讯网</a>
                </Col>
                <Col span={6} className="text-center">
                  <a href="">必应</a>
                </Col>
                <Col span={6} className="text-center">
                  <a href="">链接1</a>
                </Col>
      
              </Row>

              
            </Card>
            </Col>
            <Col span={8}>
            <Card
              title={
                <Space>
                  <ReadOutlined />
                  帮助文档
                </Space>
              }
              style={cardStyle}
              type="inner"
            >

              <Row>
                <Col span={6} className="text-center" style={{ marginBottom: 12 }}>
                  <a href="">文档1</a>
                </Col>
                <Col span={6} className="text-center">
                  <a href="">文档2</a>
                </Col>
                <Col span={6} className="text-center">
                  <a href="">文档3</a>
                </Col>
                <Col span={6} className="text-center">
                  <a href="">文档4</a>
                </Col>
      
              </Row>

            </Card>
            </Col>
            <Col span={8}>
            <Card
              title={
                <Space>
                  <CodeOutlined />
                  联系我们
                </Space>
              }
              style={cardStyle}
              type="inner"
            >

             <Row>
                <Col span={6} className="text-center" style={{ marginBottom: 12 }}>
                  <Space>
                   <MailOutlined />
                   <a href="">Email</a>
                  </Space>
                </Col>
                <Col span={6} className="text-center" style={{ marginBottom: 12 }}>
                  <Space>
                   <GithubOutlined />
                   <a href="">GitHub</a>
                  </Space>
                </Col>
              </Row>
            </Card>
            </Col>
          
        </Row>
      </div>
    </div>
  );
};

export default MainDashbaordUI;
