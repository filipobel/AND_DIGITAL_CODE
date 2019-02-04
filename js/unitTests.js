describe('Filter by skill', ()=>{
	const candidates = [
			{name: "Jan", skills: ["JavaScript"] },
			{name: "Lewis", skills: ["Java", "JavaScript", ".net"]},
			{name: "Brent", skills: "Python"}
	];
  it('Should Filter out one candidate', ()=>{
	filteredCandidates = filterCandidateBySkill(candidates, "JavaScript");
    expect(filteredCandidates.length).toBe(2);
  })
  it('Should Filter out multiple candidates', ()=>{
	  filteredCandidates = filterCandidateBySkill(candidates, "Python")
	  expect(filteredCandidates.length).toBe(1);
  })
  it('Should Return a empty array if no candidates have the skill', ()=>{
	  filteredCandidates = filterCandidateBySkill(candidates, "Docker")
	  expect(filteredCandidates.length).toBe(0)
  });
  
  it('Should put the filtered skill at the start of the List of Skills', ()=>{
	filteredCandidates = filterCandidateBySkill(candidates, ".net")
	expect(filteredCandidates.length).toBe(1)
	expect(filteredCandidates[0].skills[0]).toBe(".net")
  })
})