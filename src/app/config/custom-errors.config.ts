import {ErrorMessage} from "ng-bootstrap-form-validation";

export const CustomErrorFactory = (): ErrorMessage[] => {
  return [
      {
        error: "required",
        format: (label = '') => requiredFormat(label)
      },
      {
        error: "pattern",
        format: (label= '') => patternFormat(label)
      },
      {
        error: "minlength",
        format: (label= '', input) => minLengthFormat(label, input)
      },
      {
        error: "maxlength",
        format: (label= '', input) => maxLengthFormat(label, input)
      },
      {
        error: "max",
        format: (label= '', input) => maxFormat(label, input)
      },
  ];
}

export function requiredFormat(label = ''): string {
  return `${label} es requerido`;
}
export function patternFormat(label = ''): string {
  return `${label} es invalido`;
}
export function minLengthFormat(label = '', input: any): string {
  return `${label} debe tener al menos ${input.requiredLength} caracteres`;
}

export function maxLengthFormat(label = '', input: any): string {
  return `${label} no debe tener más de ${input.requiredLength} caracteres`;
}

export function maxFormat(label = '', input: any): string {
  return `${label} no debe ser mayor ${input.requiredLength}`;
}


