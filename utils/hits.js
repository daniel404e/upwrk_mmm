export function transformItemsToUser(hits) {
  return hits
    .map((hit) => {
      const documentData = hit.documentdata;
      if (!documentData) return;
      const personalInfo = documentData.personalinfo;
      const profileData = documentData.profiledata;
      const user = {
        id: hit.objectID,
        name: `${personalInfo.fname} ${personalInfo.lname}`,
        color: "",
        href: "#",
        imageSrc: profileData.imgsrc,
        imageAlt: profileData.imgsrc,
        price: personalInfo.fname,
      };
      return user;
    })
    .filter(Boolean);
}
