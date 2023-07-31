import { Layout, Menu, Button, Dropdown } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/cpu"
      >
        CPU / Processor
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/motherboard"
      >
        Motherboard
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/ram"
      >
        RAM
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/powerSupply"
      >
        Power Supply Unit
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/storageDevice"
      >
        Storage Device
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/monitor"
      >
        Monitor
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/mouse"
      >
        Mouse
      </a>
    ),
  },
];
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          PC Builder
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Dropdown
          menu={{
            items,
          }}
          arrow
        >
          <Button style={{ fontSize: "16px", fontWeight: "500" }}>
            Categories
          </Button>
        </Dropdown>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/pc-builder"
        >
          <items>PC Builder</items>
        </Link>
        {session?.user ? (
          <items>
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          </items>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;
