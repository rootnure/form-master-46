import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update data', data);
  }

  return (
    <>

      <h1>Vite + React</h1>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={'Sign Up Page'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Sign Up Page. Fill-fill all the fields to sign up.</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={'Update Profile Page'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableForm>
    </>
  )
}

export default App
