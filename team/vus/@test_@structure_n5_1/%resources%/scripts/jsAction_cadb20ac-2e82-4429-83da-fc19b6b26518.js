// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var categoryId = context.variableManager.getValue("categoryId");
var name_product = context.variableManager.getValue("name_product");
var animalId = context.variableManager.getValue("sous_categoryId");
var price_product = context.variableManager.getValue("price_product");
let result = name_product+" - "+animalId+" - "+price_product;

if (categoryId==null || animalId==null || name_product==null || price_product==null) {
        context.fail("Variable 'categoryId' or 'animalId' or 'name_product' or 'price_product' not found ");
}

// Display result
logger.debug(result);

// Copy result into file
var writer = new java.io.FileWriter("C:\\Users\\mndia\\OneDrive\\Documents\\NeoLoad Projects\\Test\\variables\\file.txt", true);
writer.write(result);
writer.write("\n");
writer.close();