import * as React from 'react';

export const Extension = (props: any) => {
  
  function handleClick(event:any) { 
    
    console.log(event) 
    console.log(props);
    
  } 

return (
  <div>
    <div onClick={handleClick}>
      
      Hello World 
      
    </div> 
    Hello 2
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