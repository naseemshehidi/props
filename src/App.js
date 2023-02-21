import Profile from "./profile/Profile";
import profileImage from "./profile/profile.jpg";

function App() {
  const handleName = (name) => {
    alert(`Profile user's name is ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Nassim Chehidi"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        profession="Software Engineer"
        handleName={handleName}
      >
        {profileImage}
      </Profile>
    </div>
  );
}

export default App;

