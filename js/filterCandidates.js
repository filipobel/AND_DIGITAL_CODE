const newCandidates = [
    { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
    { name: "Mario", skills: ["Python", "AWS"] },
    { name: "Jacquline", skills: ["JavaScript", "Azure"] },
    { name: "Kathy", skills: ["JavaScript", "Java"] },
    { name: "Anna", skills: ["JavaScript", "AWS"] },
    { name: "Matt", skills: ["PHP", "AWS"] },
    { name: "Matt", skills: ["PHP", ".Net", "Docker"] }
];

function removeRowsFromTable(table) {
	const rows = table.getElementsByTagName("tr");

	while (rows.length > 1) {
		table.deleteRow(1);
    }
}

function insertCandidate(tbody, name, skills) {
    const newRow = tbody.insertRow();
    const nameCell = newRow.insertCell();
    const skillCell = newRow.insertCell();

    const candidateName = document.createTextNode(name);
    const candidateSkills = document.createTextNode(skills.join(', '));

    nameCell.appendChild(candidateName);
	skillCell.appendChild(candidateSkills);
}

function addCandidatesToTable(table, candidates) {
	candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
}

function filterCandidateBySkill(candidates, skill) {
	
	//just return all candidates if the skill is "All"
	if(skill == "All"){
		return candidates;
	}
	
	//first filter out any candidate that does not have the given skill
	var newCandidates = candidates.filter(candidate => 
		candidate.skills.includes(skill)
		);
		
	//next move the skill to the front of the list of skills for each candidate
	newCandidates.forEach (candidate => moveSkill(skill, candidate.skills));
	
	return newCandidates;
}

function moveSkill(desiredSkill, listOfSkills){
	for(var i = 0; i < listOfSkills.length; i++){
		if(listOfSkills[i] == desiredSkill){
			var tempSkill = listOfSkills.splice(i,1);   // removes the item
            listOfSkills.unshift(tempSkill[0]);         // adds it back to the beginning
            break;
		}
	}
}

function changeOfSkill(newSkill){
	//first check if the last child in document is a table and if so remove it.
	const currentLastChildType =String(document.body.lastChild.nodeName);
	if (currentLastChildType == "TABLE"){
		document.body.removeChild(document.body.lastChild);
	}
	const candidatesTable = document.getElementById("candidates_example");
	const newCandidatesTable = candidatesTable.cloneNode(true);

	removeRowsFromTable(newCandidatesTable);
	const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];
	const filteredCandidates = filterCandidateBySkill(newCandidates, newSkill);

	addCandidatesToTable(newTbody, filteredCandidates)
	document.body.appendChild(newCandidatesTable)
}
