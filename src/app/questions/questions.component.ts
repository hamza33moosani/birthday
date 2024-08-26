import { Component, OnInit } from '@angular/core';
import { BackMouseService } from '../back-mouse.service';
import { Router } from '@angular/router';
interface incorrect_message
{
  id:number,
  response:string
}
interface option
{
  choice:string,
  disabled:boolean
  image:boolean
  imageUrl?:string
  active:boolean
  id:number
}
interface quiz_questions
{
  question:string,
  options:option[]
  correct:number,
  incorrect?:number,
  iscorrect:boolean
  isincorrect:boolean
  correct_message:string
  incorrect_message:incorrect_message[]
  selected:number
}
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit{
  src!:string
  icon!:string
  answer1!:string
  correct:boolean=false
  incorrect:boolean=false
  buttonId:number=-1;
  id!:number
  correct_count:number=0
  active_option!:option
  color!:string
  message!:incorrect_message
  intial_options=["1. Promise neverland ","2.You ", "3.My lil pony"," 4.Wednesday "]
  end:boolean=false
  questions: quiz_questions[]=[
    {
      question: "How did we start becoming friends",
      options: [
        {
          choice: "1. I messaged you because I liked a picture you took(weirdo am I right )",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. I approached u like hey mama whats up",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. We were in the same cycle event by school",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "4. I wanted your blue passport",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "5. Reeja was a mutual friend ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Yeah i am a weirdo bro ,like who deos that but i am sooooo thankful i messaged you',
      incorrect_message: [
        {
          id: 2,
          response: "Okay i aint johnny bravo my guy"
        },
        {
          id: 3,
          response: "We were yes but not the answer actually "
        },
        {
          id: 4,
          response: "I mean it would be cool have to a blue passport but thats not the reason "
        },
        {
          id: 5,
          response: "Whos reeja"
        },
      ],
      selected: 0
    },
    {
      question: "Where could we have met before we actually met ",
      options: [
        {
          choice: "1. In dhoraji at anees Ghani clinic",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. In dallas",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. In Newyork ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "4. In dubai",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
      ],
      correct: 2,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Yeah remember i came to merica back in the day good times',
      incorrect_message: [
        {
          id: 1,
          response: "Okay it could have happened but not the answer"
        },
        {
          id: 3,
          response: "How did you pick this "
        },
        {
          id: 4,
          response: "How did you pick this "
        },
      ],
      selected: 0
    },
    {
      question: "Whos better at cod mobile  ",
      options: [
        {
          choice: "1. Me ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. you ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. Ahsan",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 2,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Unfortunately you are better',
      incorrect_message: [
        {
          id: 1,
          response: "Kinda flattered you pick me wesey"
        },
        {
          id: 3,
          response: "How is he better "
        },
      ],
      selected: 0
    },
    {
      question: "When did you call me during hypercube  ",
      options: [
        {
          choice: "1. During uncharted part but I said not now",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2.During Concert part but I left you in the crowd (Sorry)",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. During the first day but I didn’t respond to you ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Yeah i was working man ,i am such a nice guy i picked up your call at least',
      incorrect_message: [
        {
          id: 2,
          response: "I am sorry for that ,i was just have a headache and i dont really know what to do in concerts"
        },
        {
          id: 3,
          response: "When did that happen "
        },
      ],
      selected: 0
    }
    ,
    {
      question: "Who did you play cs with in computer lab ",
      options: [
        {
          choice: "1. On your own ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. Played with me ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. Played with reeja ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "4. Played with my feelings ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 2,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Yee you were my mouse .I had fun because of you ,if only you played more',
      incorrect_message: [
        {
          id: 1,
          response: "You dont play on ur own ;("
        },
        {
          id: 3,
          response: "WOOOOW TRAITOR "
        },
        {
          id: 4,
          response: "I mean you can if you wanna "
        },
      ],
      selected: 0
    },
    {
      question: "What did I do for your last bday ",
      options: [
        {
          choice: "1. Nothing (Hamza is a big retarded meanie)",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. A letter",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. A dino book ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "4. Dress and hijab ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: -2,
      incorrect: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Honestly picking any except for the 1st is correct',
      incorrect_message: [
        {
          id: 1,
          response: "That actually hurts"
        },
      ],
      selected: 0
    },
    {
      question: "Who confessed first  ",
      options: [
        {
          choice: "1. You(infatuation hate that word)",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. Me",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. Ahsan ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'I am sorry for saying that but khair now i do love you :D',
      incorrect_message: [
        {
          id: 2,
          response: "No i dont think so"
        },
        {
          id: 3,
          response: "Why How when???"
        }
      ],
      selected: 0
    },
    {
      question: "When You came to Dunkin After caie exams who did you sit next to  ",
      options: [
        {
          choice: "1. A cat",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. Hadiya",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. Reeja ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "4. Hamza initially then he ignore me so I cuddled with reeja ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 4,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Yeah i am a jerk sorry',
      incorrect_message: [
        {
          id: 1,
          response: "I am sure you would prefer this"
        },
        {
          id: 2,
          response: "No you dont love her that much"
        },
        {
          id: 3,
          response: "Well you sit with her but no "
        }
      ],
      selected: 0
    },
    {
      question: "What was the promise made ",
      options: [
        {
          choice: "1. Make wang wang on (our?) wedding ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. To shift to merica",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "3. To be a better friend and a better person  ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "4. That hamza is poopo pippy ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'That was indeed the promise but lets see ,cuz we did get a bit tired of it ',
      incorrect_message: [
        {
          id: 2,
          response: "I will with you tho but not the promise"
        },
        {
          id: 2,
          response: "Will try to be but not the promise"
        },
        {
          id: 3,
          response: "You are right i am but no points for you ;( "
        }
      ],
      selected: 0
    },
    {
      question: "Girls day out question",
      options: [
        {
          choice: "",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/face.jpg",
          id: 0
        },
        {
          choice: "",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/face2.jpg",
          id: 0
        },
        {
          choice: " ",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/face3.jpg",
          id: 0
        },
        {
          choice: "",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/face4.jpg",
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Yeah apparently you are correct',
      incorrect_message: [
        {
          id: 2,
          response: "I have no idea i wasnt there"
        },
        {
          id: 2,
          response: "I have no idea i wasnt there"
        },
        {
          id: 3,
          response: "I have no idea i wasnt there"
        }
      ],
      selected: 0
    },
    {
      question: "Whos more toxic ",
      options: [
        {
          choice: "1. Me ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. Poison",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'OOO you got it correct nice',
      incorrect_message: [
        {
          id: 2,
          response: "Nah i am more toxic"
        }
      ],
      selected: 0
    },
    // fix this later and add image if div and add incorrect and correct ,incorrect no mandatory ,add id to keep up with text add disabled ? 
    {
      question: "Which one is the one you wrote first",
      options: [
        {
          choice: "1.",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/image1.jpg",
          id: 0
        },
        {
          choice: "2.",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/image2.jpg",
          id: 0
        },
        {
          choice: "3.",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/image3.jpg",
          id: 0
        },
        {
          choice: "4.",
          disabled: false,
          image: true,
          active: false,
          imageUrl:"assets/images/image4.jpg",
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'YEE This is the best honestly ,i read it often',
      incorrect_message: [
        {
          id: 2,
          response: "pretty sure this isnt you"
        },
        {
          id: 3,
          response: "This is you but this is second thing"
        },
        {
          id: 4,
          response: "This is what your sis wrote not u"
        }
      ],
      selected: 0
    },
    {
      question: "I love you  ",
      options: [
        {
          choice: "1. Yes",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. No",
          disabled: true,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'OFCourse i do like why would i do this then',
      incorrect_message: [
        {
          id: -1,
          response: "how did u get here"
        }
      ],
      selected: 0
    },
    {
      question: "What is the thing I took from you for a month or two cause I needed it   ",
      options: [
        {
          choice: "1.	Calculator ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. Your brain ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. You ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "4. Your pens ",
          disabled: false,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: 1,
      iscorrect: false,
      isincorrect: false,
      correct_message: 'Yeah i did take your calculator thanks for the help',
      incorrect_message: [
        {
          id: 2,
          response: "Cant take your brain sorry ,would if i could"
        },
        {
          id: 3,
          response: "Cant even take you man ,wish i could :(("
        },
        {
          id: 4,
          response: "I dont need a pen ;D"
        }
      ],
      selected: 0
    },
    {
      question: "Do you wanna be best friends forever, until we become something even more special, like exploring the world together, going on adventures, and making all our dreams come true like live in merica?",
      options: [
        {
          choice: "1. Yes",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. No",
          disabled: false,
          image: false,
          active: false,
          id: 0
        },
        {
          choice: "2. Maybe",
          disabled: true,
          image: false,
          active: false,
          id: 0
        }
      ],
      correct: -3,
      iscorrect: false,
      isincorrect: false,
      correct_message: '',
      incorrect_message: [
        {
          id: -1,
          response: "how did u get here"
        }
      ],
      selected: 0
    }
  ]
  constructor(private service :BackMouseService, public router:Router){
      this.src=service.getBackGround()
      this.icon=service.getMouse()
      this.color=service.getColor()
  }
  ngOnInit(): void {
    if(!this.service.getBackGround())
      {
        this.src="assets/images/cat_background.png"  
        this.icon='assets/images/cat.png'
        this.color="#94624B"
      }
    console.log(this.service.getBackGround())
    for (let question of this.questions)
      {
        for(let i=0;i<question.options.length;i++)
          {
            question.options[i].id=i+1
          }
      }
      console.log(this.questions)
  }
  buttonClicked(answer:string,id:number)
  {
    this.answer1=answer
    console.log(answer)
    this.buttonId=id
  }
  choiceClicked(option:option,question:quiz_questions)
  {
    question.options.forEach(opt => opt.active = false);
    this.active_option=option
    option.active=true
  }
  quiz_answers(question:quiz_questions)
  {
    console.log(this.active_option)
    question.selected=this.active_option.id
    
    if(question.correct==this.active_option.id)
      {
        question.iscorrect=true
        question.options.forEach(opt => opt.disabled = true);
        this.correct_count+=1
        for(let question1 of this.questions)
          {
              for(let option of question1.options)
                {
                  if(option.disabled==true)
                    {
                      this.end=true
                    }
                  else
                  {
                    this.end=false
                    break
                  }
                }
              if(this.end==false)
                {
                  break
                }
          }
          console.log(this.end)
      }
      else if(question.correct==-2 && this.active_option.id!=question.incorrect)
        {
          question.iscorrect=true
          question.options.forEach(opt => opt.disabled = true);
          this.correct_count+=1
          for(let question1 of this.questions)
            {
                for(let option of question1.options)
                  {
                    if(option.disabled==true)
                      {
                        this.end=true
                      }
                    else
                    {
                      this.end=false
                      break
                    }
                  }
                if(this.end==false)
                  {
                    break
                  }
            }
            console.log(this.end) 
        }
      else if(question.correct==-3)
        {
          question.iscorrect=true
          question.options.forEach(opt => opt.disabled = true);
          this.correct_count+=1
          for(let question1 of this.questions)
            {
                for(let option of question1.options)
                  {
                    if(option.disabled==true)
                      {
                        this.end=true
                      }
                    else
                    {
                      this.end=false
                      break
                    }
                  }
                if(this.end==false)
                  {
                    break
                  }
            }
            console.log(this.end) 
        }
      else
      {
        question.options.forEach(opt => opt.disabled = true);
        question.isincorrect=true
        console.log(question.selected-2)
        let message=question.incorrect_message.find(mess=>mess.id==question.selected)
        if(message)
          this.message=message
        console.log(message?.response) 
      }
  }
  answer()
  {
    if(this.answer1=="3.My lil pony")
      {
        this.correct=true
        this.incorrect=false
      }
    else{
      this.correct=false
      this.incorrect=true
    }
  }
  route()
  {
    this.router.navigateByUrl('/letters')
  }
}
