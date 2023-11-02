module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 13,
  },
  rules: {
    "max-len": ["error", {
      "code": 50,  
      "ignoreUrls": true, 
      "ignoreStrings": true, 
      "ignoreTemplateLiterals": true, 
    }],
    
  },
};
