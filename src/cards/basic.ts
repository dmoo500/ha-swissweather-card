export type BasicCardConfig = {
  type: string;
  entity: string;
  sun_entity?: string;
  grid_options?: {
    columns?: number;
    rows?: number;
  };
};
