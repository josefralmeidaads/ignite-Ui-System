import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Processar',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
    children: 'Processar',
  },
}
