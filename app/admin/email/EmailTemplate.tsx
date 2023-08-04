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
// import TDSCImage from './TDSCImage.jpg'
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

const addresses = {
  'Wallis-Orchard Gun Range': '12206 Reinecke Rd, Wallis, TX 77485',
  'G2G Gun Range': '25635 Southwest Fwy, Rosenberg, TX 77471',
}
export function EmailTemplate(selectedRange: string, emailBody: string, emailSignOff: string) {
  const showSignOFf = emailSignOff.length > 0;

  return (
    <Html style={root}>
      <Section style={wrapper}>

      <Section style={imageSection}>
        <Container>

          <Img 
            // src='https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/304902026_522454213214193_3997819596518424032_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R-Vj2CftYI8AX-X7Zhj&_nc_ht=scontent-hou1-1.xx&oh=00_AfBoebeQ2zmwSwrm4wmf_-ptKEk0fXcaflaGfhGTs0Ueeg&oe=64D1E3E1' 
            src='http://www.tacticalpoppins.com/images/matches/TDSC.png'
            // src='./TDSCImage.jpg'
            // src={TDSCImage}
            alt='TDSC Logo'
            height='500px'
            width='500px'
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
          Texas Defensive Shooting Club | {addresses[selectedRange] || 'Houston, TX'}
        </Text>

      </Section>

      </Section>
    </Html>
  );
}