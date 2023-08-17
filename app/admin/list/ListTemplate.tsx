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
// @ts-ignore
// import { Column } from '@react-email/column';
// @ts-ignore
// import { Hr } from '@react-email/hr';
//======================================================
const root = {
  backgroundColor: '#f1f7fb'
}

const wrapper = {
}

const imageSection = {
  backgroundColor: "#ffffff",
};

const textSection = {

};

const image = {
}

const footerSection = {
  backgroundColor: '#e0ecf4',
  textAlign: 'center' as 'center',
}

const textContainer = {
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
};

const signOffText = {
  fontSize: "18px",
  lineHeight: "1.4",
}
//======================================================
export function EmailTemplate(selectedRange: string, emailBody: string, emailSignOff: string) {

  const showSignOFf = emailSignOff.length > 0;

  return (
    <Html style={root}>
      <Section style={wrapper}>

      <Section style={imageSection}>
        <Container>

          <Img 
            src='https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/304902026_522454213214193_3997819596518424032_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7Biz5wqSuhwAX9Wu_hW&_nc_ht=scontent-hou1-1.xx&oh=00_AfBlrMcVwOCK2krLiZOT4ITB_pvFGAvaX7vtXGG31uNpbw&oe=64C60661' 
            alt='TDSC Logo'
            // height='250px'
            // width='250px'
            style={image}
          />
        </Container>
      </Section>

      {/* <Hr /> */}

      <Section style={textSection}>
        <Container style={textContainer}>
          <Text style={heading}>{selectedRange}</Text>
          <Text style={paragraph}>{emailBody}</Text>
        </Container>
      </Section>

      {showSignOFf && (
      <Section>
        <Container>
          <Text style={signOffText}>Sincerely,</Text>
          <Text style={signOffText}>{emailSignOff}</Text>
        </Container>
      </Section>
      )}

      <Section style={footerSection}>
        <Text>
          Texas Defensive Shooting Club | 6114 Watford Bend, Rosenburg, TX 77471
        </Text>

      </Section>

      </Section>
    </Html>
  );
}