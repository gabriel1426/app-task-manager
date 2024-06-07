import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.task.manager.cgcg',
  appName: 'App Task Manager',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: [],
    },
  },
};

export default config;
