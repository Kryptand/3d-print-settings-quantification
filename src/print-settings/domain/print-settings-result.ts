export class PrintSettingsResult {
  id: string;
  printSettings: {
    id: string;
    filament: {
      id: string;
      manufacturer?: string;
      material?: string;
      colour?: string;
      diameter?: string;
      title: string;
    };
    printer: {
      id: string;
      title: string;
    };
    speedInMmPs: string;
    temperatureInDegC: number;
    heatBedTemperatureInDegC: number;
  };
}
