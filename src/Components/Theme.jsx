export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // light mode palette
           
          }
        : {
            // dark mode palette
           
          }),
    },
  });
  