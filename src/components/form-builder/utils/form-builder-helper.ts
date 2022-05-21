import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { FormBuilderGroup, FormBuilderItem } from '../form-builder.types'

export class FormBuilderHelper {
  private readonly initialValues: FormikValues
  private readonly groups: FormBuilderGroup[]
  private fieldsWithValidations: FormBuilderItem[]|never

  constructor (data: FormBuilderGroup[]) {
    this.groups = data
    this.initialValues = {}
    this.fieldsWithValidations = []
  }

  private createYupSchema (schema: any, data: FormBuilderItem) {
    const { name, validations = [], validationType = 'string' } = data

    if (!(Yup as any)[validationType]) return schema

    let validator = (Yup as any)[validationType]()

    validations.forEach((validation) => {
      const { params, type } = validation
      if (!validator[type]) return
      validator = validator[type](...params!)
    })

    schema[name] = validator
    return schema
  }

  private validateSchema () {
    const yupSchema = this.fieldsWithValidations.reduce(this.createYupSchema, {})
    return Yup.object().shape(yupSchema)
  }

  private mapper () {
    this.groups.forEach(group => {
      group.items.forEach(item => {
        if (item) {
          const value = item.value || ''
          Reflect.set(
            this.initialValues,
            item.name,
            ['select'].includes(item.component || '')
              ? value ? JSON.stringify(value) : value
              : value
          )
          if (item?.validations) {
            this.fieldsWithValidations.push(item)
          }
        }
      })
    })

    return {
      initialValues: this.initialValues,
      validationSchema: this.validateSchema()
    }
  }

  static init (data: FormBuilderGroup[]) {
    return new FormBuilderHelper(data)
  }

  build () {
    return this.mapper()
  }
}
