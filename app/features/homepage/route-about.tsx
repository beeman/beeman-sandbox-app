import { Anchor, List, Paper, Stack, Text, ThemeIcon } from '@mantine/core'
import { appMeta } from '~/lib/helpers/app-meta'
import { LucideArrowRight } from 'lucide-react'

export function meta() {
  return appMeta('About')
}

export default function RouteAbout() {
  return (
    <Stack p="xl" gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Text size="xl" fw={700}>
            About the Beeman Sandbox
          </Text>
          <Text>
            The Beeman Sandbox is a versatile development environment designed for rapid prototyping and building modern
            applications. It serves as a playground for exploring the integration of cutting-edge technologies for both
            web and mobile platforms.
          </Text>
          <Text>
            Our primary goal is to provide a solid foundation for projects that require a seamless user experience
            across different devices, all powered by a flexible and secure authentication system.
          </Text>

          <Text size="lg" fw={600} mt="md">
            Core Technologies
          </Text>
          <Text>This sandbox is built upon a stack of powerful and popular tools:</Text>
          <List
            spacing="sm"
            size="sm"
            center
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <LucideArrowRight size="1rem" />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Anchor href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
                React Router (v7)
              </Anchor>
              : For declarative routing in the web application.
            </List.Item>
            <List.Item>
              <Anchor href="https://expo.dev/" target="_blank" rel="noopener noreferrer">
                Expo
              </Anchor>
              : To build and deploy the mobile application for both iOS and Android from a single codebase.
            </List.Item>
            <List.Item>
              <Anchor href="https://reactnativepaper.com/" target="_blank" rel="noopener noreferrer">
                React Native Paper
              </Anchor>
              : For a rich and customizable UI component library in the mobile app.
            </List.Item>
            <List.Item>
              <Anchor href="https://www.privy.io/" target="_blank" rel="noopener noreferrer">
                Privy
              </Anchor>
              : Handles the authentication layer, enabling easy sign-ins via social accounts.
            </List.Item>
            <List.Item>
              <Anchor href="https://solana.com/" target="_blank" rel="noopener noreferrer">
                Solana
              </Anchor>
              : High performance blockchain technology for secure, decentralized transactions.
            </List.Item>
          </List>
          <Text mt="md">
            Whether you're looking to experiment with a new feature, learn how these technologies fit together, or
            bootstrap a new project, the Beeman Sandbox is here to help you get started quickly.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  )
}
