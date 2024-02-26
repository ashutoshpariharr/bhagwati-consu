function Hero() {
  return (
    <div className="container">
      <div className="profile">
        <span
          style={{
            fontSize: "15px",
            marginLeft: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
          Admin
        </span>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="profile-img"
        />
      </div>
    </div>
  );
}

export default Hero;
