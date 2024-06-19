import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="blood group" source="bloodGroup" />
        <TextInput label="name" source="name" />
        <TextInput label="phone number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
