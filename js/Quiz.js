class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
    // this.input1.hide();
    // this.input2.hide();
    // this.button.hide(); 
     this.question.hide(); 
    // this.option1.hide(); 
    // this.option2.hide(); 
    // this.option3.hide(); 
    // this.option4.hide(); 
    
    //write code to change the background color here
    background("Yellow");
    //write code to show a heading for showing the result of Quiz
    this.title.html("Results of Quiz");
    //call getContestantInfo( ) here
     if(allContestants !== undefined){
     
     }
     Contestant.getContestantInfo();
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here
     if (allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("*Note: Contestant who answered correct are highlighted in Green Color!", 130,230);
     }

    //write code to highlight contest who answered correctly
    if(allContestants !== undefined){
      for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("green");
        else
          fill("red");
      }
     }
  }

}
