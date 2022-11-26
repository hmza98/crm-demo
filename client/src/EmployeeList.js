import { 
  Datagrid, 
  List,  
  TextField, 
  SimpleShowLayout, 
  RichTextField,
  Edit,
  SimpleForm,
  TextInput,
  DatagridConfigurable,
  SelectColumnsButton,
  TopToolbar,
  CreateButton,
  FilterButton,
  FilterForm,
  ListBase,
  Pagination,
  EditButton
} from 'react-admin';

import { useRecordContext, useResourceContext } from 'react-admin';

import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';



const PostListActions = () => (
  <TopToolbar>
      <SelectColumnsButton />
  </TopToolbar>
);

// const PostPanel = () => {
//     const record = useRecordContext();
//     console.log("the record is", record);
//     return (
//         <div dangerouslySetInnerHTML={{ __html: record.NOTES }} />
//     );
// };
// const PostShow = () => (
//   <SimpleShowLayout>
//       <RichTextField source="NOTES" />
//   </SimpleShowLayout>
// );

const PostEdit = () => {
  const record = useRecordContext();
  const resource = useResourceContext();
  console.log("Recoprd", record)
  console.log("Recoprd", resource)
  return (
      <Edit
          resource={resource}
          id={record.id}
          /* disable the app title change when shown */
          title=" "
      >
          <SimpleForm>
              <RichTextField source="NOTES" />
          </SimpleForm>
      </Edit>
  );
};

export const PostFilterSidebar = () => (
  <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
          <SavedQueriesList />
          <FilterLiveSearch />
          <FilterList label="Subscribed to newsletter" icon={<MailIcon />}>
              <FilterListItem label="Yes" value={{ has_newsletter: true }} />
              <FilterListItem label="No" value={{ has_newsletter: false }} />
          </FilterList>
          <FilterList label="Category" icon={<CategoryIcon />}>
              <FilterListItem label="Tests" value={{ category: 'tests' }} />
              <FilterListItem label="News" value={{ category: 'news' }} />
              <FilterListItem label="Deals" value={{ category: 'deals' }} />
              <FilterListItem label="Tutorials" value={{ category: 'tutorials' }} />
          </FilterList>
      </CardContent>
  </Card>
);


export const EmployeeList = ({props}) => (
    <List 
    {...props}>
    <DatagridConfigurable 
      size="medium" 
      rowClick="edit" 
      expand={PostEdit} 
      expandSingle
    >
      <TextField source="Location" />
      <TextField source="First Name:" />
      <TextField source="Last Name:" />
      <TextField source="Email" />
      <EditButton/>
    </DatagridConfigurable>
    </List>
);