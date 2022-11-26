import * as React from "react";
import {  SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
//import RichTextInput from 'ra-input-rich-text';
import { Typography, Box } from '@material-ui/core'
import {
  TabbedForm,
  FormTab,
  Edit,
  NumberInput,    
  BooleanInput,
} from 'react-admin';

const Aside = () => (
  <Box sx={{ width: '200px', margin: '1em' }}>
      <Typography variant="h6">Instructions</Typography>
      <Typography variant="body2">
          Posts will only be published once an editor approves them
      </Typography>
  </Box>
);

// export const PostEdit = () => (
//     <Edit aside={<Aside />}>
//         <SimpleForm>
//             <TextInput disabled label="Id" source="id" />
//             <TextInput source="title" validate={required()} />
//             <TextInput multiline source="teaser" validate={required()} />
            
//             <DateInput label="Publication date" source="published_at" />
//             <ReferenceManyField label="Comments" reference="comments" target="post_id">
//                 <Datagrid>
//                     <TextField source="body" />
//                     <DateField source="created_at" />
//                     <EditButton />
//                 </Datagrid>
//             </ReferenceManyField>
//         </SimpleForm>
//     </Edit>
// );



export const PostEdit = () => (
  <Edit aside={<Aside/>}>
      <TabbedForm>
          <FormTab label="summary">
              <TextInput disabled label="Id" source="id" />
              <TextInput source="title" validate={required()} />
              <TextInput multiline source="teaser" validate={required()} />
          </FormTab>
          <FormTab label="body">
              <TextInput source="body" validate={required()} label={false} />
          </FormTab>
          {/* <FormTab label="Miscellaneous">
              <TextInput label="Password (if protected post)" source="password" type="password" />
              <DateInput label="Publication date" source="published_at" />
              <NumberInput source="average_note" validate={[  ]} />
              <BooleanInput label="Allow comments?" source="commentable" defaultValue />
              <TextInput disabled label="Nb views" source="views" />
          </FormTab> */}
          <FormTab label="Notes">
              <ReferenceManyField reference="comments" target="post_id" label={false}>
                  <Datagrid>
                      <TextField source="body" />
                      <DateField source="created_at" />
                      <EditButton />
                  </Datagrid>
              </ReferenceManyField>
          </FormTab>
      </TabbedForm>
  </Edit>
);