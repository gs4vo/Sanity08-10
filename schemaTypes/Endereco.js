import {defineField, defineType} from 'sanity'

export const enderoType = defineType({
  name: 'Endereco',
  title: 'Endereco',
  type: 'document',
  fields: [
    defineField({
        name: 'Rua',
        type: 'string',
      }),
      defineField({
        name: 'Bairro',
        type: 'string',
      }),
      defineField({
        name: 'Cidade',
        type: 'string',
      }),
      defineField({
        name: 'Estado',
        type: 'string',
      }),
      defineField({
        name: 'Pais',
        type: 'string',
      }),
      defineField({
        name: 'cep',
        type: 'string',
      }),
  ],
})
