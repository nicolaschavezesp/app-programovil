// capacitor-config.ts

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Registrappduoc',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Storage: {
      allowed: ["get", "set", "remove"]
    },
    Geolocation: {
      someConfig: true
    }
  }
};

export default config;
