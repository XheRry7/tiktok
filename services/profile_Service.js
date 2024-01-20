import Profile from "../models/Profile.js";

export const getSingleProfile = async (id) => {
  const profile = await Profile.find({ pid: id });
  if (!profile) return "no profile found ";
  return profile;
};

export const getSingleProfileById = async (id) => {
  const profile = await Profile.findOne({
    where: { userId: id },
    include: ["User"],
  });
  if (!profile) return "no profile found ";
  return profile;
};

export const addProfile = async (profileData) => {
  const profile = new Profile(profileData);
  await profile.save();
  return profile;
};

export const update = async (id, data) => {
  const updated = await Profile.update(data, {
    where: { userId: id },
    returning: true,
  });
  return updated;
};

export const deleteProfile = async (id) => {
  const del = await Profile.destroy({where: { id: id }, returning: true});
  return del;
};
