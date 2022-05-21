import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: false,
  panelPosition: 'bottom',
  enableShortcuts: false,
  isToolshown: false,
  // theme: themes.dark,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['mist']
  },
  toolbar: {
    fullscreen: {
      hidden: false
    }
  }
});
