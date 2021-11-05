import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import Contract from "components/Contract/Contract";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import Blockie from "components/Blockie";
import NativeBalance from "components/NativeBalance";
import "./style.css";
const { Header } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Nunito, sans-serif",
    color: "#041836",
    marginTop: "100px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fefefe",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Nunito, sans-serif",
    color: "fefefe",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Router>
      <Layout style={{ height: "150vh", background: "#1f2331" }}>
        <Header style={styles.header}>
          <Logo />
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            <Menu.Item key="wallet">
              <NavLink to="/wallet">Wallet</NavLink>
            </Menu.Item>
            <Menu.Item key="dex">
              <NavLink to="/1inch"> Dex</NavLink>
            </Menu.Item>
            <Menu.Item key="balances">
              <NavLink to="/erc20balance">Balances</NavLink>
            </Menu.Item>
            <Menu.Item key="transfers">
              <NavLink to="/erc20transfers"> Transfers</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
            <Blockie currentWallet size="7" scale="5" />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <InchDex chain="eth" />
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
            {/* <Redirect from="/" to="/wallet" /> */}
          </Switch>
          {isAuthenticated ? <Redirect to="/wallet" /> : <Redirect to="/nonauthenticated" />}
        </div>
      </Layout>
    </Router>
  );
};

export const Logo = () => (
  <img src="https://cryptomate.me/static/media/hero-img.d22dfe33.png" width="60" height="70" viewBox="10 20 60 38" fill="none"/>

);

export default App;
