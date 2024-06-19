import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="blood group" source="bloodGroup" />
        <TextInput label="name" source="name" />
        <TextInput label="phone number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
