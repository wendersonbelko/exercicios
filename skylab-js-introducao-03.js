function temHabilidade(skills){
  for(i = 0; i < skills.length; i++){
    if(skills[i] === "Javascript"){
      return console.log(true);
    }
  }
};
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);
