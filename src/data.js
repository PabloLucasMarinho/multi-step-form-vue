export const SIDEBAR = [
  {
    id: "stepOne",
    step: 1,
    label: "Your info",
    isActive: true,
  },
  {
    id: "stepTwo",
    step: 2,
    label: "Select plan",
    isActive: false,
  },
  {
    id: "stepThree",
    step: 3,
    label: "Add-ons",
    isActive: false,
  },
  {
    id: "stepFour",
    step: 4,
    label: "Summary",
    isActive: false,
  },
];

export const FORM_INPUT = [
  {
    id: "name",
    label: "Name",
    placehoder: "e.g. Stephen King",
    type: "text",
    pattern: "[A-Za-z]+",
    autocomplete: "name",
  },
  {
    id: "email",
    label: "Email Address",
    placehoder: "e.g. stephenking@lorem.com",
    type: "email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
    autocomplete: "email",
  },
  {
    id: "tel",
    label: "Phone Number",
    placehoder: "e.g. Your info",
    type: "tel",
    pattern: "\+[0-9]{1,3} [0-9]{3} [0-9]{3} [0-9]{3}", // prettier-ignore
    autocomplete: "tel",
  },
];
