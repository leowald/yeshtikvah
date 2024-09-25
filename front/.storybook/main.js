/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-jsdoc-to-mdx",
      options: {
        folderPaths: ["./src/hooks"], // paths to folders with JS/TS code
        extensions: ["ts", "js", "jsx"], // file extensions to include
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
