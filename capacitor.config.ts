import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'My Finances Planner App',
    webDir: 'dist',
    server: {
        androidScheme: 'https'
    }
};

export default config;
