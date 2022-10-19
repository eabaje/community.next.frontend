// import * as MuiIcons from "@material-ui/icons";
// import StringSimilarity from "string-similarity";

// const IconMUI = ({ iconName }) => <>{MuiIcons[iconName]}</>;

// export default IconMUI;

import * as icons from "@material-ui/icons";
import stringSimilarity from "string-similarity";

function IconMUI(word) {
  const iconsNames = Object.keys(icons);

  var matches = stringSimilarity.findBestMatch(word, iconsNames);
  const bestMathch = matches.bestMatch.target;
  const Icon = icons[bestMathch];
  return Icon;
}
export default IconMUI;
