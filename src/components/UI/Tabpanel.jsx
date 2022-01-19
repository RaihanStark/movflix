function Tabpanel({ tabName, tabValue, tabId, children }) {
  return (
    <div
      role="tabpanel"
      hidden={tabValue !== tabName}
      id={`full-width-tabpanel-${tabId}`}
      aria-labelledby={`full-width-tab-${tabId}`}
    >
      {children}
    </div>
  );
}

export default Tabpanel;
