import { FC } from "react";

const Header: FC = function({ children }) {
  return (
    <>
      <style jsx>{`
        h1 {
          font-size: 2em;
        }
      `}</style>
      <h1>{children}</h1>
    </>
  );
};

const Index: FC = function() {
  return <Header>Sound Reliability Engineering</Header>;
};

export default Index;
