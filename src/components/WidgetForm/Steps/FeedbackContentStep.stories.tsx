import {
  FeedbackContentStep,
  FeedbackContentStepProps
} from './FeedbackContentStep'
import { rest } from 'msw'
import { Meta, StoryObj } from '@storybook/react'
import { Popover } from '@headlessui/react'
import { feedbackTypes } from '..'

export default {
  title: 'Widget UI/FeedbackContentStep',
  component: FeedbackContentStep,
  args: {
    feedbackType: 'OTHER'
  },
  parameters: {
    msw: {
      handles: [
        rest.post('/feedbacks', (req, res) => {
          return res()
        })
      ]
    }
  },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: {
        type: 'inline-radio'
      }
    }
  },
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
} as Meta<FeedbackContentStepProps>

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'BUG'
  }
}
export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'IDEA'
  }
}
export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'OTHER'
  }
}
