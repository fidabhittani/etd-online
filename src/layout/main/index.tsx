import React, { useState } from "react";
// import smalllLogo from "assets/images/app/logo-small.png";
import { Layout, Affix, Popover, Button } from "antd";
import { withRouter } from "react-router-dom";
import "./main.less";
import GetApplication from "./get-app";

interface IMainLayout {
  children?: any;
  title?: string;
  location?: any;
}

const { Header, Footer, Content } = Layout;

const MainLayout = ({
  children,
  location = { pathname: "/welcome" },
  title = "DrugStore 3U",
}: IMainLayout) => {
  const [formVisisble, setFormVisible] = useState(false);
  // useEffect(() => {
  //   setCurrentRoute(location.pathname);
  // }, [location.pathname]);

  // const [, selectedKey] = currentRoute.split("/");

  return (
    <Layout className="main-conntainer">
      <Affix>
        <Header className="header">
          <div className="app-logo">
            POST REGISTRATION VEHICLE APPLICATION (CHANGE OF OWNERSHIP) [TRIAL
            VERSION]
          </div>
          <Popover
            content={<GetApplication />}
            title="View/Update Existing Application"
            trigger="click"
            visible={formVisisble}
            onVisibleChange={() => setFormVisible(!formVisisble)}
          >
            <Button size="large" type="primary">
              View/ Update Existing Application
            </Button>
          </Popover>
        </Header>
      </Affix>
      <Layout
        style={{ marginLeft: 0, overflow: "auto" }}
        className="app-content"
      >
        <Content style={{ margin: "0", overflow: "initial" }} id={"our-home"}>
          {children}
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Islamabad Excise & Taxation Department ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default withRouter(MainLayout);
