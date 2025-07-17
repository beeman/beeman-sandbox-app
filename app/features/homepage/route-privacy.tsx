import { Paper, Stack, Text } from '@mantine/core'
import { appMeta } from '~/lib/helpers/app-meta'

export function meta() {
  return appMeta('Privacy Policy')
}

export default function RoutePrivacy() {
  return (
    <Stack p="xl" gap="xl">
      <Paper withBorder p="md">
        <Stack>
          <Text>Privacy Policy</Text>
          <Text>
            Beeman Sandbox is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            and disclose your personal information.
          </Text>
          <Text>
            We collect information you provide directly to us, such as when you create an account. We may also collect
            information automatically as you navigate the site.
          </Text>
          <Text>
            The information we collect is used to provide and improve our services, and to communicate with you. We do
            not share your personal information with third parties except as described in this Privacy Policy.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  )
}
