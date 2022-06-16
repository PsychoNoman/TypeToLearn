// import React, { useState, useEffect } from "react";
// console.log(data);
export default () => {
  // const [fact, setFact] = useState(null);

  // const getFact = () => {
  //   fetch("https://asli-fun-fact-api.herokuapp.com/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFact(data.data);
  //     });
  //    console.log(fact.fact)
  // };

  const texts = [
    "will an later night do red run to idea like help right look family city example left red red walk point long eye together feet black four own around great house house off must carry enough now about go time before some many follow oil old sun much do try were different has close show had children eye by different girl change name land form soon had later up see these an may feet great book always form family came night have more great cut thought this first sea his",
    "thought run might along between enough like put there city there also hard answer word mean and when very close be show find black below best must few him leave day these again thought for state new than if go four go along grow begin answer first about from almost sea does to every run oil try study as over later give own we paper fire important girl eat down air found through than earth two see their life us the once think far never land line hard water than",
    "not my so eye in house us same so should them mother land him before he they along I eye I we below land hand without idea a far time never form soon even different often well found mean again we turn too under these enough tell three new should show head big side mean know mother good said other mean back such below show took above girl hear while does are her a form here with down young need about ask watch and men do list example life too ",
    "we say family another study point talk air eat if second may when father under hard sea up word under being list give be day the next number set important should world began fall never thing try white too cut soon tree important feet some at song back earth your our up three river look make while land ask I change his look move saw if try you in before few they light state will has way oil a tell been no should saw been last put animal every does   ",
    "home show later how who little school watch from know every fall because help second be hand other us into did go two them back their song story high know cut again which once turn hard get should off red walk its an began might name made when new answer as came few upon place head some took see play carry face head song once than my open very again without has around large war more has learn every good eat which family earth carry put through such into talk",
    "help into down up white just fire put went sound book red here old of on not few something move seem still sometimes when carry feet turn I open try these made car world he great carry well what my spell for should war read his know both enough grow how example came she thought letter came own two a work him fall different new this letter different call off spell right show by every its must this under we even group before talk stop enough if put each idea",
    "above food is together so no white use list great light can those old example different live all face hand number which mile sea man would along follow best he another an what white of very came place carry often away mile show to big letter very answer feet are off how land people line when any on must some state long head small around long through different year young out how miss water under from hand white first an best is own no a last our him land not",
    "four something mean world another have and face here down side place almost than that place cut small would some sound try no such home I for no from keep animal just turn then girl place have great at few man word your open without family so number hear black family air line line girl never and it why paper say call live end own write home list need who back need start if here only after stop same the grow or write face oil face house have but book",
  ];

  return texts[Math.floor(Math.random() * texts.length)];
};
