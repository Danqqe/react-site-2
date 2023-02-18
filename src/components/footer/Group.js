import './Group.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState } from 'react';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function GroupExample() {
  return (
    <CardGroup className='margintopofcard'>
      <Card className='float1'>
        <Card.Img variant="top" className='photo1' width={100} height={250} src="/img/1655682494_62-kartinkin-net-p-kartinki-tvoroga-66.jpg" />
        <Card.Body>
          <Card.Title className='textname'>Творог обыкновенный</Card.Title>
          <hr></hr>
          <h6 className='cena'>Цена:</h6>
          <Card.Text>
          430₽/унция
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='float2'>
        <Card.Img variant="top" className='photo2' width={100} height={250} src="/img/2708818.jpg" />
        <Card.Body>
          <Card.Title className='textname'>Творог Мамин</Card.Title>
          <hr></hr>
          <h6 className='cena'>Цена:</h6>
          <Card.Text>
          755₽/унция
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='float3'>
        <Card.Img variant="top" className='photo3' width={100} height={250} src="/img/5b0532c915e9f966505dbd80.jpg" />
        <Card.Body>
          <Card.Title className='textname'>Творог Бабушкин</Card.Title>
          <hr></hr>
          <h6 className='cena'>Цена:</h6>
          <Card.Text>
          800₽/унция
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='float4'>
        <Card.Img variant="top" className='photo4' width={100} height={250} src="/img/obezzhirennyj-tvorog-polza-i-vred-pishchevaya-i-energeticheskaya-cennost-4.jpg" />
        <Card.Body>
          <Card.Title className='textname'>Творог ПАПИТУС</Card.Title>
          <hr></hr>
          <h6 className='cena'>Цена:</h6>
          <Card.Text>
          210₽/унция
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    
  );
}

export default GroupExample;

// function ToggleButtonGroupControlled() {
//   const [value, setValue] = useState([1, 3]);

//   const handleChange = (val) => setValue(val);

//   return (
//     <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
//       <ToggleButton id="tbg-btn-1" value={1}>
//         Option 1
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-2" value={2}>
//         Option 2
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-3" value={3}>
//         Option 3
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// render(<ToggleButtonGroupControlled />);