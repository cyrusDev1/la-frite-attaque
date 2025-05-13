export default defineNuxtPlugin(() => {
  const socials = [
    { icon: "basil:facebook-solid", to: "" },
    { icon: "line-md:instagram", to: "" },
    { icon: "entypo-social:linkedin-with-circle", to: "" },
  ];

  return {
    provide: {
      socials,
    },
  };
});
