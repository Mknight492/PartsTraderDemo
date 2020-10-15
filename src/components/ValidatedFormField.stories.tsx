import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  ValidatedFormField,
  IValidateFormFieldProps,
} from "./ValidatedFormField";
import { PartNumberValidationRules } from "../utilities/regularExpressions/ValidatePartNumber.Regex";

export default {
  title: "Example/ValidatedFormField",
  component: ValidatedFormField,
  argTypes: {
    value: { description: "string", control: "text" },
  },
} as Meta;

const Template: Story<IValidateFormFieldProps<string>> = (args) => (
  <ValidatedFormField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: "test",
  validations: PartNumberValidationRules,
  setValue: (e) => {},
};
