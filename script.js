var i = 0, j = 0;

var space = "",
    tree = "";

var max = 25;

while (i < max) {
    space = "";
    tree = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) tree += "*";
    console.log(space + tree);
    i++;
}
