import Profile from "../models/Profile.js";

export const profile = async () => {
  const profile = await Profile.find();
  return profile;
};

export const getSingleProfile = async (id) => {
  const profile = await Profile.find({ pid: id });
  if (!profile) return "no profile found ";
  return profile;
};

export const getSingleProfileId = async (id) => {
  const profile = await Profile.findById({ _id: id });
  if (!profile) return "no profile found ";
  return profile;
};

export const addProfile = async (profileData) => {
  const profile = new Profile(profileData);
  await profile.save();
  return profile;
};

export const update = async (id, data) => {
  const updated = await Profile.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        Price: data.Price,
        brandName: data.brandName,
        category: data.category,
        description: data.description,
        sizes: data.sizes,
        status: data.status,
        title: data.title,
        images: data.images,
      },
    }
  );

  return updated;
};

export const deleteProfile = async (id) => {
  const del = await Profile.findByIdAndDelete({ _id: id });
  return del;
};

export const getShopKeeperProfile = async (id) => {
  const shop = await Profile.find({ pid: id });
  if (!shop) return "no Shop found ";
  return shop;
};
