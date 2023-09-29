// Javascript variable skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// This function evaluates the variable value.
// Use either the syntax ${<variable name>.col_<field number>} or ${<variable name>.<field name>} to access the value of the variable field. 
function evaluate() {
	logger.debug("Computing value of js variable");
	return new function() {
		this.firstField = "a value";
		this.secondField = myLibraryFunction();
	};
}
