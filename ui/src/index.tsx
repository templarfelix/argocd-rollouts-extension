import * as React from 'react';

export const Extension = (props: any) => (
  <div>
    Hello CUSTOM{props}
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