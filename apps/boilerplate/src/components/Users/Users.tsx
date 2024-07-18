import { User } from "@components/Users/User";
import type { UserProps } from "@components/Users/User";

export interface UsersProps {
  users: UserProps[];
}

export const Users = ({ users }: UsersProps) => (
  <table>
    <tbody>
      {users &&
        users.length > 0 &&
        users.map((user) => <User key={user.id} {...user} />)}
    </tbody>
  </table>
);
