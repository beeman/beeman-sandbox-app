import { Anchor, Group, Paper, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'
import { appMeta } from '~/lib/helpers/app-meta'

export function meta() {
  return appMeta('Home')
}

export default function RouteIndex() {
  return (
    <Stack p="xl" gap="xl">
      <Paper withBorder p="md">
        <Group justify="space-between">
          <Text>Welcome to the Beeman Sandbox.</Text>
          <Text>
            This is a sandbox environment for developing and testing applications. It includes a web application built
            with React Router (v7) and a mobile app built with Expo and React Native Paper. Authentication is provided
            by Privy, allowing users to log in with social accounts or a Solana wallet.
          </Text>
        </Group>
      </Paper>
      <Paper withBorder p="md">
        <Anchor component={Link} to="/todo">
          Todo List
        </Anchor>
      </Paper>
    </Stack>
  )
}
