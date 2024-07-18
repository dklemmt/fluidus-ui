export interface UserProps {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: string;
  language?: string;
  avatar?: string;
}

export const User = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  language,
  avatar,
}: UserProps) => {
  // console.log(user);
  // const { id, firstName, lastName, email, gender, language, avatar } = user;
  return (
    <tr>
      {/*<td>*/}
      {/*  <img src={row.test} alt="" />*/}
      {/*</td>*/}
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{gender}</td>
    </tr>
  );
};
