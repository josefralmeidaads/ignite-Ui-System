import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus expedita fuga recusandae provident quae incidunt error eligendi dolorem aspernatur et dignissimos perferendis voluptas veritatis deserunt, placeat quis eius quisquam nostrum?',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
