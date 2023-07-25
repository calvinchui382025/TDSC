import * as React from 'react';
import { Html } from '@react-email/html';
// @ts-ignore
import { Button } from '@react-email/button';

export function EmailTemplate(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}