import { render as testingLibraryRender } from '@testing-library/react'
import React from 'react'
import { UiThemeProvider } from '~/ui/ui-theme-provider'
import { UiContextProvider } from '~/ui/ui-context-provider'
import { BrowserRouter } from 'react-router'

export function testRender(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <BrowserRouter>
        <UiContextProvider config={{ name: 'Beeman Sandbox Test', logo: '/logo.svg' }}>
          <UiThemeProvider colorScheme="dark" env="test">
            {children}
          </UiThemeProvider>
        </UiContextProvider>
      </BrowserRouter>
    ),
  })
}
