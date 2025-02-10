import { StoryObj, Meta } from '@storybook/react'
import { Box, CheckBox, CheckBoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Aceitar Termos:</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
  args: {
    placeholder: 'Termos:',
  },
}

export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    disabled: true,
  },
}
