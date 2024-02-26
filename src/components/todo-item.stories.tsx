import type { Meta, StoryObj } from "@storybook/react";

import TodoItem from "./todo-item";

const meta: Meta<typeof TodoItem> = {
  title: "TodoItem",
  component: TodoItem,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Buy milk",
  },
};
