import '!style-loader!css-loader!sass-loader!../src/assets/css/styles.css'
import {addDecorator} from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      date: /Date$/
    },
  },
  options: {
    storySort: {
      order: ['Home', '*']
    }
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true },
  },
}

addDecorator(story => {
  return (
    <MemoryRouter initialEntries={['/?page=1']}>
      <div id="app-root">
        {story()}
      </div>
      <div id="alert-portal" />
    </MemoryRouter>
  )
});
