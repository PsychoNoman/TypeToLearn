export default () => {
  const texts = [
    "Dogs belong to the taxonomic family Canidae (canines) which is divided into two tribes: those related to wolves (Canini) and those related to foxes (Vulpini). A couple of canine species lay outside these two tribes, but hyenas are not canines.",
    "Crocodiles are the ultimate survivors. Having arisen some 200 million years ago, they have outlived the dinosaurs by some 65 million years. Even humans, the most fearsome predators ever to stalk the Earth, have failed to force into extinction any of the 23 species of crocodilians.",
    "Daphnia are an extremely important part of aquatic food chains. They eat primary producers such as algae, yeast, and bacteria. Daphnia are the prey of tadpoles, salamanders, newts, aquatic insects, and many types of small fish.",
    "The largest country with no border-access to the open ocean is Kazakhstan, which has an area of 2,724,900 km (1,052,100 mile) and is bordered by Russia, China, Kyrgystan, Uzbekistan, Turkmenistan, and the landlocked Caspian Sea.",
    "Traditionally most flat roofs in the western world make use of tar or more usually tar paper applied over roof decking to keep a building watertight. The tar or tarpaper is in turn covered in gravel to keep the sun's heat, UV rays and weather off it and helps protect it from cracking or blistering and degradation.",
    "In 2012, German freediver Tom Sietas held his breath underwater for 22 minutes and 22 seconds, besting Dane Stig Severinsen's previous Guinness record by 22 seconds.",
    "Dimples are caused by an abnormally short facial muscle. The zygomaticus major, a facial muscle, is attached to the skin of your cheeks. Dimples appear when the muscle pulls hard enough on your cheeks to cause visible indentations on your face. This usually occurs when we speak or smile, when the muscle is contracting.",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};
