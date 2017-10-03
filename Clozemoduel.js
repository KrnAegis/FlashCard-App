function Clozemoduel(text, cloze){
	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, ". . .")

	if (this.cloze === undefined){
		console.log('err: cloze deletion is missing!')
	};
}
module.exports = Clozemoduel;