import { getServerSession } from "next-auth/next";
import { authOption } from "@/utils/authOption";

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(authOption);

    if (!session || !session.user) {
      return null;
    }
    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
