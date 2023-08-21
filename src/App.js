// import React, { useState } from 'react';
// import Input from './Input';
// import Button from './Button';
// import Card from './Card';
// import Select from './Select';
// import Table from './Table';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [selectValue, setSelectValue] = useState('');
//   const options = [
//     { label: 'GTR R34', value: 'option1' },
//     { label: 'Supra A80', value: 'option2' },
//     { label: 'Mazda RX7', value: 'option3' },
//   ];
//   const tableData = [
//     { id: 1, name: 'Shahmeer', email: 'shahmeeer.khan.6969@gmail.com' },
//     { id: 2, name: 'Fahad', email: 'fahad.khan.6969@gmail.com' },
//   ];

//   return (
//     <div>
//       <Input placeholder="Enter Car Name " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//       <Button label="Search" onClick={() => console.log('Button clicked')} />

//       <Select options={options} value={selectValue} onChange={(e) => setSelectValue(e.target.value)} />
//       <Table data={tableData} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Card from './Card';
import Select from './Select';
import Table from './Table';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = e => {
    setSelectValue(e.target.value);
  };

  const data = [
    { Name: 'GTR', model: 'R34', Country: 'Japan' },
    { Name: 'Supra', model: 'A80', Country: 'Japan' },
    { Name: 'MAZDA', model: 'RX7', Country: 'Japan' },
  ];

  return (
    <div>
      <h1 className='hed1'>Components Example</h1>
      <Input
        type="text"
        placeholder="Enter Car Model"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button label="Search" onClick={() => alert('Button clicked!')} />
      <Card title="JDM Beasts" content="Japnese Domestic Markets Legends" />
      <Select
        options={[
          { label: 'GTR R34', value: 'option1' },
          { label: 'Supra A80', value: 'option2' },
          { label: 'Mazda RX7', value: 'option3' },
        ]}
        value={selectValue}
        onChange={handleSelectChange}
      />
      <Table data={data} />
    </div>
  );
};

export default App;
