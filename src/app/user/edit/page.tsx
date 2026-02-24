import UserForm from "@/components/UserForm";
import { getUserById } from "@/lib/actions/user";

export default async function EditUserPage() {
    const userData = await getUserById();
    return <UserForm typeForm="edit" userDb={userData} />;
}
