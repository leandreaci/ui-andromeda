import { FormBuilderValidationProps } from '../form-builder.types'

export class FormBuilderItemHelper {
  private readonly validations: FormBuilderValidationProps[]

  constructor (data: FormBuilderValidationProps[] = []) {
    this.validations = data
  }

  static init (validations: FormBuilderValidationProps[] = []) {
    return new FormBuilderItemHelper(validations)
  }

  private hasValidation (): boolean {
    return !!this.validations?.length
  }

  isRequired (): boolean {
    // console.log(this.validations)
    if (!this.hasValidation()) return false
    return this.validations.some(validation => validation.type === 'required')
  }
}
