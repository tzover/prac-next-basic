function User(props) {
  const { user } = props

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.address.street}</p>
    </>
  )
}

export default User
