module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb',
    'plugin:prettier/recommended', // Prettier 설정 추가
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    // 여기에 프로젝트에 필요한 추가 규칙을 정의합니다.
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react-native/no-inline-styles': 'off',
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강제
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']] },
    ], // import 순서 강제
    'import/no-unused-modules': ['error', { unusedExports: true }], // 사용되지 않는 모듈 금지
    'prettier/prettier': 'error', // Prettier 설정 적용
  },
};
