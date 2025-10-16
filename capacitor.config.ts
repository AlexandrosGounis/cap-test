import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'cap-test',
  webDir: 'dist/cap-test/browser',
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true
  },
  android: {
    allowMixedContent: true,
    captureInput: true
  }
};

export default config;
