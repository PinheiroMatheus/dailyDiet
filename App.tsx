import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import theme from "@theme/index";
import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";
import { Statistics } from "@screens/Statistics";
import { ResultDiet } from "@screens/ResultDiet";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      
      { fontsLoaded ? <ResultDiet type="POSITIVE"/> :  <Loading />}
    </ThemeProvider>
  );
}