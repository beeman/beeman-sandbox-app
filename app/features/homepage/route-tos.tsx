import { Paper, Stack, Text } from '@mantine/core'
import { appMeta } from '~/lib/helpers/app-meta'

export function meta() {
  return appMeta('Terms of Service')
}

export default function RouteTos() {
  return (
    <Stack p="xl" gap="xl">
      <Paper withBorder p="md">
        <Stack>
          <Text>Terms of Service</Text>
          <Text>By accessing or using Beeman Sandbox, you agree to be bound by these Terms of Service.</Text>
          <Text>
            You are responsible for your use of the service and for any content you provide. You must comply with all
            applicable laws, rules, and regulations.
          </Text>
          <Text>
            We reserve the right to modify these terms at any time. Your continued use of the service constitutes your
            acceptance of the revised terms.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  )
}
