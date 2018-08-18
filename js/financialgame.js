function initVars()
{
	variables['dynamic_instruction_count']="6";	//Number of dynamic instructions
	variables['dynamic_instruction_image_1']="three farmers mid.png";	//dynamic instruction image 1
	variables['dynamic_instruction_image_2']="fat cow.png";	//dynamic instruction image 2
	variables['dynamic_instruction_image_3']="";	//dynamic instruction image 3
	variables['dynamic_instruction_image_4']="";	//dynamic instruction image 4
	variables['dynamic_instruction_image_5']="";	//dynamic instruction image 5
	variables['dynamic_instruction_image_6']="";	//dynamic instruction image 6
	variables['dynamic_instruction_text_1']="Three farmers must decide simultaneously whether or not to bring their cow to the commons or to barn-feed. Using the commons is best if no one else uses the commons, but it is the worst option if everyone brings a cow to the commons.";	//dynamic instruction 1 text 
	variables['dynamic_instruction_text_2']="Every farmer wants his own cow to be fed as much as possible. You are going to have %total_rounds_count% trials to accomplish this.";
	variables['dynamic_instruction_text_3']="No matter what the other participants choose, if you select Barn Feed, you will earn a guaranteed payoff of %payoff[2][1]%. Go on and press on it...";
	variables['dynamic_instruction_text_4']="If two farmers bring their cows to the commons, they will receive %payoff[1][2]%. Please bring your cow to commons to observe this behavior...";
	variables['dynamic_instruction_text_5']="If only one farmer brings a cow to the commons, that farmer will get a maximum payoff of %payoff[1][4]%. Go on and press on Bring to Commons...";
	variables['dynamic_instruction_text_6']="But, if all of farmers bring a cow to the commons at the same time, all will receive a payoff of %payoff[1][1]% as a penalty. Go on and press on Bring to Commons...";
	variables['dynamic_instruction_text_1_payoff_cell']="";	//Pay off cell for dynamic instruction text 1 which is being introduced 
	variables['dynamic_instruction_text_2_payoff_cell']="";
	variables['dynamic_instruction_text_3_payoff_cell']="(2,1)";
	variables['dynamic_instruction_text_4_payoff_cell']="(1,2)";
	variables['dynamic_instruction_text_5_payoff_cell']="(1,4)";
	variables['dynamic_instruction_text_6_payoff_cell']="(1,1)";
	variables['information_column_count']="2";	//Number of information columns 
	variables['information_row1_column1_image']="barn feed.png";	//information row 1 column 1 image 
	variables['information_row1_column1_outcome_text']="You decided to feed your cow from barn and received %payoff[2][1]% share from the resource";	//information row 1 column 1 outcome text
	variables['information_row1_column1_payoff_cells']="(2,1) (2,2) (2,3) (2,4)";	//Payoff cells for row 1 column 1
	variables['information_row1_column1_text']="Barn feeding gives you a guaranteed payoff of %payoff[2][1]%.";	//information row 1 column 1 text
	variables['information_row1_column2_image']="two commons.png";	
	variables['information_row1_column2_outcome_text']="You and one other farmer chose to bring cows to commons. Each of you received %payoff[1][2]%.";	
	variables['information_row1_column2_payoff_cells']="(1,2) (1,3)";	
	variables['information_row1_column2_text']="If you and one other farmer bring your cows to commons, each of you will get %payoff[1][2]%.";	
	variables['information_row2_column1_image']="cow mid.png";	
	variables['information_row2_column1_outcome_text']="You decided to bring your cow to commons and others chose barn feed. You received a maximum payoff of %payoff[1][4]%.";	
	variables['information_row2_column1_payoff_cells']="(1,4)";	
	variables['information_row2_column1_text']="If you are the only one who brings a cow to the commons, you will get the maximum payoff of %payoff[1][4]%.";	
	variables['information_row2_column2_image']="three cows.png";	
	variables['information_row2_column2_outcome_text']="All farmers brought a cow to commons. Each of you received %payoff[1][1]% as penalty. ";	
	variables['information_row2_column2_payoff_cells']="(1,1)";	
	variables['information_row2_column2_text']="If all farmers bring a cow to commons, each of you will receive %payoff[1][1]% as penalty.";	
	variables['information_row_count']="2";	//Number of information rows 
	variables['Polling_Text']="You are not currently assigned to a round. Please wait...";	//Text that is displayed if you aren't included in a round 
	variables['Prev_Rnd_Choice_Text']="Prev. Round Choice";	//Previous round choice caption
	variables['Prev_Rnd_Payoff_Text']="Prev. Round Payoff";	//Previous round payoff caption
	variables['static_instruction_count']="6";	//Number of static instructions
	variables['static_instruction_image_1']="three farmers mid.png";	//static instruction 1 image
	variables['static_instruction_image_2']="fat cow.png";
	variables['static_instruction_image_3']="barn feed.png";
	variables['static_instruction_image_4']="two commons.png";
	variables['static_instruction_image_5']="cow mid.png";
	variables['static_instruction_image_6']="three cows.png";
	variables['static_instruction_text_1']="Three farmers must decide simultaneously whether or not to bring their cow to the commons or to barn-feed. Using the commons is best if no one else uses the commons, but it is the worst option if everyone brings a cow to the commons.";	//static instruction 1 text 
	variables['static_instruction_text_2']="Every farmer wants his own cow to be fed as much as possible. You are going to have %total_rounds_count% trials to accomplish this.";
	variables['static_instruction_text_3']="Barn feeding gives a guaranteed payoff of %payoff[2][1]%.";
	variables['static_instruction_text_4']="If two farmers bring their cows to the commons, they will receive %payoff[1][2]%.";
	variables['static_instruction_text_5']="If only one farmer brings a cow to the commons, that farmer will get a maximum payoff of %payoff[1][4]%.";
	variables['static_instruction_text_6']="But, if all of farmers bring a cow to the commons at the same time, all will receive a payoff of %payoff[1][1]% as a penalty.";
	variables['Total_Payoff_Text']="Total Payoff";	//Total Payoff 
	variables['Your_Choice_Text']="You selected ";	//Text that is displayed when a choice is selected 
	variables['Avg_Payoff_Text']="Avg. Payoff";	//Average payoff text
}