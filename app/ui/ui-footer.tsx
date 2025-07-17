import { Anchor, Box, Group, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router'
import { useUi } from '~/ui/ui-context'

export function UiFooter() {
  const { config } = useUi()
  return (
    <Box component="footer" ta="center" p="xs">
      <Group justify="center">
        <Text size="xs" c="dimmed">
          {config.name} &copy; 2025
        </Text>
        <Anchor component={Link} to="/privacy" size="xs">
          Privacy
        </Anchor>
        <Anchor component={Link} to="/tos" size="xs">
          Terms
        </Anchor>
      </Group>
    </Box>
  )
}
