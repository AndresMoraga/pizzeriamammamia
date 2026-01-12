const Profile = () => {
  return (
    <div className="container mt-5 text-center">
      <h2>Perfil de usuario</h2>

      <p className="mt-3">
        <strong>Email:</strong> usuario@correo.cl
      </p>

      <button className="btn btn-outline-danger mt-3">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;