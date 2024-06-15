import '@mantine/core/styles.css';
import { useEffect, useState } from 'react';
import { LoaderItem } from '../components/Loader/LoaderItem.tsx';
import { axiosCall } from '../modules/axiosCall.js';
import { useNavigate } from 'react-router-dom';
import { CampSelect } from '../components/Auth/CampSelect.tsx';

function CampsPage(props) {
  const navigate = useNavigate()
  const [camps, setCamps] = useState([])

  useEffect(() => {
    getMyCamps()
  }, [])

  const getMyCamps = async () => {
    await axiosCall('GET', 'http://localhost:5000/api/getmycamps', {})
    .then((res) => {
      setCamps(res.data)
      console.log('setCamps ok ', res.data)
    })
    .catch((error) => {
        console.log(error.response.data.message)
    })
  }
  const selectCamp = (camp) => {
    console.log(camp)
    sessionStorage.setItem('campId', camp)
    navigate('/main')
  }

  if(camps.length){
      return (
            <div>
              <CampSelect
              camps={camps}
              text={props.text}
              clickOnBut={selectCamp} 
              />
            </div>
      );
  }
  else{
    return (
      <div className={'mainScreenLoader'}><LoaderItem/></div>
    )
  }

}

export default  CampsPage;
