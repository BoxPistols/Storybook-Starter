import type { Preview } from "@storybook/react";
import "../src/index.css";
import { TokenClass } from "typescript";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered",
    docs: {
      toc: true,
    },
  },
};

export default preview;
