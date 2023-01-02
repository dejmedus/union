import prisma from "@/lib/prismadb";

export const getUserByID = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

export const updateUser = async (id, userDetails, session) => {
  let userId = session?.user.id;

  const updatedUser = await prisma.user.update({
    where: {
      id: {
        userId,
      },
    },
    data: {
      ...userDetails,
    },
  });
  const note = await getUserByID(updatedUser);
  return note;
};
