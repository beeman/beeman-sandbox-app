export function appMeta(title?: string, description?: string) {
  return [
    { title: `${title ? title + ' | ' : ''}Beemansandboxapp` },
    {
      name: 'description',
      content: description ? description : 'Default Beemansandboxapp description',
    },
  ]
}
