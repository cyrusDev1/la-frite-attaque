export default defineNuxtPlugin(() => {
  const socials = [
    {
      icon: "basil:facebook-solid",
      to: "https://www.facebook.com/lafriteattaque",
    },
    {
      icon: "line-md:instagram",
      to: "https://www.instagram.com/lafriteattaque",
    },
    {
      icon: "entypo-social:linkedin-with-circle",
      to: "https://www.linkedin.com/company/la-frite-attaque",
    },
  ];

  return {
    provide: {
      socials,
    },
  };
});
