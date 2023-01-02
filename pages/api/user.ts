import { getSession } from "next-auth/react";
import { updateUser } from "@/prisma/helpers";

export default async function handle(req, res) {
  // Get the current session data with {user, email, id}
  const session = await getSession({ req });
  // Run if the request was a post request
  if (req.method == "POST") {
    const { userDetails } = req.body;

    const note = await updateUser(id, userDetails, session);

    return res.json(note);
  }
}
