
export interface Field {
  id: number;
  name: string;
}

export interface DataField {
  fields: Field[];
}

export interface FieldsResponse {
  status: number;
  data: DataField;
  success: boolean;
}