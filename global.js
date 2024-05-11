import React, { createContext, useContext, useState } from 'react';
import { Text, View, Button } from 'react-native';

// Context 생성
const GlobalContext = createContext();

// GlobalProvider 컴포넌트 정의
function GlobalProvider({ children }) {
  const [mileage, setMileage] = useState(0);  // 초기 mileage 값은 0
  const [point, setPoint] = useState(0);      // 초기 point 값은 0
  const [elec, setElec] = useState(true);
  const [elec1, setElec1] = useState(5);
  const [elec3, setElec3] = useState(54);
  const [elec5, setElec5] = useState(96);
  const [elec7, setElec7] = useState(4.4);
  const [elec9, setElec9] = useState(73);
  const [elec11, setElec11] = useState(34);

  const [water, setWater] = useState(true);
  const [gas, setGas] = useState(true);
  const [trees, setTree] = useState(0);



  return (
    <GlobalContext.Provider value={{ mileage, setMileage, point, setPoint, elec, setElec, water, setWater,  gas, setGas, trees, setTree}}>
      {children}
    </GlobalContext.Provider>
  );
}

// GlobalContext 및 GlobalProvider 내보내기
export { GlobalContext, GlobalProvider };