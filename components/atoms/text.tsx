import React, { FC, ReactNode } from "react";

export enum Tags {
  Paragraph = "p",
  Heading1 = "h1",
  Heading2 = "h2",
  Heading3 = "h3",
  Heading4 = "h4",
  Heading5 = "h5",
  Heading6 = "h6",
  Span = "span",
}

interface PropsType {
  containerTag: Tags;
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

const Text: FC<PropsType> = ({
  containerTag,
  children,
  className,
  onClick,
}) => {
  const Container = containerTag;

  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Text;
