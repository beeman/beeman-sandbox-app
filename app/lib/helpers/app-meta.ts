export function appMeta(title?: string, description?: string) {
  return [
    { title: `${title ? title + ' | ' : ''}Beeman Sandbox` },
    {
      name: 'description',
      content: description ? description : 'Default Beeman Sandbox description',
    },
  ]
}
