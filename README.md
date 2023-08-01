```bash
aa
```

## EXAMPLES
https://github.com/speedfl/argocd-applicationset-extension/tree/master
https://github.com/argoproj-labs/argocd-extension-metrics/tree/main


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

// get ui customs
window.extensions