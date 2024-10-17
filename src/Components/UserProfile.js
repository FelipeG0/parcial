const UserProfile = ({ user }) => {
    return (
      <div className="user-profile">
        <img src={user.profileImage} alt="User profile" className="profile-image" />
        <h2>{user.name}</h2>
        <div className="best-times">
          <div>
            <span role="img" aria-label="Cycling">🚴</span> {user.bestTimes.cycling}
          </div>
          <div>
            <span role="img" aria-label="Running">🏃</span> {user.bestTimes.running}
          </div>
          <div>
            <span role="img" aria-label="Swimming">🏊</span> {user.bestTimes.swimming}
          </div>
        </div>
      </div>
    );
  };
  
  export default UserProfile;
  