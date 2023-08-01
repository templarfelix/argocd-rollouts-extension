import * as React from 'react';

export const Extension = (props: any) => {
  

  return (
    <div>hello</div>
  );
};

export const component = Extension;

((window: any) => {
   window.extensionsAPI.registerAppViewExtension(
    component,
    "Argo Rollouts",
    "fa-flask"
  );
})(window);