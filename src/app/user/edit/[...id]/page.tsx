import UserForm from "@/components/UserForm";
import { getUserById } from "@/lib/actions/user";

export default async function EditUserPage({
    params,
}: {
    params: Promise<{ id: string[] }>;
}) {
    const resolvedParams = await params;
    const userId = resolvedParams.id[0];
    const userData = await getUserById(userId);
    console.log(userData);
    return <UserForm typeForm="edit" userDb={userData} />;
}
