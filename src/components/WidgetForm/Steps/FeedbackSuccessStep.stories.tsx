import { FeedbackSuccessStep } from './FeedbackSuccessStep'
import { Meta, StoryObj } from '@storybook/react'
import { Popover } from '@headlessui/react'

export default {
  title: 'Widget UI/FeedbackSuccessStep',
  component: FeedbackSuccessStep,
  decorators: [
    Story => {
      return (
        <Popover>
          <div className="bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96">
            <Popover.Panel static>{Story()}</Popover.Panel>
          </div>
        </Popover>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}
