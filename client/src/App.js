import { Admin, Resource, EditGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { EmployeeList } from './EmployeeList';
import authProvider from './authProvider';
import { PostEdit } from './EmployeeEdit';

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={simpleRestProvider('http://localhost:3000')}>
      <Resource name="employee" list={EmployeeList} edit={PostEdit} />
    </Admin>
  );
}

export default App;
