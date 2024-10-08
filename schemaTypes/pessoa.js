import {defineField, defineType} from 'sanity'

export const pessoaType = defineType({
  name: 'Pessoa',
  title: 'Pessoa',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        type: 'string',
      }),
    defineField({
        name: 'idade',
        type: 'date',
      }),
    defineField({
        name: 'foto',
        type: 'image',
      }),
    defineField({
        name: 'data_de_nascimento',
        type: 'date',
      }),
    defineField({
        name: 'email',
        type: 'string',
      }),
    defineField({
        name: 'telefone',
        type: 'string',
      }),
    defineField({
        name: 'imagem_de_perfil',
        type: 'image',
      }),
    defineField({
        name: 'ativo',
        type: 'boolean',
      }),
      defineField({
          name: 'endereco',
          type: 'Endereco',
        }),
  ],
})
