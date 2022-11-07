import { useMultiForm } from "./hook/use-multi-form";
import { LoginForm } from "./features/login-form/";
import { RandomPasswordForm } from "./features/random-password-form/";
import { IntroForm } from "./features/intro-form/";

const componentsArray = [LoginForm, RandomPasswordForm, IntroForm];
function App() {
  const {
    componentIdx,
    componentsArrayLength,
    currentComponent: CurrentComponent,
    goToPrevForm,
    goToNextForm,
  } = useMultiForm(componentsArray);
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>Multi-step Form</h1>
      <CurrentComponent />
      <span>
        {componentIdx + 1} / {componentsArrayLength}
      </span>
      <button onClick={goToPrevForm}>Prev</button>
      <button onClick={goToNextForm}>Next</button>
    </>
  );
}

export default App;
