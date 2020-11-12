export type TConfig = {
  debug: boolean;
};

export class ConfigService {
  private config: TConfig = {
    debug: false,
  };

  updateConfig = (config: Partial<TConfig>) => {
    this.config = { ...this.config, ...config };
  };

  isDebug = () => this.config.debug;
}
