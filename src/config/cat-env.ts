type Config = {
  [key: string]: { [key: string]: any };
};

export class CatEnv<T extends Config> {
  env: keyof T;
  config: T;
  modes: { [key in keyof T]: key };
  appConfig: T[keyof T];

  constructor(config: T) {
    this.config = config;
    this.env = process.env.APP_ENV as keyof T;

    this.modes = Object.keys(config).reduce((acc, key) => {
      acc[key as keyof T] = key as keyof T;
      return acc;
    }, {} as { [key in keyof T]: key });

    this.appConfig = config[this.env];
  }

  getAppConfig(env?: keyof T): T[keyof T] | null {
    return this.config[env || this.env] || null;
  }
}
