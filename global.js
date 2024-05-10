import React, { createContext, useContext, useState } from 'react';
import { Text, View, Button } from 'react-native';

// Context 생성
const GlobalContext = createContext();

// GlobalProvider 컴포넌트 정의
function GlobalProvider({ children }) {
  const [mileage, setMileage] = useState(0);  // 초기 mileage 값은 0
  const [point, setPoint] = useState(0);      // 초기 point 값은 0

  return (
    <GlobalContext.Provider value={{ mileage, setMileage, point, setPoint }}>
      {children}
    </GlobalContext.Provider>
  );
}

// GlobalContext 및 GlobalProvider 내보내기
export { GlobalContext, GlobalProvider };
