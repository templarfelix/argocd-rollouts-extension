import * as React from 'react';

export const Extension = (props: any) => {

  
return (
  <div>
    Hello
  </div>
  );
};

export const component = Extension;

((window: any) => {
   window.extensionsAPI.registerAppViewExtension(
    component,
    "Rolloutssss",
    //"fa-flask"
    "fa-brands fa-earlybirds fa-shake"
  );
})(window);