import GoogleSheetsProvider, {withGoogleSheets} from 'react-db-google-sheets';
import {useContext} from 'react';
import PortraitTile from './PortraitTile.tsx'
import './portraits.css'

function Portraits(props) {
   return <div className='portraits'>
    {props?.db?.inmemory?.map(data => (
      <PortraitTile data={data} />
    ))}
  </div>
  }

  export default withGoogleSheets('inmemory')(Portraits);

