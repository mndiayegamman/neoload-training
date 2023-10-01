// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var categoryId = context.variableManager.getValue("categoryId");
var animalId = context.variableManager.getValue("sous_categoryId");
if (categoryId==null || animalId==null) {
        context.fail("Variable 'categoryId' or 'animalId'' not found");
}

// Do some computation using the methods
// you defined in the JS Library
logger.debug(categoryId+" - "+animalId);