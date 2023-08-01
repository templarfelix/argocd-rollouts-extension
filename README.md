```bash
aa
```


((window) => {
  const component = () => {
    return React.createElement(
      "div",
      { style: { padding: "10px" } },
      "Hello World"
    );
  };
  window.extensionsAPI.registerAppViewExtension(
    component,
    "Test Ext",
    "fa-flask"
  );
})(window);