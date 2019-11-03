import React, { useState, useEffect } from "react";
// import smalllLogo from "assets/images/app/logo-small.png";
import { Layout, Menu, Affix } from "antd";
import { Link, withRouter } from "react-router-dom";
import "./main.less";
interface IMainLayout {
  children?: any;
  title?: string;
  location?: any;
}

const { Header, Footer, Content } = Layout;

const MainLayout = ({
  children,
  location = { pathname: "/welcome" },
  title = "DrugStore 3U"
}: IMainLayout) => {
  const [currentRoute, setCurrentRoute] = useState("welcome");

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const [, selectedKey] = currentRoute.split("/");
  return (
    <Layout className="main-conntainer">
      <Affix>
        <Header className="header">
          <div className="app-logo">
            NEW / IMPORTED VEHICLE TRANSFER [TRIAL VERSION]
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            overflowedIndicator
            selectedKeys={[selectedKey]}
            // defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="vehicle-transfer">
              <Link to="/vehicle-transfer">Vehicle Transfer</Link>
            </Menu.Item>
          </Menu>
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
          Excise Taxation ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default withRouter(MainLayout);
