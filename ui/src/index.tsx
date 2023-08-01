import * as React from 'react';

export const Extension = (props: {
  tree: any;
  resource: any;
}) => (
  <div>
    Hello {props.resource.metadata.name}!
    <div>Hello {props}!</div>
  </div>
  
);

export const component = Extension;