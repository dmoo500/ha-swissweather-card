// Home Assistant Types for 2025.8+
export interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  config: HassConfig;
  themes: Themes;
  selectedTheme: string | null;
  panels: { [panel_id: string]: HassPanel };
  panelUrl: string;
  language: string;
  selectedLanguage: string | null;
  resources: { [language: string]: { [category: string]: string } };
  localize: (key: string, ...args: any[]) => string;
  translationMetadata: TranslationMetadata;
  suspendWhenHidden: boolean;
  enableShortcuts: boolean;
  vibrate: boolean;
  dockedSidebar: 'docked' | 'auto';
  defaultPanel: string;
  moreInfoEntityId: string | null;
  user?: CurrentUser;
  userData?: CoreFrontendUserData | null;
  hassUrl(path?: string): string;
  callService(
    domain: string,
    service: string,
    serviceData?: { [key: string]: any },
    target?: HassServiceTarget
  ): Promise<HassServiceResponse>;
  callApi<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    parameters?: { [key: string]: any },
    headers?: { [key: string]: string }
  ): Promise<T>;
  fetchWithAuth(path: string, init?: { [key: string]: any }): Promise<Response>;
  sendWS(msg: MessageBase): void;
  callWS<T>(msg: MessageBase): Promise<T>;
  connection: Connection;
}

export interface LovelaceCardEditor {
  hass?: HomeAssistant;
  lovelace?: any;
  setConfig(config: LovelaceCardConfig): void;
}

export interface LovelaceCardConfig {
  type: string;
  [key: string]: any;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  last_changed: string;
  last_updated: string;
  attributes: HassEntityAttributeBase & { [key: string]: any };
  context: HassContext;
}

export interface HassEntityAttributeBase {
  friendly_name?: string;
  unit_of_measurement?: string;
  icon?: string;
  entity_picture?: string;
  supported_features?: number;
  hidden?: boolean;
  assumed_state?: boolean;
  device_class?: string;
  state_class?: string;
}

export interface WeatherEntity extends HassEntity {
  attributes: HassEntityAttributeBase & {
    temperature: number;
    temperature_unit: string;
    humidity: number;
    pressure: number;
    pressure_unit: string;
    wind_speed: number;
    wind_speed_unit: string;
    wind_bearing: number;
    visibility: number;
    visibility_unit: string;
    precipitation: number;
    precipitation_unit: string;
    forecast: WeatherForecast[];
    attribution?: string;
  };
}

export interface WeatherForecast {
  datetime: string;
  temperature: number;
  templow?: number;
  condition: WeatherCondition;
  precipitation?: number;
  precipitation_probability?: number;
  wind_speed?: number;
  wind_bearing?: number;
  humidity?: number;
  pressure?: number;
}

export type WeatherCondition =
  | 'clear-night'
  | 'cloudy'
  | 'exceptional'
  | 'fog'
  | 'hail'
  | 'lightning'
  | 'lightning-rainy'
  | 'partlycloudy'
  | 'pouring'
  | 'rainy'
  | 'snowy'
  | 'snowy-rainy'
  | 'sunny'
  | 'windy'
  | 'windy-variant';

export interface HassConfig {
  latitude: number;
  longitude: number;
  elevation: number;
  unit_system: HassUnitSystem;
  location_name: string;
  time_zone: string;
  components: string[];
  config_dir: string;
  allowlist_external_dirs: string[];
  allowlist_external_urls: string[];
  version: string;
  config_source: string;
  recovery_mode: boolean;
  state: 'NOT_RUNNING' | 'STARTING' | 'RUNNING' | 'STOPPING' | 'FINAL_WRITE';
  external_url: string | null;
  internal_url: string | null;
  currency: string;
  country: string | null;
  language: string;
}

export interface HassUnitSystem {
  length: string;
  mass: string;
  temperature: string;
  volume: string;
}

export interface HassContext {
  id: string;
  parent_id?: string;
  user_id?: string;
}

export interface HassServiceTarget {
  entity_id?: string | string[];
  device_id?: string | string[];
  area_id?: string | string[];
  label_id?: string | string[];
}

export interface HassServiceResponse {
  context: HassContext;
  response?: any;
}

export interface Themes {
  default_theme: string;
  default_dark_theme: string | null;
  themes: { [theme_name: string]: ThemeVars };
  darkMode: boolean;
}

export interface ThemeVars {
  [key: string]: string;
}

export interface HassPanel {
  component_name: string;
  config: { [key: string]: any } | null;
  icon: string | null;
  title: string | null;
  url_path: string;
}

export interface TranslationMetadata {
  fragments: string[];
  translations: {
    [language: string]: {
      [fragment: string]: { [key: string]: string };
    };
  };
}

export interface CurrentUser {
  id: string;
  name: string;
  is_owner: boolean;
  is_admin: boolean;
  credentials: Credential[];
  mfa_modules: MfaModule[];
}

export interface Credential {
  auth_provider_type: string;
  auth_provider_id: string;
}

export interface MfaModule {
  id: string;
  name: string;
  enabled: boolean;
}

export interface CoreFrontendUserData {
  showAdvanced?: boolean;
  [key: string]: any;
}

export interface Connection {
  readyState: number;
  addEventListener(event: string, listener: Function): void;
  removeEventListener(event: string, listener: Function): void;
  sendMessage(message: any): void;
  close(): void;
}

export interface MessageBase {
  id?: number;
  type: string;
}

// Swiss Weather Warning Types
export interface SwissWeatherWarning {
  id: string;
  level: 1 | 2 | 3 | 4 | 5; // Warnstufen: 1=Info, 2=Gelb, 3=Orange, 4=Rot, 5=Violett
  type: WeatherWarningType;
  title: string;
  description: string;
  valid_from: string;
  valid_to: string;
  regions: string[];
  phenomena: string[];
}

export type WeatherWarningType =
  | 'wind'
  | 'rain'
  | 'snow'
  | 'thunderstorm'
  | 'ice'
  | 'heat'
  | 'cold'
  | 'flood'
  | 'avalanche'
  | 'forest_fire';

// Card Configuration Types
export interface SwissMeteoCardConfig {
  type: 'custom:swissmeteo-card';
  entity: string;
  location?: string;
  warning_entity?: string;
  wind_entity?: string;
  wind_direction_entity?: string;
  sunshine_entity?: string;
  precipitation_entity?: string;
  show_forecast?: boolean;
  show_hourly?: boolean;
  show_warnings?: boolean;
  show_precipitation?: boolean;
  compact_mode?: boolean;
  theme?: 'light' | 'dark' | 'auto';
}
