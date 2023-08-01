import * as React from 'react';

export const Extension = (props: any) => { 
return (
  <div>
    Hello {props}!
  </div>
  
)};

export const component = Extension;

((window: any) => {
   window.extensionsAPI.registerAppViewExtension(
    component,
    "Test Ext",
    "fa-flask"
  );
})(window);