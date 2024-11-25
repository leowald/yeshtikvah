import Alert from "./Alert";

export default {
  component: Alert,
  title: "Example/Alert",
};

export const AlertComponentFlexed = {
  args: {
    type: "secondary",
    children: (
      <>
        <p>This text is in the Alert box</p>
        <p>It is flexed</p>
      </>
    ),
    flex: true,
  },
  tags: ["autodocs"],
};
export const AlertComponentNotFlexed = {
  args: {
    type: "warning",
    children: (
      <>
        <p>This text is in the Alert box</p>
        <p>This is not flexed</p>
      </>
    ),
    flex: false,
  },
  tags: ["autodocs"],
};
