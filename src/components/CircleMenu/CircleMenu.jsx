import "./CircleMenu.styles.css";

export function CircleMenu() {
  return (
    <main className="container">
      <div className="circle-menu">
        <img
          src="https://avatars.githubusercontent.com/u/20403701?v=4"
          alt="Perfil"
          className="profile"
        />

        <button className="item top">Skills</button>
        <button className="item left">Hobbies</button>
        <button className="item right">About me</button>
        <button className="item bottom">Projects</button>
      </div>
    </main>
  );
}
