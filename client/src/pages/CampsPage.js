import '@mantine/core/styles.css';
import { useEffect, useState } from 'react';
import { fixText } from '../fix/fixText.js';
import { LoaderItem } from '../components/Loader/LoaderItem.tsx';
import { axiosCall } from '../modules/axiosCall.js';
import { useNavigate } from 'react-router-dom';
import { CampSelect } from '../components/Auth/CampSelect.tsx';

function CampsPage() {
  const [camps, setCamps] = useState([])
  const [text, setText] = useState(false)

  useEffect(() => {
    getText()
    getMyCamps()
  }, [])

  const navigate = useNavigate()

  const getText = async () => {
    const res = await fixText()
    setText(res)
  }
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

  const selectCamp = (data) => {
    console.log(data)
    navigate('/main')
  }

  if(camps.length){
      return (
            <div>
              <CampSelect
              camps={camps}
              text={text}
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
