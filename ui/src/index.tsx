import * as React from 'react';

export const Extension = (props: {
  application: any
  tree:any
}) => {
  
  function handleClick(event:any) { 
    
    console.log(event) 
    console.log(props);
    
  } 

return (
  <div>
    <div onClick={handleClick}>
      
      Hello World 
      
    </div> 
    Hello 3
    {props?.application?.kind}
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