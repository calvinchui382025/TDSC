import * as React from 'react';
import { Html } from '@react-email/html';
// @ts-ignore
import { Text } from "@react-email/text";
// @ts-ignore
import { Section } from "@react-email/section";
// @ts-ignore
import { Container } from "@react-email/container";
// @ts-ignore
import { Img } from '@react-email/img';
//======================================================
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

//======================================================
export function EmailTemplate(selectedRange: string, emailBody: string) {

  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Img 
            src='https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/304902026_522454213214193_3997819596518424032_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7Biz5wqSuhwAX9Wu_hW&_nc_ht=scontent-hou1-1.xx&oh=00_AfBlrMcVwOCK2krLiZOT4ITB_pvFGAvaX7vtXGG31uNpbw&oe=64C60661' 
            alt='TDSC Logo'
          />
          <Text style={heading}>{selectedRange}</Text>
          <Text style={paragraph}>{emailBody}</Text>
        </Container>
      </Section>
    </Html>
  );
}