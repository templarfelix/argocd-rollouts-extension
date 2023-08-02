import * as React from 'react';

export const Extension = (props: {
  status?: any;
  health?: any;
  hook?: boolean;
  root?: any;
}) => (
  <div>
    Hello {props?.hook}
  </div>
  
);

export const component = Extension;

((window: any) => {
   window.extensionsAPI.registerAppViewExtension(
    component,
    "Rolloutssss",
    //"fa-flask"
    "fa-brands fa-earlybirds fa-shake"
  );
})(window);