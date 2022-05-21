import React from 'react'
import { FormBuilder, FormBuilderProps } from '../../../src'
import { FormikProps } from 'formik'

type Values = {
  name: string
  lastname: string
  birthday: string
  email: string
  password: string
}

const address = [
  {
    cep: '45055490',
    city: 'Vitoria da Conquista',
    state: 'ba'
  },
  {
    cep: '46170000',
    city: 'Rio de Contas',
    state: 'ba'
  },
  {
    cep: '01311903',
    city: 'São Paulo',
    state: 'sp'
  }
]

const Example = (args: FormBuilderProps) => {
  const [status, setStatus] = React.useState('')
  const [values, setValues] = React.useState({
    cep: '',
    city: '',
    state: ''
  })

  const [filterState, setFilterState] = React.useState(null)
  const handleDependencyCities = React.useCallback((event: any) => {
    setFilterState(event.currentTarget.value.value)
  }, [])

  return (
    <>
      <FormBuilder
        {...args}
        className="form-builder"
        onSubmit={(values: Values, actions: FormikProps<Values>) => {
          setStatus(JSON.stringify(values))
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 1000)
        }}
        data={[
          {
            name: 'Personal data',
            items: [
              {
                name: 'name',
                component: 'input',
                type: 'text',
                column: 6,
                title: 'Name',
                placeholder: 'Your name',
                mask: '',
                validations: [
                  {
                    type: 'required',
                    params: ['The name is required']
                  }
                ]
              },
              {
                name: 'lastname',
                component: 'input',
                column: 6,
                title: 'Lastname',
                placeholder: 'Your lastname'
              },
              {
                name: 'cep',
                component: 'input',
                mask: '99999-999',
                column: 4,
                title: 'Cep',
                value: values?.cep,
                placeholder: 'Your CEP'
              },
              {
                name: 'state',
                component: 'select',
                options: [
                  { label: 'Bahia', value: 'ba' },
                  { label: 'São Paulo', value: 'sp' }
                ],
                isDisabled: false,
                isLoading: false,
                isClearable: false,
                isSearchable: true,
                column: 4,
                title: 'State',
                onChange: handleDependencyCities
              },
              {
                name: 'city',
                component: 'select',
                options: address
                  .filter(addr => addr.state === filterState)
                  .map(addr => ({
                    label: addr.city,
                    value: addr.city,
                  })
                ),
                column: 4,
                title: 'City',
                placeholder: 'Your city'
              },
              {
                name: 'birthday',
                component: 'datepicker',
                column: 6,
                placeholder: 'Your birthday',
                value: '2021-11-23 00:00:00',
                title: 'Birthday'
              },
              {
                name: 'email',
                title: 'E-mail',
                column: 6,
                component: 'input',
                placeholder: 'Ex: john.smith@email.com',
                validations: [
                  {
                    type: 'required',
                    params: ['The email is required']
                  },
                  {
                    type: 'email',
                    params: ['The email is invalid']
                  }
                ]
              },
              {
                name: 'password',
                title: 'Password',
                component: 'password',
                placeholder: 'Your password',
                column: 6,
                validations: [
                  {
                    type: 'required',
                    params: ['The password is required']
                  },
                  {
                    type: 'min',
                    params: [8, 'Minimum 8 characters']
                  },
                  {
                    type: 'max',
                    params: [24, 'Maximum 8 characters']
                  },
                  {
                    type: 'matches',
                    params: [/[a-z]/, 'A capital (lowercase) letter']
                  },
                  {
                    type: 'matches',
                    params: [/[A-Z]/, 'A capital (uppercase) letter']
                  },
                  {
                    type: 'matches',
                    params: [/[0-9]/, 'A number']
                  },
                  {
                    type: 'matches',
                    params: [/[!@#$%*()_/\\\-+^&{}:;?.]/, 'A special character']
                  }
                ]
              },
              {
                name: 'salary',
                component: 'input',
                column: 6,
                title: 'Salary',
                placeholder: 'Your salary',
                currency: {
                  locale: 'pt-BR',
                  format: 'BRL'
                },
              },
              {
                name: 'phone',
                component: 'input',
                column: 6,
                title: 'Phone',
                placeholder: 'Your phone',
                mask: '(99) 99999 9999'
              },
              {
                name: 'genre',
                component: 'select',
                value: {
                  label: 'Other',
                  value: 'other'
                },
                options: [
                  {
                    label: 'Male',
                    value: 'male'
                  },
                  {
                    label: 'Female',
                    value: 'female'
                  },
                  {
                    label: 'Other',
                    value: 'other'
                  }
                ],
                isDisabled: false,
                isLoading: false,
                isClearable: false,
                isSearchable: true,
                column: 6,
                title: 'Genre'
              },
              {
                name: 'music',
                component: 'select',
                value: [
                  {
                    label: 'Pop',
                    value: 'pop'
                  },
                  {
                    label: 'Blues',
                    value: 'blues'
                  }
                ],
                options: [
                  {
                    label: 'Pop',
                    value: 'pop'
                  },
                  {
                    label: 'Rock',
                    value: 'rock'
                  },
                  {
                    label: 'Jazz',
                    value: 'jazz'
                  },
                  {
                    label: 'Blues',
                    value: 'blues'
                  },
                  {
                    label: 'Classical',
                    value: 'classical'
                  }
                ],
                isMulti: true,
                column: 12,
                title: 'Musical styles'
              },
              {
                name: 'like_pizza',
                title: 'Do you like pizza?',
                component: 'radio',
                value: '0',
                options: [
                  {
                    label: 'Yes',
                    value: 1
                  },
                  {
                    label: 'No',
                    value: 0
                  }
                ]
              },
              {
                name: 'favorite_food',
                title: 'Your favorite food?',
                component: 'checkbox',
                value: ['pizza', 'hamburger'],
                options: [
                  {
                    label: 'Pizza',
                    value: 'pizza'
                  },
                  {
                    label: 'Hamburger',
                    value: 'hamburger'
                  },
                  {
                    label: 'Salade',
                    value: 'salade'
                  },
                  {
                    label: 'Pasta',
                    value: 'pasta'
                  }
                ]
              },
              {
                name: 'about_me',
                component: 'input',
                multiple: true,
                column: 12,
                title: 'About me'
              },
              {
                name: 'file',
                component: 'dropzone',
                title: 'Upload File',
                dropzoneOptions: {
                  accept: 'application/pdf'
                }
              },
              {
                name: 'km',
                component: 'input',
                title: 'Quilometros',
                type: 'number',
                prefix: 'Veloc.',
                suffix: 'km',
                min: 0,
                column: [12, 6, 4]
              },
              {
                name: 'submit',
                component: 'button',
                type: 'submit',
                column: 12,
                label: 'Submit',
                labelLoading: 'Submitting'
              }
            ]
          }
        ]}
      />
      <code>{status}</code>
    </>
  )
}

export default Example
